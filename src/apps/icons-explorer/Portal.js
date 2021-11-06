import React from "react";
import { Box, Flex } from "./components/Box";
import Slider from "./components/Slider";
import {
  Container,
  Button,
  Dropdown,
  Select,
  Card,
  Row,
  Col,
} from "@bootstrap-styled/v4";
import { useCallback, useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "@docusaurus/router";
import styled, { css } from "styled-components";
import IconsetListView from "./components/IconListView";
import IconsetInfoPanel from "./components/IconsetPanel";
import ControlPanel from "./components/ControlPanel";
import Picker from "./components/Picker";
import { iconsets } from "./config";
import { useIconset } from "./useIconset";

const namespace = "@svgr-iconkit/";

const iconsetWithoutScope = (name) => name.replace(namespace, "");
const iconsetWithScope = (name) =>
  name.startsWith(namespace) ? name : namespace + name;

const LinkButton = styled(Box).attrs({ tabIndex: 0, role: "button" })`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 5px;
  margin: 2px 4px;
  ${({ active = false }) =>
    active
      ? css`
          cursor: default;
          color: #fff;
          background-color: ${({ theme }) => theme["$btn-primary-bg"]};
        `
      : css`
          cursor: pointer;
          color: ${({ theme }) => theme["$btn-primary-bg"]};
          &:hover {
            color: ${({ theme }) => theme["$btn-primary-bg"]};
          }
        `}
`;

export default function IconExplorer() {
  const history = useHistory();
  const matches = useRouteMatch();

  const [keyword, setKeyword] = useState("");
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState("#0693E3");
  const [renderingType, setRenderingType] = useState("styled");
  const [maxIconsShown, setMaxIconsShown] = useState(50);

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const {
    onChangeIconset,
    iconsetInfo,
    currentVariant,
    setVariant,
    currentIconsetIndex,
  } = useIconset({ iconsets });
  const onChangeSize = (event) => setIconSize(event.target.value);
  const onShowMore = () => setMaxIconsShown(maxIconsShown + 50);
  const onClickIconset = (packageName) => {
    history.push("/icons-explorer/" + iconsetWithoutScope(packageName));
    // onChangeIconset(index);
    // setMaxIconsShown(50);
  };

  const { iconNames = [], colorize = true } = iconsetInfo || {};

  const isSearchMode =
    !!keyword && typeof keyword === "string" && keyword.length > 0;

  const matchedIconNames = !isSearchMode
    ? iconNames
    : iconNames.filter((name) => name.includes(keyword));

  useEffect(() => {
    const { familyName = "" } = matches.params;
    let index = 0;
    if (familyName) {
      const scopedName = iconsetWithScope(familyName);
      index = iconsets.findIndex((item) => {
        return scopedName === item.packageName;
      });
      onChangeIconset(index);
    }
  }, [matches.params]);

  return (
    <Container>
      <Box p={2}>
        {iconsets.map(({ name, packageName }, index) => (
          <LinkButton
            key={packageName}
            active={currentIconsetIndex === index}
            onClick={() => onClickIconset(packageName)}
          >
            {name}
          </LinkButton>
        ))}
      </Box>
      <ControlPanel
        colorize={colorize}
        iconColor={iconColor}
        onChangeIconColor={setIconColor}
        iconSize={iconSize}
        onChangeIconSize={onChangeSize}
        keyword={keyword}
        onChangeKeyword={(keyword) => {
          setKeyword(keyword);
          setMaxIconsShown(50);
        }}
        renderingType={renderingType}
        onChangeRenderingType={setRenderingType}
      />
      <hr />
      <Row>
        <Col md={4}>
          <IconsetInfoPanel
            variantName={currentVariant}
            keyword={keyword}
            onKeywordChange={setKeyword}
            onVariantChange={setVariant}
            iconsetInfo={iconsetInfo}
            iconSize={iconSize}
            iconColor={iconColor}
          />
          {isSearchMode && (
            <Box my={2}>
              <span>
                {matchedIconNames.length} icon(s) matched by given keyword.
              </span>
            </Box>
          )}
        </Col>
        <Col md={8}>
          <IconsetListView
            variantName={currentVariant}
            keyword={keyword}
            iconSize={iconSize}
            iconColor={iconColor}
            iconsetInfo={iconsetInfo}
            renderingType={renderingType}
            matchedIconNames={matchedIconNames}
            maxIconsShown={maxIconsShown}
            isSearchMode={isSearchMode}
            onShowMore={onShowMore}
          />
        </Col>
      </Row>
    </Container>
  );
}

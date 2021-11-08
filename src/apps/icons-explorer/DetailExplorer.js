import { Col, Container, H1, Header, Row } from "@bootstrap-styled/v4";
import { useHistory, useRouteMatch } from "@docusaurus/router";
import React, { useEffect, useState } from "react";
import { Box } from "../../components/Box";
import LinkButton from "../../components/LinkButton";
import { SpinnerOverlay } from "../../components/Spinner";
import ControlPanel from "./components/ControlPanel";
import IconsetListView from "./components/IconListView";
import IconsetInfoPanel from "./components/IconsetPanel";
import { iconsets, pageSize, pathPrefix, sortedPackageNames } from "./config";
import { useIconset } from "./useIconset";

export default function DetailExplorer() {
  const history = useHistory();
  const matches = useRouteMatch();

  const storageSize = window.localStorage.getItem("ExplorerSize");
  const storageColor = window.localStorage.getItem("ExplorerColor");

  const [keyword, setKeyword] = useState("");
  const [iconSize, setIconSize] = useState(
    storageSize ? Number(storageSize) : 24
  );
  const [iconColor, setIconColor] = useState(storageColor || "#0693E3");
  const [renderingType, setRenderingType] = useState("styled");
  const [maxIconsShown, setMaxIconsShown] = useState(pageSize);

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const {
    onChangeIconset,
    iconsetInfo,
    currentVariant,
    setVariant,
    currentIconsetIndex,
    loading,
  } = useIconset({ iconsets });
  const onChangeSize = (event) => setIconSize(event.target.value);
  const onShowMore = () => setMaxIconsShown(maxIconsShown + pageSize);
  const onClickIconset = (packageName) => {
    history.push(pathPrefix + packageName);
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
    const { packageName = "" } = matches.params;
    let index = 0;
    if (packageName) {
      index = iconsets.findIndex((item) => {
        return packageName === item.packageName;
      });
      onChangeIconset(index);
    } else {
      history.push(pathPrefix);
    }
  }, [matches.params]);

  useEffect(() => {
    window.localStorage.setItem("ExplorerSize", iconSize);
    window.localStorage.setItem("ExplorerColor", iconColor);
  }, [iconSize, iconColor]);

  return (
    <Container>
      <Box py={4}>
        <Header>
          <H1>Icons Explorer</H1>
        </Header>
        <Box mb={4} p={2}>
          {sortedPackageNames.map(({ packageName, name, colorize }, index) => {
            return (
              <LinkButton
                key={packageName}
                active={iconsetInfo && iconsetInfo.packageName === packageName}
                onClick={() => onClickIconset(packageName)}
              >
                {name}
              </LinkButton>
            );
          })}
        </Box>
        <Box position="relative" as={Row}>
          <Box as={Col} zIndex={5} md={4}>
            <Box top="5rem" position="sticky">
              <IconsetInfoPanel
                variantName={currentVariant}
                keyword={keyword}
                onKeywordChange={setKeyword}
                onVariantChange={setVariant}
                iconsetInfo={iconsetInfo}
                iconSize={iconSize}
                iconColor={iconColor}
              />

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
            </Box>
          </Box>
          <Box as={Col} zIndex={0} md={8}>
            {isSearchMode && (
              <Box bgColor="#efefef" my={2}>
                <span>
                  {matchedIconNames.length} icon(s) matched by given keyword.
                </span>
              </Box>
            )}
            <SpinnerOverlay isProcessing={loading}>
              <IconsetListView
                pageSize={pageSize}
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
            </SpinnerOverlay>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

import {
  Col,
  Container,
  H1,
  Header,
  Row,
  Label,
  ButtonGroup,
  Button,
} from "@bootstrap-styled/v4";
import { matchPath, useHistory, useRouteMatch } from "react-router-dom";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Box } from "../../../components/Box";
import LinkButton from "../../../components/LinkButton";
import { SpinnerOverlay } from "../../../components/Spinner";
import ControlPanel from "./ControlPanel";
import IconsetListView from "./IconListView";
import IconsetInfoPanel from "./IconsetPanel";
import { iconsets, pageSize, pathPrefix, sortedPackageNames } from "../config";

const _win = global.window || { 
  localStorage: {
    getItem: () => {},
    setItem: () => {},
  }
}

export default memo(function DetailExplorer(props) {
  const { iconsetInfo, currentIconsetIndex, loading } = props;
  const history = useHistory();

  const storageSize = _win.localStorage.getItem("ExplorerSize");
  const storageColor = _win.localStorage.getItem("ExplorerColor");
  const storageKeyword = _win.localStorage.getItem("ExplorerKeyword");

  const [keyword, setKeyword] = useState(storageKeyword || "");
  const [iconSize, setIconSize] = useState(
    storageSize ? Number(storageSize) : 24
  );
  const [iconColor, setIconColor] = useState(storageColor || "#0693E3");
  const [renderingType, setRenderingType] = useState("styled");
  const [maxIconsShown, setMaxIconsShown] = useState(pageSize);
  const [currentVariant, setVariant] = useState(
    iconsetInfo?.defaultVariant || "regular"
  );

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const onChangeSize = useCallback(
    (event) => setIconSize(event.target.value),
    []
  );
  const onShowMore = () => setMaxIconsShown(maxIconsShown + pageSize);
  const { iconNames = [], colorize = true } = iconsetInfo || {};

  const isSearchMode =
    !!keyword && typeof keyword === "string" && keyword.length > 0;

  const matchedIconNames = !isSearchMode
    ? iconNames
    : iconNames.filter((name) => name.includes(keyword));

  useEffect(() => {
    _win.localStorage.setItem("ExplorerSize", iconSize);
    _win.localStorage.setItem("ExplorerColor", iconColor);
    _win.localStorage.setItem("ExplorerKeyword", keyword);
  }, [iconSize, iconColor, keyword]);

  return (
    <>
      <Box as={Row}>
        <Box as={Col} zIndex={0} xs={12} xl={8}>
          <IconsetInfoPanel
            keyword={keyword}
            onKeywordChange={setKeyword}
            iconsetInfo={iconsetInfo}
            iconSize={iconSize}
            iconColor={iconColor}
          />
          <Box borderTop="1px solid #ccc">
            {isSearchMode && (
              <Box bgColor="#efefef" p={2} m={2}>
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
        <Box as={Col} zIndex={2} xs={12} xl={3}>
          <ControlPanel
            variantNames={iconsetInfo?.variantNames}
            currentVariant={currentVariant}
            onChangeVariant={setVariant}
            colorize={colorize}
            iconColor={iconColor}
            onChangeIconColor={setIconColor}
            iconSize={iconSize}
            onChangeIconSize={onChangeSize}
            keyword={keyword}
            onChangeKeyword={(keyword) => {
              setKeyword(keyword);
              setMaxIconsShown(pageSize);
            }}
            renderingType={renderingType}
            onChangeRenderingType={setRenderingType}
          />
        </Box>
      </Box>
    </>
  );
});

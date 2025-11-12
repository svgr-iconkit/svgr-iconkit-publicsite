import { memo, useEffect, useState } from "react";
import { SpinnerOverlay } from "../../../components/Spinner";
import { pageSize } from "../config";
import { IconsetInfo } from "../types";
import ControlPanel from "./ControlPanel";
import IconsetListView from "./IconListView";
import IconsetPanel from "./IconsetPanel";
import { setLocalStorageItem, useLocalStorage } from "../utils";

interface DetailExplorerProps {
  iconsetInfo: IconsetInfo;
  currentIconsetIndex: number;
  loading?: boolean;
}

export default memo(function DetailExplorer(props: DetailExplorerProps) {
  const { iconsetInfo, loading } = props;

  const [
    storageSize,
    storageColor,
    storageKeyword,
    storageStrokeWidth,
    storageCustomStroke,
  ] = useLocalStorage(
    "ExplorerSize",
    "ExplorerColor",
    "ExplorerKeyword",
    "ExplorerStrokeWidth",
    "ExplorerCustomStroke"
  );

  const [keyword, setKeyword] = useState(storageKeyword || "");
  const [iconSize, setIconSize] = useState(
    storageSize ? Number(storageSize) : 24
  );
  const [iconStrokeWidth, setIconStrokeWidth] = useState(
    storageStrokeWidth ? Number(storageStrokeWidth) : 2
  );
  const [iconCustomStroke, setIconCustomStroke] = useState(
    storageCustomStroke || "Yes"
  );
  const [iconColor, setIconColor] = useState(storageColor || "#0693E3");
  const [renderingType, setRenderingType] = useState("styled");
  const [maxIconsShown, setMaxIconsShown] = useState(pageSize);
  const [currentVariant, setVariant] = useState(
    iconsetInfo?.defaultVariant || "regular"
  );

  const onShowMore = () => setMaxIconsShown(maxIconsShown + pageSize);
  const { iconNames = [], colorize = true } = iconsetInfo || {};

  const isSearchMode =
    !!keyword && typeof keyword === "string" && keyword.length > 0;

  const matchedIconNames = !isSearchMode
    ? iconNames
    : iconNames.filter((name) => name.includes(keyword));

  useEffect(() => {
    setLocalStorageItem("ExplorerSize", String(iconSize));
    setLocalStorageItem("ExplorerColor", iconColor);
    setLocalStorageItem("ExplorerKeyword", keyword);
    setLocalStorageItem("ExplorerStrokeWidth", String(iconStrokeWidth));
    setLocalStorageItem("ExplorerCustomStroke", iconCustomStroke);
  }, [iconSize, iconColor, keyword, iconStrokeWidth, iconCustomStroke]);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-8 z-0">
          <IconsetPanel
            iconsetInfo={iconsetInfo}
            iconSize={iconSize}
            iconColor={iconColor}
          />
          <div className="">
            {isSearchMode && (
              <div className="bg-gray-100 dark:bg-gray-800 p-2 m-2 rounded">
                <span>
                  {matchedIconNames.length} icon(s) matched by given keyword.
                </span>
              </div>
            )}
            <SpinnerOverlay isProcessing={loading || false}>
              <IconsetListView
                pageSize={pageSize}
                variantName={currentVariant}
                keyword={keyword}
                iconSize={iconSize}
                iconColor={iconColor}
                iconStrokeWidth={iconStrokeWidth}
                iconCustomStroke={iconCustomStroke === "Yes"}
                iconsetInfo={iconsetInfo}
                renderingType={renderingType}
                matchedIconNames={matchedIconNames}
                maxIconsShown={maxIconsShown}
                isSearchMode={isSearchMode}
                onShowMore={onShowMore}
              />
            </SpinnerOverlay>
          </div>
        </div>
        <div className="xl:col-span-3 z-[2]">
          <ControlPanel
            variantNames={iconsetInfo?.variantNames}
            meta={iconsetInfo?.meta}
            currentVariant={currentVariant}
            onChangeVariant={setVariant}
            iconColor={iconColor}
            onChangeIconColor={setIconColor}
            iconStrokeWidth={iconStrokeWidth}
            onChangeIconStrokeWidth={setIconStrokeWidth}
            iconCustomStroke={iconCustomStroke}
            onChangeIconCustomStroke={setIconCustomStroke}
            iconSize={iconSize}
            onChangeIconSize={setIconSize}
            keyword={keyword}
            onChangeKeyword={(keyword) => {
              setKeyword(keyword);
              setMaxIconsShown(pageSize);
            }}
            renderingType={renderingType}
            onChangeRenderingType={setRenderingType}
          />
        </div>
      </div>
    </>
  );
});


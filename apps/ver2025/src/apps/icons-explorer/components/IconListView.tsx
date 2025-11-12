import React, { useState } from "react";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import { IconsetInfo } from "../types";

interface IconListViewProps {
  iconsetInfo: IconsetInfo;
  matchedIconNames: string[];
  variantName?: string;
  keyword?: string;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
  iconCustomStroke?: boolean;
  isSearchMode?: boolean;
  renderingType?: string;
  maxIconsShown?: number;
  pageSize?: number;
  onShowMore: () => void;
}

export default function IconListView({
  iconsetInfo,
  matchedIconNames,
  variantName = "regular",
  iconSize = 24,
  iconColor,
  iconStrokeWidth = 2,
  iconCustomStroke = true,
  maxIconsShown = 40,
  pageSize = 40,
  onShowMore,
}: IconListViewProps) {
  const [copiedIconName, setCopiedIconName] = useState<string | null>(null);

  if (!iconsetInfo) {
    return null;
  }
  const { Iconset: IconComponent } = iconsetInfo || {};

  const iconProps: {
    size?: number;
    color?: string;
    strokeWidth?: number;
  } = {};
  if (iconSize) iconProps.size = iconSize;
  if (iconColor) iconProps.color = iconColor;
  if (iconCustomStroke && iconStrokeWidth) iconProps.strokeWidth = iconStrokeWidth;

  const handleIconClick = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      setCopiedIconName(iconName);
      setTimeout(() => {
        setCopiedIconName(null);
      }, 500);
    } catch (err) {
      console.error("Failed to copy icon name:", err);
    }
  };

  return (
    <div
      style={{
        color: iconColor || undefined,
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 py-3 my-2"
        style={{
          ["--icon-size" as string]: `${iconSize}px`,
          ["--icon-stroke-width" as string]: iconCustomStroke && iconStrokeWidth ? `${iconStrokeWidth}px` : undefined,
        }}
      >
        {matchedIconNames.slice(0, maxIconsShown).map((name) => (
          <div
            key={`${variantName}-${name}`}
            className="rounded-md m-1 p-1 flex flex-col border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors relative"
            tabIndex={0}
            role="button"
            onClick={() => handleIconClick(name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleIconClick(name);
              }
            }}
          >
            <ErrorBoundary>
              <div
                className="w-full flex justify-center items-center bg-repeat relative"
                style={{
                  minWidth: `${Number(iconSize) + 10}px`,
                  minHeight: `${Number(iconSize) + 10}px`,
                  backgroundImage: "url('/img/explorer-bg.png')",
                }}
              >
                {/* Copy overlay - shows in the middle of the icon */}
                {copiedIconName === name && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div 
                      className="p-5 rounded-lg shadow-lg animate-fade-in-out text-sm font-medium"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: '#111827',
                        fontWeight: 'bold',
                      }}
                    >
                      Icon name copied
                    </div>
                  </div>
                )}
                {IconComponent && (
                  <IconComponent
                    variant={variantName}
                    name={name}
                    {...iconProps}
                  />
                )}
              </div>
            </ErrorBoundary>
            <div className="w-full flex justify-center">
              <p className="text-center text-sm text-gray-800 dark:text-white">
                <small>{name}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
      {matchedIconNames.length > 0 &&
        matchedIconNames.length > maxIconsShown &&
        maxIconsShown < (iconsetInfo.iconNames?.length || 0) && (
          <div className="flex justify-center">
            <button
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => onShowMore()}
            >
              Show more {pageSize} icons
            </button>
          </div>
        )}
    </div>
  );
}


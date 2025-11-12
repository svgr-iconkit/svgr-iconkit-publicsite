import React, { useState } from "react";
import { Icon } from "@svgr-iconkit/core";
import CogsIconContent from "@svgr-iconkit/material-community/icons/regular/cogs";
import IconColorPicker from "@svgr-iconkit/css-gg/icons/regular/color-picker";
import { ChromePicker } from "react-color";
import Picker from "../../../components/Picker";
import Slider from "../../../components/Slider";

interface ControlPanelProps {
  variantNames?: string[];
  currentVariant?: string;
  onChangeVariant?: (variant: string) => void;
  iconColor?: string;
  onChangeIconColor?: (color: string) => void;
  iconSize?: number;
  onChangeIconSize?: (size: number) => void;
  iconStrokeWidth?: number;
  onChangeIconStrokeWidth?: (width: number) => void;
  iconCustomStroke?: string;
  onChangeIconCustomStroke?: (value: string) => void;
  keyword?: string;
  onChangeKeyword?: (keyword: string) => void;
  renderingType?: string;
  onChangeRenderingType?: (type: string) => void;
  meta?: {
    colorize?: boolean;
    hasStrokeStyle?: boolean;
  };
}

export default function ControlPanel({
  variantNames = [],
  currentVariant = "",
  onChangeVariant,
  iconColor = "#0693E3",
  onChangeIconColor,
  iconSize = 24,
  onChangeIconSize,
  iconStrokeWidth = 2,
  onChangeIconStrokeWidth,
  iconCustomStroke = "Yes",
  onChangeIconCustomStroke,
  keyword = "",
  onChangeKeyword,
  meta = { colorize: true, hasStrokeStyle: false },
}: ControlPanelProps) {
  const [isActive, setIsActive] = useState(false);
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);

  return (
    <div
      className={`fixed left-[100vw] z-[7] top-0 w-[280px] transition-transform duration-250 ease-in-out lg:w-[340px] xl:sticky xl:left-auto xl:top-20 xl:w-auto ${
        isActive ? "translate-x-[-240px] lg:translate-x-[-320px] xl:translate-x-0" : ""
      }`}
    >
      <button
        onClick={() => setIsActive((val) => !val)}
        className="absolute border-none left-[-50px] py-3 w-[50px] h-[50px] top-[150px] lg:top-[250px] xl:hidden flex items-center justify-center rounded-tl-md rounded-bl-md border-solid border-l border-t border-b bg-[var(--ifm-navbar-background-color)] border-[var(--ifm-navbar-border-color)] shadow-[var(--ifm-navbar-shadow)]"
      >
        <Icon content={CogsIconContent} size="24" />
      </button>
      <div className="absolute top-[100px] left-0 bg-[var(--ifm-navbar-background-color)] p-2 lg:p-[18px] xl:relative xl:top-auto xl:left-auto xl:w-auto xl:bg-transparent xl:p-0 rounded-tl-lg rounded-bl-lg border-l border-t border-b border-r-0 mr-5 xl:border-none xl:rounded-none xl:shadow-none shadow-[var(--ifm-navbar-shadow)]">
        <form>
          <div className="p-2">
            {variantNames && variantNames.length > 0 && (
              <div>
                <label className="block font-bold text-xs mt-1 mb-1">Variants</label>
                <div className="flex gap-1">
                  {variantNames.map((name) => (
                    <button
                      key={name}
                      data-testid="iconset-variant-button"
                      data-variant-name={name}
                      type="button"
                      onClick={() => onChangeVariant && onChangeVariant(name)}
                      className={`px-3 py-1 text-sm border rounded ${
                        currentVariant === name
                          ? "bg-[var(--ifm-color-primary)] text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div>
                <label className="block font-bold text-xs mt-1 mb-1">Keyword</label>
                <div className="my-1">
                  <input
                    type="text"
                    value={keyword}
                    placeholder="Search icons..."
                    onChange={(evt) => {
                      onChangeKeyword && onChangeKeyword(evt.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md "
                  />
                </div>
            </div>
            <div>
              <label className="block font-bold text-xs mt-1 mb-1">Size</label>
              <div className="flex items-center my-1">
                <Slider
                  min={8}
                  max={128}
                  value={iconSize}
                  onChange={(evt) => {
                    onChangeIconSize && onChangeIconSize(Number(evt.target.value));
                  }}
                  className="flex-1"
                />
                <span className="text-center w-12">{iconSize}</span>
              </div>
            </div>
            {meta.hasStrokeStyle && (
              <>
                <div>
                  <label className="block font-bold text-xs mt-1 mb-1">
                    Use Custom Stroke
                  </label>
                  <div className="flex gap-1">
                    {["Yes", "No"].map((name) => {
                      return (
                        <button
                          key={name}
                          type="button"
                          data-testid="iconset-variant-button"
                          data-variant-name={name}
                          onClick={() =>
                            onChangeIconCustomStroke && onChangeIconCustomStroke(name)
                          }
                          className={`px-3 py-1 text-sm border rounded ${
                            iconCustomStroke === name
                              ? "bg-[var(--ifm-color-primary)] text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-xs mt-1 mb-1">Stroke Width</label>
                  <div className="flex items-center my-1">
                    <Slider
                      min={0.1}
                      max={3}
                      step={0.01}
                      value={iconStrokeWidth}
                      onChange={(evt) => {
                        onChangeIconStrokeWidth &&
                          onChangeIconStrokeWidth(Number(evt.target.value));
                      }}
                      className="flex-1"
                    />
                    <span className="text-center w-12">{iconStrokeWidth}</span>
                  </div>
                </div>
              </>
            )}
            {meta.colorize && (
              <div>
                <label className="block font-bold text-xs mt-1 mb-1">Color</label>
                <Picker
                  isOpen={isColorPickerOpen}
                  onClose={() => setColorPickerOpen(false)}
                  content={
                    <ChromePicker
                      color={iconColor}
                      onChangeComplete={(color) => {
                        onChangeIconColor && onChangeIconColor(color.hex)
                      }}
                    />
                  }
                >
                  <div className="flex my-1">
                    <button
                      type="button"
                      onClick={() => setColorPickerOpen(true)}
                      style={{
                        backgroundColor: iconColor,
                        padding: "0rem 0.5rem",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }}
                      className="flex items-center justify-center border"
                    >
                      <Icon content={IconColorPicker} size={24} color="white" />
                    </button>
                    <input
                      type="text"
                      onClick={() => setColorPickerOpen(true)}
                      value={iconColor}
                      onChange={(e) =>
                        onChangeIconColor && onChangeIconColor(e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-solid border-gray-300 dark:border-gray-600 rounded-tr-md rounded-br-md"
                    />
                  </div>
                </Picker>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}



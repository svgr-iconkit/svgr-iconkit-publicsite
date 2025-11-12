import React, { useEffect } from "react";
import { Icon } from "@svgr-iconkit/core";
import MoreIcon from "@svgr-iconkit/themify-icons/icons/regular/more-alt";

export const ToggleAsideButton = ({
  active,
  onChange,
}: {
  active: boolean;
  onChange: (value: boolean) => void;
}) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handler = () => {
      onChange(false);
    };
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, [active, onChange]);

  return (
    <button
      onClick={() => {

        onChange && onChange(true);
      }}
      className="fixed border-none py-3 right-0 top-20 w-[50px] h-[50px] z-[2] flex items-center justify-center rounded-tl-md rounded-bl-md border-l border-t border-b bg-[var(--ifm-navbar-background-color)] border-[var(--ifm-navbar-border-color)] shadow-[var(--ifm-navbar-shadow)] lg:hidden"
    >
      <Icon content={MoreIcon} size="24px" />
    </button>
  );
};




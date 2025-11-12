import React from "react";
import { Icon } from "@svgr-iconkit/core";
import IconSpinner from "@svgr-iconkit/css-gg/icons/regular/spinner";

export function Spinner({ size = 50 }: { size?: number }) {
  return (
    <div className="animate-spin">
      <Icon size={size} content={IconSpinner} />
    </div>
  );
}

export function SpinnerOverlay({
  isProcessing = false,
  children,
}: {
  isProcessing?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[50vh]">
      {isProcessing && (
        <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
          <Spinner />
        </div>
      )}
      {children}
    </div>
  );
}





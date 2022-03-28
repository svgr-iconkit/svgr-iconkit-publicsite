import { useCallback, useEffect, useState } from "react";

export function useIconset({ iconsets = [], packageName = "" }) {
  const [currentIconsetIndex, setIconsetIndex] = useState(
    iconsets.findIndex((info) => info.packageName === packageName)
  );
  const [iconsetInfo, setIconsetInfo] = useState(iconsets[currentIconsetIndex]);

  return {
    iconsetInfo,
    currentIconsetIndex,
    setIconsetIndex,
  };
}

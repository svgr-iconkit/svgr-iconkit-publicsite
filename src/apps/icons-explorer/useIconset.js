
import { useCallback, useEffect, useState } from "react";

export function useIconset({ iconsets = [] }) {
  const [currentIconsetIndex, setIconsetIndex] = useState(0);
  const [currentVariant, setVariant] = useState("regular");
  const [iconsetInfo, setIconsetInfo] = useState(null);
  const [, setUpdateTime] = useState(0);

  const onChangeIconset = useCallback((newIndex) => {
    setIconsetIndex(newIndex);
    const { defaultVariant = "regular" } = iconsets[newIndex] || {};
    setVariant(defaultVariant);
  }, []);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tmpIconsetInfo = iconsets[currentIconsetIndex] || {};

  useEffect(() => {
    if (!tmpIconsetInfo.resources || tmpIconsetInfo.__loaded) {
      return;
    }
    if (typeof tmpIconsetInfo.resources !== "function") {
      const { Icon, ...restProps } = tmpIconsetInfo.resources;
      const _info = {
        ...tmpIconsetInfo,
        component: Icon,
        __loaded: true,
        ...restProps,
      };
      setUpdateTime(Date.now());
      setIconsetInfo(_info);
      return;
    }
    async function run() {
      const { Icon, ...restProps } = await tmpIconsetInfo.resources();

      const _info = {
        ...tmpIconsetInfo,
        component: Icon,
        __loaded: true,
        ...restProps,
      };
      setUpdateTime(Date.now());
      setIconsetInfo(_info);
    }
    run();
  }, [tmpIconsetInfo, currentIconsetIndex]);

  return {
    iconsetInfo,
    currentIconsetIndex,
    setIconsetIndex,
    onChangeIconset,
    currentVariant,
    setVariant,
  };
}

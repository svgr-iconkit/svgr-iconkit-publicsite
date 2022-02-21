
import { useCallback, useEffect, useState } from "react";

export function useIconset({ iconsets = [] }) {
  const [currentIconsetIndex, setIconsetIndex] = useState(-1);
  const [currentVariant, setVariant] = useState("regular");
  const [iconsetInfo, setIconsetInfo] = useState(null);
  const [, setUpdateTime] = useState(0);
  const [loading, setLoading] = useState(false);

  const onChangeIconset = useCallback((newIndex) => {
    setIconsetIndex(newIndex);
    const { defaultVariant = "regular" } = iconsets[newIndex] || {};
    setVariant(defaultVariant);
  }, []);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tmpIconsetInfo = iconsets[currentIconsetIndex] || {};

  useEffect(() => {
    if (!tmpIconsetInfo || !tmpIconsetInfo.resources || tmpIconsetInfo.__loaded) {
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
      setLoading(true);
      const { Icon, ...restProps } = await tmpIconsetInfo.resources();

      const _info = {
        ...tmpIconsetInfo,
        component: Icon,
        __loaded: true,
        ...restProps,
      };
      setUpdateTime(Date.now());
      setIconsetInfo(_info);
      setLoading(false);
    }
    run();
  }, [tmpIconsetInfo, currentIconsetIndex]);

  return {
    loading,
    iconsetInfo,
    currentIconsetIndex,
    setIconsetIndex,
    onChangeIconset,
    currentVariant,
    setVariant,
  };
}
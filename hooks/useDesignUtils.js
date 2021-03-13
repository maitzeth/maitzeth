import { useTheme } from "../context/themeContext";
import { lightTheme, darkTheme } from "../config";
import { useMedia } from "react-use";

import { useMemo } from "react";

const useDesignUtils = () => {
  const { activeTheme } = useTheme();

  const themeValues = useMemo(() => {
    if (activeTheme === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [activeTheme]);

  const isMobile = useMedia(`(max-width: ${themeValues.media.mobile}px)`);

  const generateProps = (valueOrMap) => {
    if (!valueOrMap) {
      return undefined;
    }

    if (typeof valueOrMap !== "object") {
      return valueOrMap;
    }

    if (valueOrMap.mobile && valueOrMap.desktop) {
      const value = isMobile ? valueOrMap.mobile : valueOrMap.desktop;
      return value ? value : undefined;
    }

    console.error(
      `Box with responsive object must use "mobile" and "desktop" keys.`
    );

    return undefined;
  };

  const generateThemeProps = (themeKey, valueOrMap) => {
    if (!valueOrMap) {
      return undefined;
    }

    if (typeof valueOrMap !== "object") {
      const scaleKey = valueOrMap;
      const scales = themeValues[themeKey];
      return scaleKey ? scales[scaleKey] : undefined;
    }

    if (valueOrMap.mobile && valueOrMap.desktop) {
      const scales = themeValues[themeKey];
      const value = isMobile
        ? scales[valueOrMap.mobile]
        : scales[valueOrMap.desktop];
      return value ? value : undefined;
    }

    console.error(
      `Box with responsive object must use "mobile" and "desktop" keys.`
    );
  };

  return {
    generateProps,
    generateThemeProps,
    isMobile,
    themeValues,
    activeTheme,
  };
};

export default useDesignUtils;

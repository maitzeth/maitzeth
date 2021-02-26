import { mediaQuery, getSpacingValue } from "../theme";
import { mapKeys, has } from "lodash";
import { useTheme } from "../context/themeContext";
import { lightTheme, darkTheme } from "../config";
import Immutable from "immutable";

import { useMemo } from "react";

const useDesignUtils = () => {
  const { theme } = useTheme();

  const themeValues = useMemo(() => {
    if (theme === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [theme]);

  const generateProps = (valueOrMap, fieldName) => {
    if (!valueOrMap) {
      return undefined;
    }

    if (typeof valueOrMap !== "object") {
      return valueOrMap;
    }

    if (valueOrMap.mobile && valueOrMap.desktop) {
      let mobileKey = themeValues.media.mobile;
      let desktopKey = themeValues.media.desktop;

      const initialState = {
        [desktopKey]: {
          maxWidth: "300px",
        },
        [mobileKey]: {
          maxWidth: "100px",
        },
      };

      return initialState;

      // console.log(Map(element));

      // const map1 = Immutable.Map({ a: 1, b: 2, c: 3 });

      // const map2 = map1.set("b", 50);

      // console.log(map1);
      // console.log(map2);

      // const newState = Map(state);

      // const lel = newState.set(fieldName, "400px");

      // console.log(lel);

      return undefined;
    }

    console.error(
      `You must add the key ${
        !valueOrMap.mobile ? "mobile" : "desktop"
      } on your responsive prop this will return undefined`
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
  };

  return { generateProps, generateThemeProps };
};

export default useDesignUtils;

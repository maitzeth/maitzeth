import { mediaQuery, getSpacingValue } from "../theme";
import { mapKeys, has } from "lodash";

const useDesignUtils = () => {
  let styling = {};

  const generateResponsiveProps = (valueOrObj) => {
    mapKeys(valueOrObj, (value, propertyName) => {
      if (!value) {
        styling = {
          ...styling,
          [propertyName]: value,
        };
      }

      if (typeof value !== "object") {
        styling = {
          ...styling,
          [propertyName]: value,
        };
      }

      if (typeof value === "object") {
        mapKeys(value, (responsiveValue, responsiveProperty) => {
          const index = mediaQuery[responsiveProperty];
          const alreadyHaveMediaQuery = has(styling, index);

          if (alreadyHaveMediaQuery) {
            Object.assign(styling[index], {
              [propertyName]: responsiveValue,
            });
          } else {
            styling = {
              ...styling,
              [index]: {
                [propertyName]: responsiveValue,
              },
            };
          }
        });
      }
    });

    return styling;
  };

  return { generateResponsiveProps };
};

export default useDesignUtils;

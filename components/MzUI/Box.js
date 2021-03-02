import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import useDesignUtils from "../../hooks/useDesignUtils";

const Box = ({
  tag,

  maxWidth,
  width,
  maxHeight,
  height,

  display,

  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,

  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,

  flex,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
  justifyContent,
  alignItems,
  borderColor,
  borderWidth,
  backgroundColor,

  fontSize,
  fontWeight,
  textAlign,
  color,
  letterSpacing,
  ...viewProps
}) => {
  const { generateProps, generateThemeProps } = useDesignUtils();

  const calculatedStyles = {
    maxWidth: generateProps(maxWidth),
    width: generateProps(width),
    maxHeight: generateProps(maxHeight),
    height: generateProps(height),

    display: generateProps(display),

    marginTop: generateThemeProps("scale", marginY || marginTop || margin),
    marginBottom: generateThemeProps("scale", marginY || marginTop || margin),
    marginLeft: generateThemeProps("scale", marginX || marginLeft || margin),
    marginRight: generateThemeProps("scale", marginX || marginRight || margin),

    paddingTop: generateThemeProps("scale", paddingY || paddingTop || padding),
    paddingBottom: generateThemeProps(
      "scale",
      paddingY || paddingBottom || padding
    ),
    paddingLeft: generateThemeProps(
      "scale",
      paddingX || paddingLeft || padding
    ),
    paddingRight: generateThemeProps(
      "scale",
      paddingX || paddingRight || padding
    ),

    flex: generateProps(flex),

    flexDirection: generateProps(flexDirection),
    flexWrap: generateProps(flexWrap),
    flexGrow: generateProps(flexGrow),
    flexShrink: generateProps(flexShrink),
    flexBasis: generateProps(flexBasis),
    justifyContent: generateProps(justifyContent),
    alignItems: generateProps(alignItems),
    borderColor: generateProps(borderColor),
    borderWidth: generateProps(borderWidth),

    backgroundColor: generateThemeProps("colors", backgroundColor),

    fontSize: generateThemeProps("fontSizes", fontSize),
    fontWeight: generateThemeProps("weight", fontWeight),
    textAlign: generateProps(textAlign),
    color: generateThemeProps("colors", color),
    letterSpacing: generateProps(letterSpacing),
  };

  return <View as={tag} finalStyles={calculatedStyles} {...viewProps} />;
};

const View = styled.div(({ finalStyles }) => finalStyles);

export default Box;

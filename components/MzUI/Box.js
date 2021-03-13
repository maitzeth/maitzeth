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
  minHeight,

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
  borderStyle,
  backgroundColor,

  fontSize,
  fontWeight,
  textAlign,
  textTransform,
  color,
  letterSpacing,
  borderRadius,
  overflow,
  position,
  top,
  bottom,
  left,
  right,
  transform,
  cursor,
  listStyle,
  ...viewProps
}) => {
  const { generateProps, generateThemeProps } = useDesignUtils();

  const calculatedStyles = {
    maxWidth: generateProps(maxWidth),
    width: generateProps(width),
    maxHeight: generateProps(maxHeight),

    minHeight: generateProps(minHeight),
    height: generateProps(height),

    display: generateProps(display),

    marginTop: generateThemeProps("scale", marginY || marginTop || margin),
    marginBottom: generateThemeProps(
      "scale",
      marginY || marginBottom || margin
    ),
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
    borderColor: generateThemeProps("colors", borderColor),
    borderWidth: generateProps(borderWidth),
    borderStyle: generateProps(borderStyle),

    backgroundColor: generateThemeProps("colors", backgroundColor),

    fontSize: generateThemeProps("fontSizes", fontSize),
    fontWeight: generateThemeProps("weight", fontWeight),
    textAlign: generateProps(textAlign),
    color: generateThemeProps("colors", color),
    letterSpacing: generateProps(letterSpacing),
    borderRadius: generateProps(borderRadius),
    overflow: generateProps(overflow),
    textTransform: generateProps(textTransform),
    position: generateProps(position),
    top: generateProps(top),
    bottom: generateProps(bottom),
    left: generateProps(left),
    right: generateProps(right),
    transform: generateProps(transform),
    cursor: generateProps(cursor),
    listStyle: generateProps(listStyle),
  };

  return <View as={tag} finalStyles={calculatedStyles} {...viewProps} />;
};

const View = styled.div(({ finalStyles }) => finalStyles);

export default Box;

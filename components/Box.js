import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import useDesignUtils from "../hooks/useDesignUtils";

const Box = ({
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
  ...viewProps
}) => {
  const { generateProps, generateThemeProps } = useDesignUtils();

  // const rawStyles = generateResponsiveProps({
  //   maxWidth,
  //   width,
  //   maxHeight,
  //   height,

  //   flex,
  //   flexDirection,
  //   flexWrap,
  //   flexGrow,
  //   flexShrink,
  //   flexBasis,
  //   justifyContent,
  //   alignItems,

  //   borderWidth,
  // });

  const calculatedStyles = {
    maxWidth: generateProps(maxWidth, "maxWidth"),

    // marginTop: generateThemeProps("scale", marginY || marginTop || margin),
    // marginBottom: generateThemeProps("scale", marginY || marginTop || margin),
    // marginLeft: generateThemeProps("scale", marginX || marginLeft || margin),
    // marginRight: generateThemeProps("scale", marginX || marginRight || margin),

    // paddingTop: generateThemeProps("scale", paddingY || paddingTop || padding),
    // paddingBottom: generateThemeProps(
    //   "scale",
    //   paddingY || paddingTop || padding
    // ),
    // paddingLeft: generateThemeProps(
    //   "scale",
    //   paddingX || paddingLeft || padding
    // ),
    // paddingRight: generateThemeProps(
    //   "scale",
    //   paddingX || paddingRight || padding
    // ),

    // flex: generateProps(flex),

    // flexDirection,
    // flexWrap,
    // flexGrow,
    // flexShrink,
    // flexBasis,
    // justifyContent,
    // alignItems,
    // borderColor,
    // borderWidth,

    // backgroundColor,
  };

  const styling = {
    maxWidth: "800px",
    "@media screen and (max-width: 768px)": { maxWidth: "100px" },
    "@media screen and (min-width: 768px)": { maxWidth: "300px" },
  };

  console.log(calculatedStyles);

  return <View {...viewProps} finalStyles={styling} />;
};

const View = styled.div(({ finalStyles }) => finalStyles);

export default Box;

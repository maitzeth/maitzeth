import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { use100vh } from "react-div-100vh";

const Container = ({ tag, children, verticalSpace, verticalCentered }) => {
  const height = use100vh();
  const realHeight = height && `${height}px`;

  console.log(realHeight);

  return (
    <Box
      tag={tag}
      maxWidth={{ mobile: "100%", desktop: "1140px" }}
      width="100%"
      marginX="auto"
      paddingX={{ mobile: "small", desktop: "medium" }}
      marginY={verticalSpace}
      minHeight={verticalCentered && realHeight}
      display={verticalCentered && "flex"}
      alignItems={verticalCentered && "center"}
    >
      {children}
    </Box>
  );
};

Container.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  verticalSpace: PropTypes.oneOf([
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
  ]),
};

export default Container;

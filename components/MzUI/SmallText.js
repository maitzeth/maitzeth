import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const SmallText = ({ children, tag = "p", weight, align, accent }) => {
  return (
    <Box
      tag={tag}
      fontSize={{ mobile: "small", desktop: "small" }}
      fontWeight={weight}
      textAlign={align}
      color={accent ? "accent" : "text"}
    >
      {children}
    </Box>
  );
};

SmallText.propTypes = {
  weight: PropTypes.oneOf(["xstrong", "strong", "weak"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  tag: PropTypes.oneOf(["span", "p"]),
};

export default SmallText;

import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Text = ({ children, tag = "p", weight, align, accent }) => {
  return (
    <Box
      tag={tag}
      fontSize={accent ? "accent" : "text"}
      fontWeight={weight}
      textAlign={align}
      color="text"
    >
      {children}
    </Box>
  );
};

Text.propTypes = {
  weight: PropTypes.oneOf(["xstrong", "strong", "weak"]).isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  tag: PropTypes.oneOf(["span", "p"]),
};

export default Text;

import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Text = ({
  children,
  tag = "p",
  weight,
  align,
  accent,
  textTransform,
}) => {
  return (
    <Box
      tag={tag}
      fontSize={{ mobile: "small", desktop: "text" }}
      fontWeight={weight}
      textAlign={align}
      color={accent ? "accent" : "text"}
      textTransform={textTransform}
    >
      {children}
    </Box>
  );
};

Text.propTypes = {
  weight: PropTypes.oneOf(["xstrong", "strong", "weak"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  tag: PropTypes.oneOf(["span", "p"]),
};

export default Text;

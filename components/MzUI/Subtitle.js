import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Subtitle = ({ children, tag = "h1", weight, align, textTransform }) => {
  return (
    <Box
      tag={tag}
      fontSize={{ mobile: "subTitle", desktop: "heading" }}
      fontWeight={weight}
      textAlign={align}
      color="black"
      letterSpacing="-2px"
      textTransform={textTransform}
    >
      {children}
    </Box>
  );
};

Subtitle.propTypes = {
  weight: PropTypes.oneOf(["xstrong", "strong", "weak"]).isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  textTransform: PropTypes.string,
};

export default Subtitle;

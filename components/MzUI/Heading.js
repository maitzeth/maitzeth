import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Heading = ({ children, tag = "h1", weight, align }) => {
  return (
    <Box
      tag={tag}
      fontSize="xHeading"
      fontWeight={weight}
      textAlign={align}
      color="black"
      letterSpacing="-2px"
    >
      {children}
    </Box>
  );
};

Heading.propTypes = {
  weight: PropTypes.oneOf(["xstrong", "strong", "weak"]).isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export default Heading;

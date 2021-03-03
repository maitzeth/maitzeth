import React from "react";
import Image from "next/image";
import Box from "./Box";
import PropTypes from "prop-types";

const ImageComponent = ({ src, alt, width, height, bordered, center }) => {
  return (
    <Box
      borderRadius={bordered && "100%"}
      width={width}
      height={height}
      marginX={center && "auto"}
      overflow={bordered && "hidden"}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </Box>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bordered: PropTypes.bool,
  center: PropTypes.bool,
};

export default ImageComponent;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize } from "../config";
import { useTheme } from "../context/themeContext";

function getTextColor(colors, theme, color) {
  if (theme === "dark") {
    return colors.text;
  }

  return color === "gray" ? colors.text : colors.black;
}

const Paragraph = styled.p`
  font-size: ${(props) => `${fontSize(props.fontSize)}`};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily}, sans-serif;
  text-transform: ${(props) => props.textTransform};
  color: ${(props) =>
    getTextColor(props.theme.colors, props.themeColor, props.color)};
  line-height: ${(props) => props.lineHeight};
  transition: all 0.45s ease;
`;

const Typography = ({
  tag,
  fontSize = "12",
  fontWeight = "500",
  textAlign = "left",
  textTransform,
  fontFamily = "Montserrat",
  lineHeight = "1",
  color = "black",
  children,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <Paragraph
      as={tag}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      fontFamily={fontFamily}
      textTransform={textTransform}
      color={color}
      lineHeight={lineHeight}
      themeColor={theme}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};

Typography.propTypes = {
  tag: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.string,
  children: PropTypes.node,
};

export default Typography;

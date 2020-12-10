import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { themeTransition } from "../config";
import { useTheme } from "../context/themeContext";

const TechItem = ({ ...props }) => {
  const { theme } = useTheme();

  return (
    <Wrapper useTheme={theme}>
      <Image {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ useTheme }) =>
    useTheme === "dark" ? "white" : "transparent"};
  padding: 10px;
  border-radius: 10px;

  img {
    transition: ${themeTransition};
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export default TechItem;

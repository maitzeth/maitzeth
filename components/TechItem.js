import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { themeTransition } from "../config";
import { useTheme } from "../context/themeContext";
import { Box } from "../components/MzUI";

const TechItem = ({ ...props }) => {
  const { activeTheme } = useTheme();

  return (
    <View
      backgroundColor={activeTheme === "dark" ? "white" : "transparent"}
      useTheme={activeTheme}
      padding="medium"
      borderRadius="10px"
      flex={{ mobile: "0 0 25%", desktop: "0 0 15%" }}
      textAlign="center"
    >
      <Image {...props} />
    </View>
  );
};

const View = styled(Box)`
  img {
    transition: ${themeTransition};
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export default TechItem;

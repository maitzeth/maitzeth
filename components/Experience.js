import React from "react";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import {
  Collapser,
  HStack,
  Spacer,
  Subtitle,
  Text,
  VStack,
  Box,
  SmallText,
} from "../components/MzUI";
import { themeTransition } from "../config";
import useDesignUtils from "../hooks/useDesignUtils";
import ExperienceContent from "./ExperienceContent";

const Experience = ({
  companyName,
  startDate,
  endDate,
  position,
  isCurrent,
  country,
  content,
}) => {
  const { themeValues, activeTheme } = useDesignUtils();

  return (
    <Collapser
      content={
        content
          ? ({ isOpen }) => {
              return (
                <ExperienceContent isOpen={isOpen}>
                  <VStack space="medium">
                    {content?.title && (
                      <Text weight="strong">{content.title}</Text>
                    )}
                    <Box paddingLeft="large">
                      <VStack tag="ul" space="medium">
                        {content.items.map((work, index) => (
                          <Box tag="li" listStyle="disc" key={index}>
                            <SmallText>{work}</SmallText>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </VStack>
                </ExperienceContent>
              );
            }
          : false
      }
      render={({ isOpen }) => (
        <HStack alignItems="center" space="medium">
          <Box
            width="1rem"
            height="1rem"
            borderWidth="2px"
            borderStyle="solid"
            borderColor="accent"
            borderRadius="100%"
            backgroundColor={isCurrent ? "accent" : "transparent"}
          />
          <VStack space="small">
            <Text>
              {startDate} - {endDate} · {country}
            </Text>
            <Subtitle weight="strong">{position}</Subtitle>
            <Text weight="strong" color="gray">
              {companyName}
            </Text>
          </VStack>
          <Spacer />
          {content && (
            <IconWrapper isOpen={isOpen}>
              <FiChevronDown
                size={28}
                color={
                  activeTheme === "light"
                    ? themeValues.colors.black
                    : themeValues.colors.text
                }
              />
            </IconWrapper>
          )}
        </HStack>
      )}
    />
  );
};

const IconWrapper = styled.div`
  svg {
    transition: ${themeTransition};
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  }
`;

export default Experience;

import React, { useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import ExperienceContent from "./ExperienceContent";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/themeContext";
import { lightTheme, darkTheme, themeTransition } from "../config";

const Experience = ({
  companyName,
  startDate,
  endDate,
  position,
  isCurrent,
  country,
  content,
}) => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Wrapper>
      <Inner onClick={toggleOpen}>
        <DotAccent isCurrent={isCurrent} />
        <Content  isClickeable={content}>
          <Typography fontSize={16} fontWeight="400" color="gray">
            {startDate} - {endDate} · {country}
          </Typography>
          <Typography as="h3" fontSize={24} fontWeight="bold">
            {position}
          </Typography>
          <Typography fontSize={16} fontWeight={600} color="gray">
            {companyName}
          </Typography>
        </Content>
        {content && (
          <IconWrapper isOpen={isOpen}>

          <FiChevronDown
            size={28}
            color={
              theme === "light"
                ? lightTheme.colors.black
                : darkTheme.colors.text
              }
              />
              </IconWrapper>
        )}
      </Inner>
      {content && (
        <ExperienceContent isOpen={isOpen}>
          {content.title && (
            <Typography tag="h4" fontSize={16} fontWeight="bold">
              {content.title}
            </Typography>
          )}
          <ul>
            {content.items.map((work, index) => (
              <li key={index}>
                <Typography fontSize={12}>{work}</Typography>
              </li>
            ))}
          </ul>
        </ExperienceContent>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2.5rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const DotAccent = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 100%;
  background-color: ${({ isCurrent, theme }) =>
    isCurrent ? theme.colors.accent : "transparent"};
`;

const Content = styled.div`
  flex: 1;
  margin-left: 1rem;

  ${({ isClickeable }) =>
    isClickeable &&
    `
    cursor: pointer;
  `}

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const IconWrapper = styled.div`
  svg {
    transition: ${themeTransition}; 
    transform: rotate(${({ isOpen }) => isOpen ? '180deg' : '0deg'});
  }
`;

export default Experience;

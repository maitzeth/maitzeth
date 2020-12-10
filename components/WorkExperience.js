import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "./Typography";

const WorkExperience = ({
  companyName,
  startDate,
  endDate,
  position,
  isCurrent,
  country,
}) => {
  return (
    <Wrapper>
      <Inner>
        <DotAccent isCurrent={isCurrent} />
        <Content>
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
      </Inner>
    </Wrapper>
  );
};

WorkExperience.propTypes = {};

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

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export default WorkExperience;

import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonLoader = ({ ...props }) => {
  return (
    <Wrapper>
      <Skeleton {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > span {
    display: flex;
    flex-direction: column;

    > span {
      margin-bottom: 0.5rem;
    }
  }
`;

export default SkeletonLoader;

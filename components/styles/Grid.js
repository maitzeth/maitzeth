import styled from "styled-components";
import { device, mediaQuerySizes } from "../../config";

const handleFlexSize = (size = 12) => {
  const gridSize = 12;
  const columnSize = (100 * size) / gridSize;
  return columnSize.toFixed(4);
};

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  ${(props) =>
    props.fullHeight &&
    `
    min-height: calc(100vh - 85px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `};

  @media ${device.wideScreen} {
    max-width: ${mediaQuerySizes.extraLarge}px;
  }

  @media ${device.desktop} {
    max-width: ${mediaQuerySizes.large}px;
  }

  @media ${device.mobile} {
    max-width: ${mediaQuerySizes.small}px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  flex: 0 0 ${(props) => handleFlexSize(props.size)}%;
  max-width: ${(props) => handleFlexSize(props.size)}%;
  ${(props) => props.offset && `margin-left: ${handleFlexSize(props.offset)}%`};

  @media ${device.mobile} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0;
  }
`;

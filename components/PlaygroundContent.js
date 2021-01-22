import React from "react";
import { Row, Col } from "../components/styles/Grid";
import PropTypes from "prop-types";
import styled from "styled-components";
import SkeletonLoader from "./SkeletonLoader";
import { GrGithub, GrLink } from "react-icons/gr";

const PlaygroundContent = ({ loading, data }) => {
  if (loading) {
    return [...Array(6)].map((item, index) => (
      <CustomLoaderWrapper key={index} size={4}>
        <SkeletonLoader width="100%" height={200} />
      </CustomLoaderWrapper>
    ));
  }

  return data.map((project) => (
    <Col size={4} key={project.id}>
      <ProjectWrapper className="card-shadow-md">
        <Links>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            <GrLink />
          </a>
          {project.homepage && (
            <>
              <Separator />
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub />
              </a>
            </>
          )}
        </Links>
      </ProjectWrapper>
    </Col>
  ));
};

PlaygroundContent.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
};

const ProjectWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.postItem};
  border-radius: 4px;
  margin-top: 15px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.black};

  a {
    flex: 1;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
`;

const CustomLoaderWrapper = styled(Col)`
  padding-left: 5px !important;
  padding-right: 5px !important;
`;

export default PlaygroundContent;

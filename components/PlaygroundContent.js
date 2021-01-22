import { format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";
import { AiFillGithub, AiOutlineFork, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";
import { Col } from "../components/styles/Grid";
import SkeletonLoader from "./SkeletonLoader";
import Typography from "./Typography";
import { themeTransition } from "../config";

const PlaygroundContent = ({ loading, data }) => {
  const parseName = (name) => name.split("-").join(" ").toUpperCase();

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
        <Content>
          <Typography
            tag="h2"
            fontSize={16}
            fontWeight="bold"
            textTransform="none"
          >
            {parseName(project.name)}
          </Typography>
          <Typography
            tag="p"
            fontSize={12}
            fontWeight="normal"
            textTransform="none"
            className="d-flex align-items-center justify-between"
          >
            {format(new Date(project.created_at), "dd LLLL yyyy")}
            {project.fork && <AiOutlineFork size={22} />}
          </Typography>
        </Content>

        <Links>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            <AiFillGithub color="#777" size={22} />
          </a>
          {project.homepage && (
            <>
              <Separator />
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLink color="#777" size={22} />
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
  margin-top: 30px;
  transition: ${themeTransition};

  &:hover {
    transform: scale(1.02);
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.thinBorders};

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
  background-color: ${({ theme }) => theme.colors.thinBorders};
  height: 100%;
`;

const CustomLoaderWrapper = styled(Col)`
  padding-left: 5px !important;
  padding-right: 5px !important;
`;

const Content = styled.div`
  padding: 15px 20px;
  min-height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    margin-bottom: 15px;
  }

  p {
    margin: 0;
  }
`;

export default PlaygroundContent;

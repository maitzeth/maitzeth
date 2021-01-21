import { useMemo } from 'react';
import Layout from "../components/Layout";
import useSWR from "swr";
import { Row, Col } from "../components/styles/Grid";
import Typography from '../components/Typography';
import { GrGithub, GrLink } from 'react-icons/gr'
import SkeletonLoader from '../components/SkeletonLoader'

import styled from 'styled-components'

const Playground = () => {
  const { data } = useSWR("/api/playground");

  return (
    <Layout title="Playground" fullHeight topSpace>
      <Row>

      {
        !data ? (
          <>
            <Col size={4}>
              <SkeletonLoader width="100%" height={100} />
            </Col>
            <Col size={4}>
              <SkeletonLoader width="100%" height={100} />
            </Col>
            <Col size={4}>
              <SkeletonLoader width="100%" height={100} />
            </Col>
            <Col size={4}>
              <SkeletonLoader width="100%" height={100} />
            </Col>
          </>
        ) : data.map(project => (
          <Col size={4} key={project.id}>
            <ProjectWrapper className="card-shadow-md">
              
              <Links>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <GrLink />
                </a>
                {
                  project.homepage && (
                    <>
                      <Separator />
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <GrGithub />
                      </a>
                    </>
                  )
                }
                
              </Links>
            </ProjectWrapper>
          </Col>
        ))
      }

      </Row>
    </Layout>
  );
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
  }
`;

const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
`;

export default Playground;

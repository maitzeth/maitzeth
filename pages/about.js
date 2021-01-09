import Layout from "../components/Layout";
import useSWR from "swr";
import { Row, Col } from "../components/styles/Grid";
import SkeletonLoader from "../components/SkeletonLoader";
import Typography from "../components/Typography";
import Experience from "../components/Experience";
import styled from "styled-components";
import TechItem from "../components/TechItem";

const About = () => {
  const { data: experiencesData } = useSWR("/api/experiences");
  const { data: techsData } = useSWR("/api/techs");
  const { data: educationData } = useSWR("/api/education");

  const renderWorkExperience = () => {
    return (
      <>
        <Typography as="h2" fontSize={28} fontWeight="bolder" lineHeight={1.5}>
          Work Experience
        </Typography>
        {!experiencesData ? (
          <SkeletonLoader width={300} height={50} count={4} />
        ) : (
          experiencesData?.map((work) => (
            <Experience
              key={work.id}
              companyName={work.company_name}
              startDate={work.start_date}
              endDate={work.end_date}
              position={work.position}
              isCurrent={work.is_current}
              country={work.country}
              content={work.content}
            />
          ))
        )}
      </>
    );
  };

  const renderSkills = () => {
    return (
      <>
        <Typography as="h2" fontSize={28} fontWeight="bolder" lineHeight={1.5}>
          Worked Techs
        </Typography>
        {!techsData ? (
          <SkeletonLoader width={300} height={50} count={4} />
        ) : (
          <TechWrapper>
            {techsData?.map((tech, index) => (
              <TechItem
                key={index}
                width={80}
                height={80}
                src={tech.image}
                alt={tech.alt}
              />
            ))}
          </TechWrapper>
        )}
      </>
    );
  };

  const renderEducation = () => {
    return (
      <>
        <Typography as="h2" fontSize={28} fontWeight="bolder" lineHeight={1.5}>
          Education
        </Typography>
        {!educationData ? (
          <SkeletonLoader width={300} height={50} count={4} />
        ) : (
          educationData?.map((work) => (
            <Experience
              key={work.id}
              companyName={work.company_name}
              startDate={work.start_date}
              endDate={work.end_date}
              position={work.position}
              isCurrent={work.is_current}
              country={work.country}
            />
          ))
        )}
      </>
    );
  };

  return (
    <Layout title="About me" fullHeight topSpace>
      <Row>
        <Col size={12}>
          <div className="mb-3">{renderWorkExperience()}</div>
          <hr />
          <div className="mb-3">{renderSkills()}</div>
          <hr />
          <div className="mb-3">{renderEducation()}</div>
        </Col>
      </Row>
    </Layout>
  );
};

const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin: 1rem;
  }
`;

export default About;

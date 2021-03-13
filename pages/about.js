import Layout from "../components/Layout";
import useSWR from "swr";
import SkeletonLoader from "../components/SkeletonLoader";
// import Typography from "../components/Typography";
import Experience from "../components/Experience";
import TechItem from "../components/TechItem";

import { VStack, Box, Heading } from "../components/MzUI";

const About = () => {
  const { data: experiencesData } = useSWR("/api/experiences");
  const { data: techsData } = useSWR("/api/techs");
  // const { data: educationData } = useSWR("/api/education");
  // const { data } = useSWR("/api/playground");

  const renderWorkExperience = () => {
    return (
      <VStack space="xxlarge">
        <Heading weight="strong" tag="h2">
          Work Experience
        </Heading>
        {!experiencesData ? (
          <SkeletonLoader width={300} height={50} count={4} />
        ) : (
          <VStack tag="section" space="xxlarge">
            {experiencesData?.map((work) => (
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
            ))}
          </VStack>
        )}
      </VStack>
    );
  };

  const renderSkills = () => {
    return (
      <>
        <Heading weight="strong" tag="h2">
          Worked Techs
        </Heading>
        {!techsData ? (
          <SkeletonLoader width={300} height={50} count={4} />
        ) : (
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {techsData?.map((tech) => (
              <TechItem
                key={tech.id}
                width={120}
                height={120}
                src={tech.image}
                alt={tech.alt}
              />
            ))}
          </Box>
        )}
      </>
    );
  };

  // const renderEducation = () => {
  //   return (
  //     <>
  //       <Typography as="h2" fontSize={28} fontWeight="bolder" lineHeight={1.5}>
  //         Education
  //       </Typography>
  //       {!educationData ? (
  //         <SkeletonLoader width={300} height={50} count={4} />
  //       ) : (
  //         educationData?.map((work) => (
  //           <Experience
  //             key={work.id}
  //             companyName={work.company_name}
  //             startDate={work.start_date}
  //             endDate={work.end_date}
  //             position={work.position}
  //             isCurrent={work.is_current}
  //             country={work.country}
  //           />
  //         ))
  //       )}
  //     </>
  //   );
  // };

  return (
    <Layout title="About me">
      <Box marginY="xlarge">
        <VStack space="xxlarge">
          {renderWorkExperience()}
          {renderSkills()}
        </VStack>
      </Box>
    </Layout>
  );
};

export default About;

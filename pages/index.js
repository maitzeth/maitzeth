import { differenceInYears } from "date-fns";
import Layout from "../components/Layout";
import { Heading, Text, VStack, Image, Box } from "../components/MzUI";
import useDesignUtils from "../hooks/useDesignUtils";

const Home = () => {
  const { isMobile } = useDesignUtils();
  const startingDate = new Date(2015, 1, 1);
  const endDate = new Date();
  const workingTime = differenceInYears(endDate, startingDate);

  return (
    <Layout verticalCentered>
      <Box maxWidth={{ mobile: "100%", desktop: "768px" }} marginX="auto">
        <VStack tag="section" space="large">
          <Image
            src="/images/myself.jpg"
            alt="me in front of pc"
            width={isMobile ? 150 : 200}
            height={isMobile ? 150 : 200}
            center
            bordered
          />
          <Heading align="center" weight="xstrong">
            Hello there 👋, I'm André Iván.
          </Heading>
          <Text>
            I'm a Venezuelan developer based in Argentina. I've been working as
            a consultant for many clients and companies. Always worked as a{" "}
            <strong>Frontend Developer</strong> for the last {workingTime}{" "}
            years.
          </Text>
          <Text>
            In my main focus is work as a <strong>Frontend developer</strong>{" "}
            but I have some experience with{" "}
            <strong>Backend technologies</strong> like node but is not my
            strongest skill.
          </Text>
          <Text>
            My works in the last couple of years has been in React that I am a
            huge fan of it's technology and ecosystem. (This site was made with
            Next.js 💕).
          </Text>
          <Text>
            If you want to check the site's code{" "}
            <a
              href="https://github.com/maitzeth/maitzeth"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
            .
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Home;

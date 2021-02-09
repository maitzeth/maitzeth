import Layout from "../components/Layout";
import { Row, Col } from "../components/styles/Grid";
import styled from "styled-components";
import { differenceInYears } from "date-fns";
import Image from "../components/styles/Image";
import Text from "../components/Text";
import Heading from "../components/Heading";

const Home = () => {
  const startingDate = new Date(2015, 1, 1);
  const endDate = new Date();

  const workingTime = differenceInYears(endDate, startingDate);

  return (
    <Layout title="Home" fullHeight justifyCenter>
      <ImageWrapper>
        <Image
          width="200"
          height="200"
          src="/images/myself.jpg"
          alt="Me watching you"
          objectFit="cover"
        />
      </ImageWrapper>
      <section>
        <Heading size="large" weight="strong" color="black" align="center">
          Hello there 👋, I'm André Iván.
        </Heading>
        <Text size="normal">
          I'm a Venezuelan guy based in Argentina. I have been working as a
          freelance and for services companies since I started programming
          professionally as a <strong>Frontend Developer</strong> for the last{" "}
          {workingTime} years.
        </Text>
        <Text size="normal">
          My main focus is working as a{" "}
          <Text tag="strong" weight="strong" color="black">
            Frontend developer
          </Text>{" "}
          but I have some experience with{" "}
          <Text tag="strong" weight="strong" color="black">
            Backend technologies
          </Text>{" "}
          like node but is not my strongest skill.
        </Text>
        <Text size="normal">
          Most of my work in the last couple of years has been in React that I
          am a huge fan of it's technology and ecosystem. (This site was made
          with Next.js 💕). If you want to check the site's code{" "}
          <a
            href="https://github.com/maitzeth/maitzeth"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </Text>
        <Text size="normal">
          If you want to contact me just{" "}
          <a
            href="mailto:andre801mz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            click here 🔥
          </a>
          .
        </Text>
      </section>
    </Layout>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;

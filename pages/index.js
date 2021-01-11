import Layout from "../components/Layout";
import { Row, Col } from "../components/styles/Grid";
import styled from "styled-components";
import { fontSize } from "../config";
import { differenceInYears } from "date-fns";
import Image from "../components/styles/Image";

const Home = () => {
  const startingDate = new Date(2015, 1, 1);
  const endDate = new Date();

  const workingTime = differenceInYears(endDate, startingDate);

  return (
    <Layout title="Home" fullHeight justifyCenter>
      <Row alignItems="center">
        <Col size={8} offset={2}>
          <ImageWrapper>
            <Image
              width="200"
              height="200"
              src="/images/myself.jpg"
              alt="Me watching you"
              objectFit="cover"
            />
          </ImageWrapper>
          <HomeContent>
            <h1>Hello there 👋, I'm André Iván.</h1>
            <p>
              I'm a Venezuelan guy based in Argentina. I have been working as a
              freelance and for services companies since I started programming
              professionally as a <strong>Frontend Developer</strong> for the
              last {workingTime} years.
            </p>
            <p>
              My main focus is to work as a <strong>Frontend developer</strong>{" "}
              but I have some experience with{" "}
              <strong>Backend technologies</strong> like node but is not my
              strongest skill.
            </p>
            <p>
              Most of my work in the last couple of years has been in React that
              I am a huge fan of it's technology and ecosystem. (This site was
              made with Next.js 💕). If you want to check the site's code{" "}
              <a
                href="https://github.com/maitzeth/maitzeth"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
            <p>
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
            </p>
          </HomeContent>
        </Col>
      </Row>
    </Layout>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContent = styled.section`
  h1 {
    font-size: ${fontSize(44)};
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }

  p {
    font-size: ${fontSize(19.2)};
    color: ${(props) => props.theme.colors.text};
  }
`;

export default Home;

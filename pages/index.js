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
            <h1>Hello 👋 I'm André.</h1>
            <p>
              I've been working as a <strong>Web Developer</strong> from the
              last {workingTime} years.
            </p>
            <p>
              I'm passionate about Front-End Development, performance and web
              technologies.
            </p>
            <p>
              I'm always working with JavaScript and I'm specialized on
              Front-End development{" "}
              <strong>(React and little bit of Vue)</strong>, but also have a
              little bit experience with some Back-End Technologies (Node).
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
    font-weight: 300;
  }
`;

export default Home;

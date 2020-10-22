import Layout from "../components/Layout";
import Typography from "../components/Typography";
import { Row, Col } from "../components/styles/Grid";
import styled from "styled-components";
import Link from "next/link";

const Home = () => {
  const yearsWorking = () => new Date().getFullYear() - 2015;

  return (
    <Layout title="Home" fullHeight justifyCenter>
      <Row alignItems="center">
        <Col size={8} offset={2}>
          <HomeImage src="/images/myself.jpg" alt="poket logo" />
          <Typography
            fontSize={44}
            fontWeight="bold"
            color="black"
            textAlign="center"
          >
            Hello 👋 I'm André.
          </Typography>
          <Typography
            fontSize={19.2}
            color="gray"
            fontWeight={300}
            lineHeight={1.2}
          >
            I've been working as a <strong>Web Developer</strong> from the last{" "}
            <strong>{yearsWorking()} years</strong>.
          </Typography>
          <Typography
            fontSize={19.2}
            color="gray"
            fontWeight={300}
            lineHeight={1.2}
          >
            I'm passionate about Front-End Development, performance and web
            technologies.
          </Typography>
          <Typography
            fontSize={19.2}
            color="gray"
            fontWeight={300}
            lineHeight={1.2}
          >
            I'm always working with JavaScript and I'm specialized on Front-End
            development <strong>(React and little bit of Vue)</strong>, but also
            have a little bit experience with some Back-End Technologies (Node).
          </Typography>
          <Typography
            fontSize={19.2}
            color="gray"
            fontWeight={300}
            lineHeight={1.2}
          >
            If you have any web development needs, feel free to{" "}
            <Link href="/contact">
              <a>contact</a>
            </Link>{" "}
            or get to <Link href="/about"> know me</Link>.
          </Typography>
        </Col>
      </Row>
    </Layout>
  );
};

const HomeImage = styled.img`
  max-width: 100%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export default Home;

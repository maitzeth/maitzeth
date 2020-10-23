import Layout from "../components/Layout";
import { Row, Col } from "../components/styles/Grid";

const About = () => {
  return (
    <Layout title="My Blog" fullHeight topSpace>
      <Row className="w-100">
        <Col>
          <h1>About page</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export default About;

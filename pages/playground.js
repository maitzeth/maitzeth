import { useMemo } from 'react';
import Layout from "../components/Layout";
import useSWR from "swr";
import { Row, Col } from "../components/styles/Grid";


const Playground = () => {
  const { data } = useSWR("/api/playground");

  return (
    <Layout title="Playground" fullHeight topSpace>
      <Row>
        <Col size={12}>
          <h1>test test</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export default Playground;

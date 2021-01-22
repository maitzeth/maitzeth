import Layout from "../components/Layout";
import useSWR from "swr";
import { Row } from "../components/styles/Grid";
import PlaygroundContent from "../components/PlaygroundContent";

const Playground = () => {
  const { data } = useSWR("/api/playground");

  return (
    <Layout title="Playground" fullHeight topSpace>
      <Row>
        <PlaygroundContent loading={!data} data={data} />
      </Row>
    </Layout>
  );
};

export default Playground;

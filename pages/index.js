import Layout from "../components/Layout";
import Typography from "../components/Typography";
import { Row, Col } from "../components/styles/Grid";
import styled from "styled-components";
import Link from "next/link";
import { API_URL } from "../config";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const { data } = useSWR(`${API_URL}/homepage`);
  const yearsWorking = () => new Date().getFullYear() - 2015;

  console.log(data);

  return (
    <Layout title="Home" fullHeight justifyCenter>
      <Row alignItems="center">
        <Col size={8} offset={2}>
          <HomeImage src={`${API_URL}${data?.image.url}`} alt={data?.name} />
          <div className="home-content">
            <ReactMarkdown>{data?.description}</ReactMarkdown>
          </div>
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

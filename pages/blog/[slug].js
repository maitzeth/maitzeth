import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import Typography from "../../components/Typography";
import { Row, Col } from "../../components/styles/Grid";
import { format } from "date-fns";
import styled from "styled-components";

const PostItem = () => {
  const router = useRouter();
  const { data } = useSWR(`${API_URL}/posts/${router.query.slug}`);

  const renderContent = () => {
    if (!data) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <Row>
        <Col size={10} offset={2}>
          <Typography fontSize={28} color="black" fontWeight="bolder">
            {data.name}
          </Typography>
          <Typography fontSize={13} color="gray" fontWeight="300">
            {format(new Date(data.created_at), "MMM do, yyyy")}
          </Typography>
          <FeaturedImageWrapper>
            <FeaturedImage
              className="card-shadow-md"
              src={`${API_URL}${data.image.url}`}
              alt={data.name}
            />
          </FeaturedImageWrapper>
          <Typography fontSize={16} color="gray" fontWeight="300">
            {data.subtitle}
          </Typography>
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </Col>
      </Row>
    );
  };

  return <Layout>{renderContent()}</Layout>;
};

const FeaturedImageWrapper = styled.div`
  margin-top: 1.8rem;
`;

const FeaturedImage = styled.img`
  max-width: 100%;
  height: 33vh;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default PostItem;

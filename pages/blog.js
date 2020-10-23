import Layout from "../components/Layout";
import { Row, Col } from "../components/styles/Grid";
import useSWR from "swr";
import Post from "../components/Post";
import { API_URL } from "../config";
import Skeleton from "react-loading-skeleton";

const Blog = () => {
  const { data } = useSWR(`${API_URL}/posts`);

  const renderPostOrLoader = () => {
    if (!data) {
      return [...Array(6)].map((item, index) => (
        <Col size={4} key={index} className="mb-2">
          <Skeleton width="100%" height={200} />
        </Col>
      ));
    }

    return data?.map((post) => (
      <Col size={4} key={post.id}>
        <Post
          slug={post.slug}
          title={post.name}
          subtitle={post.subtitle}
          created_at={post.published_at}
          categories={post.categories}
          image={post.image}
        />
      </Col>
    ));
  };

  return (
    <Layout title="My Blog" fullHeight topSpace>
      <Row className="w-100">{renderPostOrLoader()}</Row>
    </Layout>
  );
};

export default Blog;

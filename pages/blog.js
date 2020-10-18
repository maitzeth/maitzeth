import Layout from "../components/Layout";
import { Row, Col } from "../components/styles/Grid";
import useSWR from "swr";
import Post from "../components/Post";

const Blog = () => {
  const { data } = useSWR("/api/blog");

  const renderPostOrLoader = () => {
    if (!data) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return data?.map((post) => (
      <Col size={4} key={post.id}>
        <Post
          slug={post.slug}
          title={post.title}
          subtitle={post.subtitle}
          created_at={post.created_at}
          categories={post.categories}
          image={post.image}
        />
      </Col>
    ));
  };

  return (
    <Layout title="Home" topSpace>
      <Row>{renderPostOrLoader()}</Row>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  console.log("totototototot", params);

  return { props: {} };
}

export default Blog;

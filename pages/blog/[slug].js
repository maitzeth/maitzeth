import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import useSWR from "swr";

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

    return <h1>{data.name}</h1>;
  };

  return <Layout>{renderContent()}</Layout>;
};

export default PostItem;

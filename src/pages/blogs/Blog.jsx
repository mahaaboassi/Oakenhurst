import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogAll } from "../../components/blogs/BlogAll";

export const Blog = () => {
  return (
    <Layout breadcrumbTitle={"Blog"} breadcrumbSubtitle={"Blog"}>
      <BlogAll />
    </Layout>
  );
};

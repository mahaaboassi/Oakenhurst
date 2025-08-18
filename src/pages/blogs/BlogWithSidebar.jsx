import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogPagination } from "../../components/blogs/BlogPagination";
import { BlogAllSidebar } from "../../components/blogs/BlogAllSidebar";
import { BlogContainer } from "../../components/blogs/BlogContainer";

export const BlogWithSidebar = () => {
  return (
    <Layout
      breadcrumbTitle={"Blog With Sidebar"}
      breadcrumbSubtitle={"Blog With Sidebar"}
    >
      <BlogContainer>
        <BlogAllSidebar />

        <div className="td_height_60 td_height_lg_40" />
        <BlogPagination />
      </BlogContainer>
    </Layout>
  );
};

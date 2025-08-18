import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutOne } from "../../components/about/AboutOne";
import { CampusOne } from "../../components/campus/CampusOne";
import { DepartmentOne } from "../../components/departments/DepartmentOne";
import { VideoOne } from "../../components/videos/VideoOne";
import { BlogOne } from "../../components/blogs/BlogOne";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      <AboutOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <DepartmentOne />

      {/* video */}
      <VideoOne />

      {/* blog */}
      <BlogOne />
    </Layout>
  );
};

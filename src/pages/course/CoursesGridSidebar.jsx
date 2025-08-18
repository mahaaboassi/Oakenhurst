import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllContainerSidebar } from "../../components/courses/CoursesAllContainerSidebar";
import { CoursesAllGridSidebar } from "../../components/courses/CoursesAllGridSidebar";

export const CoursesGridSidebar = () => {
  return (
    <Layout
      breadcrumbTitle={"Courses Grid With Sidebar"}
      breadcrumbSubtitle={"Courses Grid With Sidebar"}
    >
      <CoursesAllContainerSidebar isGrid>
        <CoursesAllGridSidebar />
      </CoursesAllContainerSidebar>
    </Layout>
  );
};

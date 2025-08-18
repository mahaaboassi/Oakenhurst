import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { CoursesAllContainer } from "../../components/courses/CoursesAllContainer";

export const CoursesGridView = () => {
  return (
    <Layout
      breadcrumbTitle={"Courses Grid View"}
      breadcrumbSubtitle={"Courses Grid View"}
    >
      <CoursesAllContainer isGrid>
        <CoursesAllGrid />
      </CoursesAllContainer>
    </Layout>
  );
};

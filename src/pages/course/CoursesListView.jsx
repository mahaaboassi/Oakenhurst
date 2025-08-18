import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllContainer } from "../../components/courses/CoursesAllContainer";
import { CoursesAllList } from "../../components/courses/CoursesAllList";

export const CoursesListView = () => {
  return (
    <Layout
      breadcrumbTitle={"Courses List View"}
      breadcrumbSubtitle={"Courses List View"}
    >
      <CoursesAllContainer>
        <CoursesAllList />
      </CoursesAllContainer>
    </Layout>
  );
};

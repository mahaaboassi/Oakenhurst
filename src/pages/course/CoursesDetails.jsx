import React from "react";
import { Layout } from "../../layouts/Layout";
import { CouresesNine } from "../../components/courses/CouresesNine";
import { CourseDetailContent } from "../../components/courses/CourseDetailContent";

export const CoursesDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Course Details"}
      breadcrumbSubtitle={"Course Details"}
    >
      {/* details */}
      <CourseDetailContent />

      {/* popular */}
      <CouresesNine />
    </Layout>
  );
};

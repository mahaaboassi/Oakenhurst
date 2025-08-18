import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroEight } from "../../components/hero/HeroEight";
import { CategoryFive } from "../../components/category/CategoryFive";
import { AboutEight } from "../../components/about/AboutEight";
import { CoursesEight } from "../../components/courses/CoursesEight";
import { TestimonialSeven } from "../../components/testimonials/TestimonialSeven";
import { TeamSeven } from "../../components/teams/TeamSeven";
import { CtaThree } from "../../components/cta/CtaThree";
import { BlogEight } from "../../components/blogs/BlogEight";
import { Instagram } from "../../components/insta/Instagram";

export const HomeEight = () => {
  return (
    <Layout header={8} footer={8} bodyclassName ="td_theme_5">
      {/* hero */}
      <HeroEight />

      {/* categories */}
      <CategoryFive />

      {/* about */}
      <AboutEight />

      {/* courses */}
      <CoursesEight />

      {/* testimonials */}
      <TestimonialSeven />

      {/* team */}
      <TeamSeven />

      {/* cta */}
      <CtaThree />

      {/* blog */}
      <BlogEight />

      {/* instagram */}
      <Instagram />
    </Layout>
  );
};

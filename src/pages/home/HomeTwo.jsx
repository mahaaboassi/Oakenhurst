import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroTwo } from "../../components/hero/HeroTwo";
import { CategoryOne } from "../../components/category/CategoryOne";
import { RateOne } from "../../components/rates/RateOne";
import { AboutTwo } from "../../components/about/AboutTwo";
import { CoursesTwo } from "../../components/courses/CoursesTwo";
import { BrandOne } from "../../components/brands/BrandOne";
import { TestimonialTwo } from "../../components/testimonials/TestimonialTwo";
import { EventTwo } from "../../components/events/EventTwo";
import { TeamOne } from "../../components/teams/TeamOne";
import { WhyChooseOne } from "../../components/why_choose/WhyChooseOne";
import { BlogTwo } from "../../components/blogs/BlogTwo";

export const HomeTwo = () => {
  return (
    <Layout header={2} footer={2} bodyclassName ="td_theme_2">
      {/* hero */}
      <HeroTwo />

      {/* category */}
      <CategoryOne />

      {/* rate */}
      <RateOne />

      {/* about */}
      <AboutTwo />

      {/* courses */}
      <CoursesTwo />

      <div className="td_height_120 td_height_lg_80" />

      {/* brands */}
      <BrandOne />

      {/* testimonial */}
      <TestimonialTwo />

      {/* event */}
      <EventTwo />

      {/* team */}
      <TeamOne />

      {/* why choose */}
      <WhyChooseOne />

      {/* blog */}
      <BlogTwo />
    </Layout>
  );
};

import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroSeven } from "../../components/hero/HeroSeven";
import { AboutSeven } from "../../components/about/AboutSeven";
import { FeatureThree } from "../../components/features/FeatureThree";
import { CoursesSeven } from "../../components/courses/CoursesSeven";
import { WhyChooseThree } from "../../components/why_choose/WhyChooseThree";
import { TeamSix } from "../../components/teams/TeamSix";
import { FaqFour } from "../../components/faqs/FaqFour";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { TestimonialSix } from "../../components/testimonials/TestimonialSix";
import { BlogSeven } from "../../components/blogs/BlogSeven";

export const HomeSeven = () => {
  return (
    <Layout header={7} footer={7} bodyclassName ="td_theme_4">
      {/* hero */}
      <HeroSeven />

      {/* about */}
      <AboutSeven />

      {/* feature */}
      <FeatureThree />

      {/* courses */}
      <CoursesSeven />

      {/* why choose */}
      <WhyChooseThree />

      {/* instructor */}
      <TeamSix />

      {/* accordion / faqs */}
      <FaqFour />

      {/* brands */}
      <div className="td_height_120 td_height_lg_80" />
      <BrandTwo />
      <div className="td_height_120 td_height_lg_80" />

      {/* testimonial */}
      <TestimonialSix />

      {/* blog */}
      <BlogSeven />
    </Layout>
  );
};

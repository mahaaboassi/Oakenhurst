import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroFive } from "../../components/hero/HeroFive";
import { CategoryThree } from "../../components/category/CategoryThree";
import { AboutFive } from "../../components/about/AboutFive";
import { CoursesFive } from "../../components/courses/CoursesFive";
import { FaqTwo } from "../../components/faqs/FaqTwo";
import { TestimonialFive } from "../../components/testimonials/TestimonialFive";
import { PricingTwo } from "../../components/pricing/PricingTwo";
import { VideoTwo } from "../../components/videos/VideoTwo";
import { TeamFour } from "../../components/teams/TeamFour";
import { CtaTwo } from "../../components/cta/CtaTwo";
import { BlogFive } from "../../components/blogs/BlogFive";

export const HomeFive = () => {
  return (
    <Layout header={5} footer={5} bodyclassName ="td_theme_2">
      {/* hero */}
      <HeroFive />

      {/* categories */}
      <CategoryThree />

      {/* about */}
      <AboutFive />

      {/* courses */}
      <CoursesFive />

      {/* faqs */}
      <FaqTwo />

      {/* testimonials */}
      <TestimonialFive />

      {/* pricing */}
      <PricingTwo />

      {/* video */}
      <VideoTwo />

      {/* advisors */}
      <TeamFour />

      {/* cta */}
      <CtaTwo />

      {/* blog */}
      <BlogFive />
    </Layout>
  );
};

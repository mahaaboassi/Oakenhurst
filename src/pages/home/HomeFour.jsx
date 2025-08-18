import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroFour } from "../../components/hero/HeroFour";
import { AboutFour } from "../../components/about/AboutFour";
import { CoursesFour } from "../../components/courses/CoursesFour";
import { FunfactTwo } from "../../components/fun_facts/FunfactTwo";
import { FaqOne } from "../../components/faqs/FaqOne";
import { TestimonialFour } from "../../components/testimonials/TestimonialFour";
import { TeamThree } from "../../components/teams/TeamThree";
import { CtaOne } from "../../components/cta/CtaOne";
import { BlogFour } from "../../components/blogs/BlogFour";
import { NewsletterOne } from "../../components/newsletter/NewsletterOne";

export const HomeFour = () => {
  return (
    <Layout header={4} footer={4} bodyclassName ="td_theme_3">
      {/* hero */}
      <HeroFour />

      {/* about */}
      <AboutFour />

      {/* popular */}
      <CoursesFour />

      {/* fun fact */}
      <FunfactTwo />

      {/* faqs */}
      <FaqOne />

      {/* testimonial */}
      <TestimonialFour />

      {/* team */}
      <TeamThree />

      {/* cta */}
      <CtaOne />

      {/* blog */}
      <BlogFour />

      {/* newsletter */}
      <NewsletterOne />
    </Layout>
  );
};

import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroThree } from "../../components/hero/HeroThree";
import { RateTwo } from "../../components/rates/RateTwo";
import { AboutThree } from "../../components/about/AboutThree";
import { CategoryTwo } from "../../components/category/CategoryTwo";
import { CoursesThree } from "../../components/courses/CoursesThree";
import { CertificateOne } from "../../components/certificates/CertificateOne";
import { TestimonialThree } from "../../components/testimonials/TestimonialThree";
import { FeatureTwo } from "../../components/features/FeatureTwo";
import { FunfactOne } from "../../components/fun_facts/FunfactOne";
import { PricingOne } from "../../components/pricing/PricingOne";
import { TeamTwo } from "../../components/teams/TeamTwo";
import { BecomeAnInstructor } from "../../components/teams/BecomeAnInstructor";
import { AppOne } from "../../components/apps/AppOne";
import { BlogThree } from "../../components/blogs/BlogThree";

export const HomeThree = () => {
  return (
    <Layout header={3} footer={3} bodyclassName ="td_theme_2">
      {/* hero */}
      <HeroThree />

      {/* rate */}
      <RateTwo />

      {/* about */}
      <AboutThree />

      {/* category */}
      <CategoryTwo />

      {/* courses */}
      <CoursesThree />

      {/* certificate */}
      <CertificateOne />

      {/* testimonial */}
      <TestimonialThree />

      {/* feature */}
      <FeatureTwo />

      {/* fun facts */}
      <FunfactOne />

      {/* pricing */}
      <PricingOne />

      {/* expert team */}
      <TeamTwo />

      {/* instructor */}
      <BecomeAnInstructor />

      {/* app */}
      <AppOne />

      {/* blog */}
      <BlogThree />
    </Layout>
  );
};

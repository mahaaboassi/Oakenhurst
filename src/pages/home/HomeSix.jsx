import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroSix } from "../../components/hero/HeroSix";
import { CategoryFour } from "../../components/category/CategoryFour";
import { AboutSix } from "../../components/about/AboutSix";
import { CoursesSix } from "../../components/courses/CoursesSix";
import { TeamFive } from "../../components/teams/TeamFive";
import { FaqThree } from "../../components/faqs/FaqThree";
import { WhyChooseTwo } from "../../components/why_choose/WhyChooseTwo";
import { ContactOne } from "../../components/contacts/ContactOne";
import { BlogSix } from "../../components/blogs/BlogSix";
import { NewsletterTwo } from "../../components/newsletter/NewsletterTwo";

export const HomeSix = () => {
  return (
    <Layout header={6} footer={6} bodyclassName ="td_theme_6">
      {/* hero */}
      <HeroSix />

      {/* categories */}
      <CategoryFour />

      {/* about */}
      <AboutSix />

      {/* courses */}
      <CoursesSix />

      {/* instructor */}
      <TeamFive />

      {/* faqs */}
      <FaqThree />

      {/* why choose */}
      <WhyChooseTwo />

      {/* contact */}
      <ContactOne />

      {/* blog */}
      <BlogSix />

      {/* newsletter */}
      <NewsletterTwo />
    </Layout>
  );
};

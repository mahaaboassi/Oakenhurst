import React from "react";
import { Layout } from "../../layouts/Layout";
import { TeamAll } from "../../components/teams/TeamAll";

export const TeamMembers = () => {
  return (
    <Layout
      breadcrumbTitle={"Team Members"}
      breadcrumbSubtitle={"Team Members"}
    >
      <TeamAll />
    </Layout>
  );
};

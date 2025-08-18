import React from "react";
import { Layout } from "../../layouts/Layout";
import { TeamDetails } from "../../components/teams/TeamDetails";

export const TeamMemberDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Team Member Details"}
      breadcrumbSubtitle={"Team Member Details"}
    >
      <TeamDetails />
    </Layout>
  );
};

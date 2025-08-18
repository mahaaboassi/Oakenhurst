import React from "react";
import { Layout } from "../../layouts/Layout";
import { EventAll } from "../../components/events/EventAll";

export const Event = () => {
  return (
    <Layout breadcrumbTitle={"Event"} breadcrumbSubtitle={"Event"}>
      <EventAll />
    </Layout>
  );
};

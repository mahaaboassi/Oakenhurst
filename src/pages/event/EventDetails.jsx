import React from "react";
import { Layout } from "../../layouts/Layout";
import { EventDetailsContent } from "../../components/events/EventDetailsContent";

export const EventDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Event Details"}
      breadcrumbSubtitle={"Event Details"}
    >
      <EventDetailsContent />
    </Layout>
  );
};

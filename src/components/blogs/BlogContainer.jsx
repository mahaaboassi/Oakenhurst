import React from "react";
import { BlogSidebar } from "./BlogSidebar";

export const BlogContainer = ({ children }) => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_row_reverse_lg td_gap_y_50">
          {/* list */}
          <div className="col-lg-8">{children}</div>

          {/* sidebar */}
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

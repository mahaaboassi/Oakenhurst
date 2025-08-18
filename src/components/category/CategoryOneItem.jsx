import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

export const CategoryOneItem = ({ delay, src, title, courses }) => {
  useHobble();

  return (
    <div
      className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay={`${delay}s`}
    >
      <div className="td_iconbox td_style_2 text-center td_hobble">
        <div className="td_iconbox_in td_hover_layer_4">
          <div className="td_hover_layer_3">
            <div className="td_iconbox_icon td_mb_16">
              <img src={src} alt={title} />
            </div>

            <h3 className="td_iconbox_title td_fs_20 td_semibold td_opacity_8 td_mb_16">
              {title}
            </h3>

            <p className="td_iconbox_subtitle mb-0 td_accent_color">
              <span>{courses}</span> Courses
            </p>
          </div>
        </div>

        <Link
          to="/courses-grid-with-sidebar"
          className="td_iconbox_link"
        ></Link>
      </div>
    </div>
  );
};

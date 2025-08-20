import React, { useLayoutEffect } from "react";
import { ScrollToTop } from "../components/scroll_to_top/ScrollToTop";
import { HeaderOne } from "../components/headers/HeaderOne";
import { FooterOne } from "../components/footers/FooterOne";
import { HeaderTwo } from "../components/headers/HeaderTwo";
import { FooterTwo } from "../components/footers/FooterTwo";
import { useLocation } from "react-router-dom";
import { HeaderThree } from "../components/headers/HeaderThree";
import { FooterThree } from "../components/footers/FooterThree";
import { HeaderFour } from "../components/headers/HeaderFour";
import { FooterFour } from "../components/footers/FooterFour";
import { HeaderFive } from "../components/headers/HeaderFive";
import { FooterFive } from "../components/footers/FooterFive";
import { HeaderSix } from "../components/headers/HeaderSix";
import { FooterSix } from "../components/footers/FooterSix";
import { HeaderSeven } from "../components/headers/HeaderSeven";
import { FooterSeven } from "../components/footers/FooterSeven";
import { HeaderEight } from "../components/headers/HeaderEight";
import { FooterEight } from "../components/footers/FooterEight";
import { HeaderNine } from "../components/headers/HeaderNine";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";

export const Layout = ({
  children,
  header = 9,
  footer = 1,
  bodyClass,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  const { pathname } = useLocation();

  // theme
  useLayoutEffect(() => {
    document.body.classList.add(bodyClass);

    return () => document.body.classList.remove(bodyClass);
  }, [bodyClass, pathname]);

  return (
    <>
      {/* scroll to top */}
      <ScrollToTop />

      {/* header */}
      {header === 1 && <HeaderOne />}
      {header === 2 && <HeaderTwo />}
      {header === 3 && <HeaderThree />}
      
      {/* {header === 4 && <HeaderFour />} */}
      {/* {header === 5 && <HeaderFive />} */}
      {header === 6 && <HeaderSix />}
      {header === 7 && <HeaderSeven />}
      {header === 8 && <HeaderEight />}
      {/* {header === 9 && <HeaderNine />} */}
      {header === 9 && <HeaderOne />}

      {/* breadcrumb */}
      {breadcrumbTitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      {children}

      {/* footer */}
      {footer === 1 && <FooterOne />}
      {/* {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterThree />}
      {footer === 4 && <FooterFour />}
      {footer === 5 && <FooterFive />}
      {footer === 6 && <FooterSix />}
      {footer === 7 && <FooterSeven />}
      {footer === 8 && <FooterEight />} */}
    </>
  );
};

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LandingPageIntro from "./LandingPageIntro";
import LandingPageWhoWeAre from "./LandingPageWhoWeAre";
import LandingPageWeOffer from "./LandingPageWeOffer";
import LandingPageBuildSecurity from "./LandingPageBuildSecurity";
import { useDispatch } from "react-redux";
import { clearFlightRedux } from "../features/flight/flightSlice";
import ServiceCrausal from "./ServiceCrausal";
import LandingPageDigiPay from "./LandingPageDigiPay";
import LandingPageLoans from "./LandingPageLoans";
import LandingPageInvestments from "./LandingPageInvestments";
import LandingPageInsurance from "./LandingPageInsurance";
import LandingPageAeps from "./LandingPageAeps";
import LandingPageTestimonials from "./LandingPageTestimonials";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      clearFlightRedux({
        type: "clear",
      })
    );
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{process.env.REACT_APP_TITLE}</title>
        <meta name="description" content="DIGIVOUCHERS" />
        <meta name="keywords" content="DIGIVOUCHERS" />
      </Helmet>
      <div
        className="app-content
      "
      >
        <LandingPageIntro />

        <LandingPageWhoWeAre />
        <LandingPageWeOffer />

        {/* <LandingPageTestimonials /> */}
      </div>
    </div>
  );
};

export default LandingPage;

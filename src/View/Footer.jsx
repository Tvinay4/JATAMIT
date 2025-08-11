import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import {
  facebook,
  insta,
  linkdin,
  loginPage1,
  Logo,
  twitter,
} from "../iconsImports";
import { useNavigate } from "react-router-dom";

import {
  getFirmAddress,
  getFirmContact,
  getFirmEmail,
} from "../theme/setThemeColor";

const handleClickScroll = (id) => {
  if (id === "landing-intro") {
    document
      .getElementById("landing-intro")
      .scrollIntoView({ behavior: "smooth" });
  }
  if (id === "about-us") {
    let ele = document.getElementById("about-us");
    window.scrollTo(0, ele.offsetTop, { behavior: "smooth" });
  }
  if (id === "contact-us") {
    document
      .getElementById("contact-us")
      .scrollIntoView({ behavior: "smooth" });
  }
  if (id === "our-services") {
    document
      .getElementById("our-services")
      .scrollIntoView({ behavior: "smooth" });
  }
  if (id === "our-partners") {
    document
      .getElementById("our-partners")
      .scrollIntoView({ behavior: "smooth" });
  }
  if (id === "landing-intro") {
    document
      .getElementById("landing-intro")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
};
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #c8f2ff 0%, #ffe3f4 100%)",
        color: "#000",
        pt: 6,
        pb: 3,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Logo & Address */}
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <img
                src={loginPage1}
                alt="logo"
                width="200"
                style={{
                  borderRadius: "6px",
                  padding: "6px",
                  background: "#ffffff22",
                  backdropFilter: "blur(10px)",
                }}
              />
              <Typography sx={{ mt: 2, fontSize: "14px" }}>
                {getFirmAddress()}
              </Typography>

              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                {[facebook, linkdin, twitter, insta].map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="social"
                    width="38"
                    height="38"
                    style={{
                      borderRadius: "50%",
                      padding: "6px",
                      background: "#ffffff22",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#ffffff44")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#ffffff22")
                    }
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item lg={7} md={7} sm={12} xs={12} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Company
              </Typography>
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/about-us" },
                { text: "Contact Us", path: "/contact-us" },
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    cursor: "pointer",
                    mb: 1,
                    "&:hover": { color: "#ff6f91" },
                  }}
                  onClick={() => navigate(link.path)}
                >
                  {link.text}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Policies
              </Typography>
              {[
                { text: "Terms & Conditions", url: "/terms-conditions" },
                { text: "Privacy Policy", url: "/privacy-policy" },
                { text: "Refund Policy", url: "/refund-policy" },
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    cursor: "pointer",
                    mb: 1,
                    "&:hover": { color: "#ff6f91" },
                  }}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.text}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Contact Us
              </Typography>
              <Typography sx={{ mb: 1 }}>{getFirmContact()}</Typography>
              <Typography sx={{ textTransform: "lowercase" }}>
                {getFirmEmail()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Note */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            borderTop: "1px solid #ffffff33",
            pt: 2,
          }}
        >
          <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
            © Copyright 2025 {process.env.REACT_APP_TITLE} INDIA PRIVATE
            LIMITED. All Rights Reserved.
          </Typography>
          <Typography sx={{ fontSize: "13px", opacity: 0.6, mt: 0.5 }}>
            Disclaimer: Any dispute arising under these terms and conditions
            shall be subject to the jurisdiction of the courts of Delhi.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;

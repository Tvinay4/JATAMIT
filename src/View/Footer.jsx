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
import { getFirmAddress, getFirmContact, getFirmEmail } from "../theme/setThemeColor";

const Footer = () => {
  const navigate = useNavigate();

  const contact = getFirmContact() || "9896146958";
  const email = getFirmEmail() || "Jatmitinnovations@gmail.com";
  const address =
    getFirmAddress() ||
    "House no.120, pocket no.26, Rohini Sec-24, New Delhi-110085";

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "#fff4eb",
        color: "#000",
        pt: 5,
        pb: 3,
        mt: 3,
        overflow: "hidden",
      }}
    >
      {/* Background Logo Watermark */}
      <Box
        component="img"
        src={Logo}
        alt="logo-watermark"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "400px",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={3}>
          {/* Logo & Address */}
          <Grid item lg={5} md={4} sm={12} xs={12}>
            <Box>
              <img
                src={loginPage1}
                alt="logo"
                width="180"
                style={{
                  borderRadius: "6px",
                  padding: "6px",
                  background: "#ffffff33",
                  backdropFilter: "blur(6px)",
                }}
              />
             <Typography
  sx={{
    mt: 2,
    fontSize: "14px",
    color: "#e86602",
    wordBreak: "break-word", // breaks long words if necessary
    whiteSpace: "normal",    // ensures wrapping
  }}
>
  {address}
</Typography>


              {/* Social Icons */}
              <Box sx={{ display: "flex",justifyContent:"center",alignItems:"center", gap: 2, mt: 3 }}>
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
          <Grid item lg={7} md={8} sm={12} xs={12} container spacing={3}>
            {/* Company Links */}
            <Grid item xs={12} sm={4} sx={{ textAlign:"left"}}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "#e86602" }}
              >
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
                    "&:hover": { color: "#ffb266" },
                  }}
                  onClick={() => navigate(link.path)}
                >
                  {link.text}
                </Typography>
              ))}
            </Grid>

            {/* Policies Links */}
            <Grid item xs={12} sm={4} sx={{textAlign:"left"}}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "#e86602" }}
              >
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
                    "&:hover": { color: "#ffb266" },
                  }}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.text}
                </Typography>
              ))}
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={4} sx={{textAlign:"left"}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#e86602",
                  textAlign: "left",
                }}
              >
                Contact Us
              </Typography>
              <Typography sx={{ mb: 1 }}> {contact}</Typography>
              <Typography sx={{ mb: 1, textTransform: "lowercase" }}>
              {email}
              </Typography>
              <Typography sx={{ textTransform: "Capitalize" }}> {address}</Typography>
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
            © Copyright 2025 JATMIT INNOVATIONS PVT LTD. All Rights Reserved.
          </Typography>
          <Typography sx={{ fontSize: "13px", opacity: 0.6, mt: 0.5 }}>
            Disclaimer: Any dispute arising under these terms and conditions shall
            be subject to the jurisdiction of the courts of Delhi.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

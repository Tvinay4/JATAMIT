import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../theme/Theme";
import { lp_illustration } from "../iconsImports";
import { useNavigate } from "react-router-dom";
import { getEnv } from "../theme/setThemeColor";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AndroidIcon from '@mui/icons-material/Android';

const LandingPageIntro = () => {
  const navigate = useNavigate();
  const [env] = useState(getEnv());

  return (
    <Box
      className="landing-bg"
      id="landing-intro"
      sx={{
        background:
          "linear-gradient(135deg,rgb(199, 161, 90) 40%,rgba(179, 173, 139, 0.41) 100%)",
        color: "#fff",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: { xs: "3rem 1.5rem", md: "2rem 2rem" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ alignItems: "center" ,mt:3}}>
          {/* Text Section */}
          <Grid item md={6} xs={12}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                  lineHeight: 1.3,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Adjusting font size for responsiveness
                  marginBottom: 2, // Adds spacing below
                  paddingX: { xs: 2, sm: 0 }, // Adds padding for smaller screens
                }}
              >
                Seamless, Reliable, and <br />
                <span style={{ color: "#8B4513", fontSize: "2.8rem" }}>
                  Effortless
                </span>{" "}
                Transactions.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  textAlign: "justify",
                  color: "#f8f8f8",
                  fontWeight: 500,
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: 1.8,
                }}
              >
                <b>{env === "DIGIVOUCHERS" ? "DIGIVOUCHERS" : "PaisaKart"}</b>{" "}
                redefines online transactions with security and ease. A trusted
                name in the Indian recharge industry, ensuring a seamless
                experience with high success rates.
              </Typography>

              {/* Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  mt: 4,
                  gap:2,
                }}
              >
                <PrimaryButton
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "12px",
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: " #8B4513",
                    padding: " 24px",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { backgroundColor: "#5a2e0d" },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Get Started <ArrowForwardIcon sx={{ ml: 1 }} />
                </PrimaryButton>
                <SecondaryButton
                    variant="contained"
                    size="large"
                 
                    sx={{ borderRadius: "12px",
                      fontWeight: "bold",
                      display:"flex",
                      color: "#fff",
                      backgroundColor: " #8B4513",
                      padding: "24px",
                      p:1,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": { backgroundColor: "#5a2e0d" },}}
                    href={
                      env === "MoneyOddr"
                        ? "https://drive.google.com/drive/folders/1d_c8RT9UXCqqOmQqpTEd71PAHGX1rEW-?usp=drive_link"
                        : "https://drive.google.com/drive/folders/1d_c8RT9UXCqqOmQqpTEd71PAHGX1rEW-?usp=drive_link"
                      
                    }
                    target="_blank"
                    startIcon={ <AndroidIcon />}
                  >
                   
                    Download App
                  </SecondaryButton>
              </Box>
            </Box>
          </Grid>

          {/* Illustration Section */}
          {env !== "MoneyOddr" && (
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center",}}
            >
              <Box
                component="img"
                src={lp_illustration}
                alt="illustration"
                sx={{
                  width: { md: "100%", xs: "80%" },
                  maxWidth: "620px",
                  
                  height: "420px",
                  
                  backgroundColor: env === "PaisaKart" ? "#fff" : "transparent",
                  borderRadius: env === "PaisaKart" ? "50%" : "12px",
                  padding: env === "PaisaKart" ? "1rem" : "0",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageIntro;

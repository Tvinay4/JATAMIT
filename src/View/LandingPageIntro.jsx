import { lp_illustration } from "../iconsImports";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AndroidIcon from "@mui/icons-material/Android";

import { getEnv } from "../theme/setThemeColor";
const LandingPageIntro = () => {
  const navigate = useNavigate();
  const [env] = useState("WALLETHUB");

  return (
    <Box
      id="landing-intro"
      sx={{
        background: "linear-gradient(135deg, #c8f2ff 0%, #ffe3f4 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }} px={{ xs: 1, md: 3 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
                  lineHeight: 1.3,
                  background: "linear-gradient(90deg, #ff6f91, #6a5acd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                WalletHub — Your Money,
                <span style={{ color: "#00bfa6" }}> Your Way</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: "#555",
                  fontWeight: 400,
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: 1.7,
                  maxWidth: "500px",
                  mx: { xs: "auto", md: "0" },
                }}
              >
                WalletHub is your friendly finance companion — send, receive,
                and manage your money with ease. Enjoy instant transfers, smart
                budgeting, and a playful yet secure experience that makes money
                feel a little more fun.
              </Typography>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    background: "linear-gradient(90deg, #ff9a8b, #ff6f91)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #ff6f91, #ff9a8b)",
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  GET STARTED <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    background: "linear-gradient(90deg, #6a5acd, #00bfa6)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00bfa6, #6a5acd)",
                    },
                  }}
                  href="https://play.google.com/store/apps/details?id=wallethub"
                  target="_blank"
                  startIcon={<AndroidIcon />}
                >
                  Download App
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={lp_illustration}
              alt="WalletHub illustration"
              sx={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                mx: "auto",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageIntro;

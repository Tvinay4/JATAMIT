import { lp_illustration } from "../iconsImports";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AndroidIcon from "@mui/icons-material/Android";

import { getEnv } from "../theme/setThemeColor";

const LandingPageIntro = () => {
  const navigate = useNavigate();
  const [env] = useState("JATMIT");

  return (
    <Box
      id="landing-intro"
      sx={{
        background: "linear-gradient(135deg, #fff5eb 0%, #fef7f3 100%)",
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
                  background: "linear-gradient(90deg, #e86602, #094576)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JATMIT Innovations —
                <span style={{ color: "#e86602" }}> Simplifying Growth</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: "#444",
                  fontWeight: 400,
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                  mx: { xs: "auto", md: "0" },
                }}
              >
                At JATMIT Innovations, we empower individuals and businesses with
                seamless digital solutions. From secure transactions to smarter
                management tools, we bring innovation and trust together — so you
                can focus on what truly matters: growth and success.
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
                    background: "#e86602",
                    "&:hover": {
                      background: "#cc5600",
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
                    background: "#094576",
                    "&:hover": {
                      background: "#07375c",
                    },
                  }}
                  href="https://play.google.com/store/apps/details?id=jatmit"
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
              alt="JATMIT illustration"
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

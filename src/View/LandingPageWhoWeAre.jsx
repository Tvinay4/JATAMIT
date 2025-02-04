import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Apps, Lock, Person, Security } from "@mui/icons-material";

const LandingPageWhoWeAre = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const features = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technology to redefine digital transactions.",
      icon: <Apps sx={{ fontSize: 36, color: "#00bcd4" }} />,
      bg: "linear-gradient(135deg, #00bcd4, #D1AA65)",
      threshold: 200,
    },
    {
      title: "Trust",
      description: "Security and reliability are our top priorities for every transaction.",
      icon: <Lock sx={{ fontSize: 36, color: "#ff5722" }} />,
      bg: "linear-gradient(135deg, #ff5722, #ff9800)",
      threshold: 400,
    },
    {
      title: "Customer Focus",
      description: "Dedicated to providing seamless payment experiences for our users.",
      icon: <Person sx={{ fontSize: 36, color: "#8bc34a" }} />,
      bg: "linear-gradient(135deg, #8bc34a, #cddc39)",
      threshold: 600,
    },
    {
      title: "Security",
      description: "Advanced encryption ensures your transactions remain safe and secure.",
      icon: <Security sx={{ fontSize: 36, color: "#673ab7" }} />,
      bg: "linear-gradient(135deg, #673ab7, #9c27b0)",
      threshold: 800,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #81d4fa, #a5d6a7)",
          color: "white",
          textAlign: "center",
          py: 6,
          mb: 4,
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
          "&:hover": { transform: "scale(1.03)" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            color: "#333",
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Transforming the Future of Fintech
        </Typography>
      </Box>

      {/* Description Section */}
      <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#f4f6f9", borderRadius: 2 }}>
        <Typography
          variant="h5"
          sx={{
            px: 4,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.125rem", sm: "1.25rem" },
            lineHeight: 1.6,
            fontWeight: 400,
            color: "#555",
          }}
        >
          We are a leading fintech company revolutionizing the financial industry
          through innovative technology and customer-centric services. Our mission
          is to empower people with better financial tools that enhance transparency,
          security, and accessibility for all.
        </Typography>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ py: 6 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box
              sx={{
                background: feature.bg,
                p: 4,
                borderRadius: 2,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                transform: scrollY > feature.threshold ? "translateY(0)" : "translateY(20px)",
                opacity: scrollY > feature.threshold ? 1 : 0,
                transition: "all 0.5s ease-in-out",
                textAlign: "center",
                ":hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <IconButton
                sx={{
                  background: "#fff",
                  padding: 2,
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  mb: 2,
                }}
              >
                {feature.icon}
              </IconButton>
              <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff", fontFamily: "'Roboto', sans-serif" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#f1f1f1", mt: 1 }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Impact Section */}
      <Box sx={{ backgroundColor: "#F5F5F5", py: 6 }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Our Impact in Numbers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { value: "10K+", label: "Users worldwide", colors: ["#0072ff", "#00c6ff"] },
            { value: "₹10M", label: "Transactions processed", colors: ["#ff416c", "#ff4b2b"] },
            { value: "500+", label: "Business clients", colors: ["#00c9ff", "#92fe9d"] },
            { value: "99.9%", label: "Uptime guarantee", colors: ["#8E2DE2", "#4A00E0"] },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={2.8} key={index}>
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${stat.colors[0]}, ${stat.colors[1]})`,
                  p: 5,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.05)",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Typography variant="h3" fontWeight="bold" sx={{ color: "#fff" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff", mt: 2, fontSize: "1.1rem" }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPageWhoWeAre;

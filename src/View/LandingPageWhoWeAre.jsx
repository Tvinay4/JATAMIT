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
      description: "Integrating emerging technologies for seamless transactions.",
      icon: <Apps sx={{ fontSize: 40, color: "#005f73" }} />,
      bg: "#FDF6EC",
      threshold: 200,
    },
    {
      title: "Security",
      description: "Your transactions are encrypted and safeguarded.",
      icon: <Lock sx={{ fontSize: 40, color: "#9c27b0" }} />,
      bg: "#FCF2E9",
      threshold: 400,
    },
    {
      title: "Customer First",
      description: "Providing user-centric financial solutions.",
      icon: <Person sx={{ fontSize: 40, color: "#388e3c" }} />,
      bg: "#FDF6EC",
      threshold: 600,
    },
    {
      title: "Reliability",
      description: "99.9% uptime with a scalable fintech ecosystem.",
      icon: <Security sx={{ fontSize: 40, color: "#512da8" }} />,
      bg: "#FCF2E9",
      threshold: 800,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#FAF3E0", py: 8 }}> {/* Soft cream background */}
      
      {/* Header Section */}
      <Box sx={{ textAlign: "center", py: 6, mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#333" }}>
          Empowering Digital Financial Growth
        </Typography>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                background: feature.bg,
                p: 4,
                borderRadius: 3,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transform: scrollY > feature.threshold ? "translateY(0)" : "translateY(30px)",
                opacity: scrollY > feature.threshold ? 1 : 0,
                transition: "all 0.6s ease-in-out",
                textAlign: "center",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <IconButton sx={{ background: "#fff", p: 2, borderRadius: "50%", mb: 2 }}>
                {feature.icon}
              </IconButton>
              <Typography variant="h6" fontWeight={600} sx={{ color: "#333" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#444", mt: 1 }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Impact Section */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} color="#333" gutterBottom>
          Our Impact in Numbers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "₹50M+", label: "Transactions Processed" },
            { value: "1,000+", label: "Business Partners" },
            { value: "99.99%", label: "System Uptime" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: "#fff",
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.03)",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="#333">
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="#444" mt={1}>
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

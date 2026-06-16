import { useState, useEffect, useCallback } from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { MonetizationOn, Shield, ThumbUp, Speed } from "@mui/icons-material";

const LandingPageWhoWeAre = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Features with colorful icons and light pastel backgrounds
  const features = [
    {
      title: "Smart Money Tools",
      description: "Budget, save & invest effortlessly.",
      icon: <MonetizationOn sx={{ fontSize: 36, color: "#ff6b6b" }} />,
      bg: "#fff0f0",
      threshold: 100,
    },
    {
      title: "Bank-Level Security",
      description: "Your money is safe with AI fraud detection.",
      icon: <Shield sx={{ fontSize: 36, color: "#1e90ff" }} />,
      bg: "#e5f0ff",
      threshold: 250,
    },
    {
      title: "Happy Users",
      description: "Easy, delightful, and rewarding management.",
      icon: <ThumbUp sx={{ fontSize: 36, color: "#ff9f1a" }} />,
      bg: "#fff8e5",
      threshold: 400,
    },
    {
      title: "Lightning Fast",
      description: "Instant transfers & real-time updates.",
      icon: <Speed sx={{ fontSize: 36, color: "#4caf50" }} />,
      bg: "#e5fff0",
      threshold: 550,
    },
  ];

  const services = [
    // { title: "Instant Transfers", desc: "Send money anywhere instantly.", icon: "⚡", color: "#ff6b6b" },
    {
      title: "Mobile & DTH Recharge",
      desc: "Top-up phones & TV quickly.",
      icon: "📱",
      color: "#1e90ff",
    },
    {
      title: "Bill Payments",
      desc: "Pay all utility bills easily.",
      icon: "🧾",
      color: "#ff9f1a",
    },
    {
      title: "Wallet Rewards",
      desc: "Earn cashback & rewards.",
      icon: "🎁",
      color: "#4caf50",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fcfcfc",
        py: { xs: 8, md: 12 },
        position: "relative",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 12, px: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            color: "#094576",
            fontSize: { xs: "2.4rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          “Welcome to JATMIT Wallet” – Simple, Smart & Secure
        </Typography>
        <Typography
          sx={{
            color: "#555",
            mt: 2,
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Manage your finances effortlessly with a secure, fast, and joyful
          digital wallet.
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Grid
        container
        spacing={isMobile ? 4 : 6}
        justifyContent="center"
        sx={{ px: { xs: 3, md: 10 } }}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: feature.bg,
                p: { xs: 3, md: 5 },
                borderRadius: "20px",
                color: "#333",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                transform:
                  scrollY > feature.threshold
                    ? "translateY(0)"
                    : "translateY(40px)",
                opacity: scrollY > feature.threshold ? 1 : 0,
                transition: "all 0.7s ease-out",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                {feature.icon}
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1.2,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{ opacity: 0.9, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Services Section */}
      <Box sx={{ py: { xs: 10, md: 14 }, px: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 8,
            fontSize: { xs: "1.9rem", md: "2.4rem" },
            color: "#094576",
          }}
        >
          All-in-One Wallet Services
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {services.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "20px",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "2rem", mb: 2, color: item.color }}>
                  {item.icon}
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "#333",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPageWhoWeAre;

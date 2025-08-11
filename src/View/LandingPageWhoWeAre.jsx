import { useState, useEffect, useCallback } from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { MonetizationOn, Shield, ThumbUp, Speed } from "@mui/icons-material";

const LandingPageWhoWeAre = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const features = [
    {
      title: "Smart Money Tools",
      description: "Budget, track & invest with a joyful all-in-one dashboard.",
      icon: <MonetizationOn sx={{ fontSize: 36, color: "#fff" }} />,
      bg: "linear-gradient(135deg, #a8edea, #fed6e3)",
      threshold: 100,
    },
    {
      title: "Bank-Grade Security",
      description: "Protected with AI fraud detection & top-tier encryption.",
      icon: <Shield sx={{ fontSize: 36, color: "#fff" }} />,
      bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      threshold: 250,
    },
    {
      title: "User Happiness",
      description: "Every tap is designed to be delightful & empowering.",
      icon: <ThumbUp sx={{ fontSize: 36, color: "#fff" }} />,
      bg: "linear-gradient(135deg, #d4fc79, #96e6a1)",
      threshold: 400,
    },
    {
      title: "Lightning Speed",
      description: "Instant transfers & real-time balance updates.",
      icon: <Speed sx={{ fontSize: 36, color: "#fff" }} />,
      bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      threshold: 550,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: 300,
          height: 300,

          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-120px",
          right: "-100px",
          width: 300,
          height: 300,
          background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.5,
        }}
      />

      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 10, px: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            background: "linear-gradient(90deg, #ff6f91, #6a5acd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2.2rem", md: "3rem" },
            lineHeight: 1.2,
          }}
        >
          Meet WalletHub
        </Typography>
        <Typography
          sx={{
            color: "#777",
            mt: 2,
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          The cutest way to manage money — style, safety, and smiles all in one
          magical wallet.
        </Typography>
      </Box>

      {/* Features */}
      <Grid
        container
        spacing={isMobile ? 4 : 6}
        justifyContent="center"
        sx={{ px: { xs: 3, md: 8 } }}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                background: feature.bg,
                p: { xs: 3, md: 4 },
                borderRadius: "10px",
                color: "#fff",
                textAlign: "center",
                transform:
                  scrollY > feature.threshold
                    ? "translateY(0)"
                    : "translateY(40px)",
                opacity: scrollY > feature.threshold ? 1 : 0,
                transition: "all 0.8s cubic-bezier(.25,.8,.25,1)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  opacity: 0.95,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 3,
          background: "linear-gradient(135deg, #fef9f9, #f7faff)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 6,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            color: "#222",
          }}
        >
          Everything You Need in One Wallet 💳
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Instant Money Transfer",
              desc: "Send money to friends, family, or businesses in seconds — anytime, anywhere.",
              icon: "⚡",
              color: "#ff6f91",
            },
            {
              title: "Mobile & DTH Recharge",
              desc: "Top up your phone or TV in just 2 taps with secure payment options.",
              icon: "📱",
              color: "#6a5acd",
            },
            {
              title: "Bill Payments",
              desc: "Pay electricity, water, gas, and internet bills without standing in line.",
              icon: "🧾",
              color: "#00bfa6",
            },
            {
              title: "Wallet Rewards",
              desc: "Earn cashback, discounts, and loyalty points on every transaction.",
              icon: "🎁",
              color: "#ff9671",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "20px",
                  p: 3,
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <Typography sx={{ fontSize: "2rem" }}>{item.icon}</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                    mb: 1,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: item.color,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                  {item.desc}
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

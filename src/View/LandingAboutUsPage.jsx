import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  MonetizationOn,
  People,
  TrendingUp,
  Business,
} from "@mui/icons-material";
import Slider from "react-slick";
import { useTheme, useMediaQuery } from "@mui/material";

import aboutus from "../assets/aboutus1.png";
import { getEnv } from "../theme/setThemeColor";

// Theme Colors
const primaryColor = "#094576"; // Dark Blue
const accentColor = "#FFBC87"; // Soft Orange
const creamBg = "#FFF8E7"; // Cream background
const orangeBg = "#FFE5B4"; // Light Orange
const blueBg = "#E7F0FF"; // Soft Blue

// Reusable Card Component
const ReusableCard = ({ icon, title, description, color }) => (
  <Card
    sx={{
      height: "100%",
      borderRadius: 3,
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      background: color || "#fff",
      color: "#333",
      textAlign: "center",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      },
      p: 3,
    }}
  >
    <CardContent>
      {icon && (
        <Box sx={{ fontSize: 48, mb: 2, color: primaryColor }}>{icon}</Box>
      )}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const LandingAboutUsPage = () => {
  const envName = getEnv();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Testimonials Data
  const testimonials = [
    {
      name: "Ravi Kumar",
      position: "Small Business Owner",
      feedback:
        "JATMIT helped my shop accept digital payments easily. My sales grew 30% within first 3 months!",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
      rating: 5,
    },
    {
      name: "Dr. Anita Sharma",
      position: "Enterprise Client Director",
      feedback:
        "Secure, reliable, and simple. JATMIT transformed our business management and reduced transaction costs by 40%.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Tech Startup Founder",
      feedback:
        "Our team uses JATMIT for all transactions. The API integration was seamless and uptime is unmatched at 99.9%.",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
      rating: 5,
    },
    {
      name: "Sonia Verma",
      position: "Freelancer",
      feedback:
        "With JATMIT, I can accept payments globally without any hassle. Absolutely amazing!",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
      rating: 5,
    },
    {
      name: "Rajesh Singh",
      position: "SME Owner",
      feedback:
        "The analytics dashboard gave us deep insights into our growth trends. Highly recommended!",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };

  // Dashboard Cards Data
  const dataCards = [
    {
      title: "Revenue",
      icon: <MonetizationOn sx={{ color: "#FF6B6B", fontSize: 40 }} />,
      value: "$120K",
    },
    {
      title: "Users",
      icon: <People sx={{ color: "#4ECDC4", fontSize: 40 }} />,
      value: "1.2K",
    },
    {
      title: "Growth",
      icon: <TrendingUp sx={{ color: "#FFD93D", fontSize: 40 }} />,
      value: "35%",
    },
    {
      title: "Business",
      icon: <Business sx={{ color: "#6A4C93", fontSize: 40 }} />,
      value: "24 Partners",
    },
    {
      title: "Transactions",
      icon: <MonetizationOn sx={{ color: "#FFA500", fontSize: 40 }} />,
      value: "15K+",
    },
    {
      title: "Support Tickets",
      icon: <People sx={{ color: "#00CED1", fontSize: 40 }} />,
      value: "120 Resolved",
    },
    {
      title: "Active Clients",
      icon: <People sx={{ color: "#FF8C42", fontSize: 40 }} />,
      value: "350+",
    },
    {
      title: "Projects Completed",
      icon: <TrendingUp sx={{ color: "#6A4C93", fontSize: 40 }} />,
      value: "85%",
    },
  ];

  // Advantages / Why Choose Us Section
  const advantages = [
    {
      title: "Fast & Secure",
      description:
        "Our system ensures ultra-fast transactions with end-to-end encryption.",
      bgColor: "#FFE5E5", // Soft Pink
    },
    {
      title: "Global Reach",
      description: "Accept payments from customers worldwide with ease.",
      bgColor: "#E0F7F4", // Light Mint
    },
    {
      title: "24/7 Support",
      description: "Our support team is available anytime to help you.",
      bgColor: "#FFF4E1", // Soft Peach
    },
    {
      title: "Innovative Tools",
      description: "Get insights, analytics, and tools to grow your business.",
      bgColor: "#FFF9D9", // Light Lemon
    },
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <Box sx={{ py: 7, bgcolor: creamBg }}>
        <Typography
          variant="h3"
          sx={{
            color: accentColor,
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          ABOUT {envName?.toUpperCase()}
        </Typography>

        <Container>
          <Grid container spacing={6} alignItems="center" textAlign="justify">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: primaryColor, mt: 1, mb: 3 }}
              >
                Leading the Digital Payment Revolution
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
              >
                Jatmit Payment Systems is transforming the way businesses and
                individuals handle digital transactions. With a commitment to
                innovation and security, we provide seamless financial solutions
                tailored to the needs of the modern economy.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
              >
                Our platform integrates advanced technologies to ensure fast,
                reliable, and secure payments. Whether it's domestic transfers,
                international remittances, or merchant services, Jatmit empowers
                you to transact confidently.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#555", mb: 3, lineHeight: 1.6 }}
              >
                With 24/7 support, cutting-edge analytics, and global reach,
                Jatmit Payment Systems is your trusted partner in the journey
                toward a cashless, digital-first future.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={aboutus}
                alt="About Us"
                sx={{
                  width: "100%",
                  borderRadius: 6,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DASHBOARD CARDS */}
      <Box sx={{ py: 10, bgcolor: orangeBg }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 6, color: primaryColor }}
          >
            Our Key Metrics
          </Typography>
          <Grid container spacing={4}>
            {dataCards.map((card, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 3,
                    textAlign: "center",
                  }}
                >
                  {card.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="#555">
                    {card.value}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Box sx={{ py: 12, bgcolor: blueBg }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 6, color: primaryColor }}
          >
            Why Choose {envName?.toUpperCase()}?
          </Typography>
          <Grid container spacing={4}>
            {advantages.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <ReusableCard
                  title={item.title}
                  description={item.description}
                  color={item.bgColor}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ py: 12, bgcolor: creamBg }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 6, color: primaryColor }}
          >
            Trusted by Industry Leaders
          </Typography>
          <Slider {...sliderSettings}>
            {testimonials.map((item, idx) => (
              <Box key={idx} sx={{ px: 2 }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 6,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    bgcolor: "#fff",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{ width: 64, height: 64, mr: 2 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="#555">
                        {item.position}
                      </Typography>
                      <Box sx={{ display: "flex", mt: 0.5 }}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Typography key={i} sx={{ color: "#FFD700" }}>
                            ★
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", color: "#555" }}
                  >
                    "{item.feedback}"
                  </Typography>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingAboutUsPage;

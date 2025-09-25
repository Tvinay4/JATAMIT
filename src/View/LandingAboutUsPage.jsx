import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

// ✅ JATMIT Theme Colors
const jatmitPrimary = "#8b4513"; // Brown
const jatmitAccent = "#ffbc87"; // Light Orange

// ✅ Reusable Card Component
const ReusableCard = ({ title, description, icon, gradient }) => (
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
      background: gradient,
      color: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
      },
    }}
  >
    <CardContent sx={{ textAlign: "center" }}>
      {icon && (
        <Box sx={{ fontSize: 50, mb: 2, animation: "fadeIn 1.5s ease-in-out" }}>
          {icon}
        </Box>
      )}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 15 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const LandingAboutUsPage = () => {
  return (
    <Box>
      {/* 🌟 About Us Section */}
      <Box sx={{ py: 10, bgcolor: "#f9fafc" }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: jatmitPrimary, fontWeight: "bold" }}
              >
                ABOUT JATMIT
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: jatmitPrimary,
                  mb: 3,
                  mt: 1,
                }}
              >
                Discover JATMIT – Empowering Seamless Transactions
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
              >
                JATMIT is redefining digital payments with powerful and secure
                solutions. We empower individuals, entrepreneurs, and
                enterprises to simplify their transactions, promote financial
                inclusion, and amplify growth.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about-us.svg"
                alt="About JATMIT"
                sx={{ width: "100%", borderRadius: 4 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Key Stats Section */}
      <Box sx={{ py: 8, bgcolor: "#fff" }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <ReusableCard
                title="5M+"
                description="Transactions Completed"
                gradient={`linear-gradient(135deg, ${jatmitPrimary}, ${jatmitAccent})`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ReusableCard
                title="50K+"
                description="Entrepreneurs Empowered"
                gradient="linear-gradient(135deg, #ff758c, #ff7eb3)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ReusableCard
                title="99.9%"
                description="Uptime & Reliability"
                gradient="linear-gradient(135deg, #43cea2, #185a9d)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ReusableCard
                title="100+"
                description="Business Partners"
                gradient={`linear-gradient(135deg, ${jatmitAccent}, ${jatmitPrimary})`}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Retail Transformation */}
      <Box sx={{ py: 10, bgcolor: "#f9fafc" }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/retail.svg"
                alt="Retail Transformation"
                sx={{ width: "100%", borderRadius: 4 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: jatmitPrimary, fontWeight: "bold" }}
              >
                TRANSFORMING RETAIL
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: jatmitPrimary,
                  mb: 3,
                  mt: 1,
                }}
              >
                Simplifying Payments, Amplifying Growth
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
              >
                Our platform enables retailers and small businesses to accept
                payments, manage operations, and grow their businesses
                seamlessly — powered by JATMIT’s innovation.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Why Choose Us */}
      <Box sx={{ py: 8, bgcolor: "#fff" }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", mb: 5, color: jatmitPrimary }}
          >
            Why Choose JATMIT?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Seamless Payments"
                description="Frictionless digital payments for individuals and enterprises."
                gradient={`linear-gradient(135deg, ${jatmitAccent}, ${jatmitPrimary})`}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Financial Inclusion"
                description="Bringing financial tools to underserved communities."
                gradient="linear-gradient(135deg, #f7971e, #ffd200)"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Secure & Reliable"
                description="Your transactions are always safe with our advanced security."
                gradient="linear-gradient(135deg, #11998e, #38ef7d)"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Mission / Vision / Values */}
      <Box sx={{ py: 10, bgcolor: "#f9fafc" }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", mb: 5, color: jatmitPrimary }}
          >
            Our Mission, Vision & Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Mission"
                description="To simplify digital transactions and fuel inclusive growth."
                gradient="linear-gradient(135deg, #43cea2, #185a9d)"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Vision"
                description="To be the most trusted and innovative digital payment platform."
                gradient="linear-gradient(135deg, #ff758c, #ff7eb3)"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReusableCard
                title="Values"
                description="Innovation, inclusion, trust, and excellence in everything we do."
                gradient={`linear-gradient(135deg, ${jatmitPrimary}, ${jatmitAccent})`}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Testimonials Section */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", mb: 5, color: jatmitPrimary }}
          >
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: "Ravi Kumar",
                feedback:
                  "JATMIT helped my small shop accept digital payments easily. My sales grew by 30% in 6 months!",
              },
              {
                name: "Anita Sharma",
                feedback:
                  "Secure, reliable, and simple. JATMIT has truly transformed the way I manage my business.",
              },
              {
                name: "Tech Startup Founder",
                feedback:
                  "Our entire team uses JATMIT for transactions. The uptime and reliability are unmatched.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
                    "{item.feedback}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: jatmitPrimary }}
                  >
                    - {item.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🌟 Call To Action */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: `linear-gradient(135deg, ${jatmitPrimary}, ${jatmitAccent})`,
          color: "#fff",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Ready to Simplify Your Payments?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: 18 }}>
            Join thousands of entrepreneurs and enterprises growing with JATMIT
            today.
          </Typography>
          <Box
            component="button"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: 18,
              borderRadius: 3,
              border: "none",
              backgroundColor: "#fff",
              color: jatmitPrimary,
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: jatmitAccent,
                color: "#fff",
              },
            }}
          >
            Get Started Now
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingAboutUsPage;

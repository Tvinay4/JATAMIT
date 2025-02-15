import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";

const LandingPageWeOffer = () => {
  const navigate = useNavigate();
  const weOffer = [
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "MONEY TRANSFER",
      para: "Quick & secure domestic and international money transfers.",
      gradient: "linear-gradient(135deg, #FAD7A0, #F5CBA7)",
    },
    {
      icon: <FingerprintIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "AADHAAR BANKING",
      para: "Withdraw cash & check balance via Aadhaar-linked accounts.",
      gradient: "linear-gradient(135deg, #AED6F1, #85C1E9)",
    },
    {
      icon: <LocalAtmIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "LOAN SERVICES",
      para: "Apply for personal & business loans with easy approvals.",
      gradient: "linear-gradient(135deg, #A3E4D7, #76D7C4)",
    },
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "FASTAG RECHARGE",
      para: "Recharge your FASTag instantly for toll payments.",
      gradient: "linear-gradient(135deg, #D7BDE2, #C39BD3)",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "CREDIT CARD PAYMENTS",
      para: "Easily pay and manage your credit card bills.",
      gradient: "linear-gradient(135deg, #F9E79F, #F7DC6F)",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "INSURANCE SERVICES",
      para: "Get the best deals on life, health, and vehicle insurance.",
      gradient: "linear-gradient(135deg, #F5B7B1, #EC7063)",
    },
    {
      icon: <StoreIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "MERCHANT SERVICES",
      para: "Accept digital payments securely for your business.",
      gradient: "linear-gradient(135deg, #82E0AA, #58D68D)",
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 35, color: "#1C2833" }} />, // Dark color
      head: "UTILITY BILL PAYMENTS",
      para: "Pay electricity, water, and other utility bills effortlessly.",
      gradient: "linear-gradient(135deg, #85C1E9, #5DADE2)",
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "rgb(121, 179, 199)", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#2C3E50",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              What We Offer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "#566573",
                fontSize: "1rem",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Explore our fast, secure, and reliable financial solutions.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              {weOffer.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "220px",
                      borderRadius: "16px",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                      transition: "0.3s",
                      overflow: "hidden",
                      "&:hover": {
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box
                        sx={{
                          background: item.gradient,
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 10px",
                          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ mb: 1, fontWeight: "bold", fontSize: "1rem", color: "#2C3E50" }}>
                        {item.head}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#566573", fontSize: "0.9rem", textAlign: "center" }}>
                        {item.para}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageWeOffer;

import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CreditCardIcon from "@mui/icons-material/CreditCard";


const services = [
  {
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Instant Money Transfer",
    desc: "Send and receive money instantly with bank-level encryption.",
    bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "BBPS Bill Payments",
    desc: "Pay all your bills — electricity, gas, water, broadband — at one place.",
    bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  },
  {
    icon: <FingerprintIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "AEPS Banking",
    desc: "Cash withdrawals, deposits & balance checks via Aadhaar authentication.",
    bg: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },
  {
    icon: <QrCodeScannerIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "QR Payments",
    desc: "Scan & pay instantly at shops, cafes, and markets.",
    bg: "linear-gradient(135deg, #f6d365, #fda085)",
  },
  {
    icon: <LocalAtmIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Cash Withdrawals",
    desc: "Withdraw cash from partnered merchants or agents nearby.",
    bg: "linear-gradient(135deg, #f093fb, #f5576c)",
  },
  {
    icon: <CreditCardIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Card Management",
    desc: "Manage cards, track expenses, and control spending limits.",
    bg: "linear-gradient(135deg, #84fab0, #8fd3f4)",
  },
];



const LandingPageWeOffer = () => {
  const navigate = useNavigate();

const services = [
  {
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Instant Money Transfer",
    desc: "Send and receive money instantly with bank-level encryption.",
    bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "BBPS Bill Payments",
    desc: "Pay all your bills — electricity, gas, water, broadband — at one place.",
    bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  },
  {
    icon: <FingerprintIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "AEPS Banking",
    desc: "Cash withdrawals, deposits & balance checks via Aadhaar authentication.",
    bg: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },
  {
    icon: <QrCodeScannerIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "QR Payments",
    desc: "Scan & pay instantly at shops, cafes, and markets.",
    bg: "linear-gradient(135deg, #f6d365, #fda085)",
  },
  {
    icon: <LocalAtmIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Cash Withdrawals",
    desc: "Withdraw cash from partnered merchants or agents nearby.",
    bg: "linear-gradient(135deg, #f093fb, #f5576c)",
  },
  {
    icon: <CreditCardIcon sx={{ fontSize: 40, color: "#fff" }} />,
    head: "Card Management",
    desc: "Manage cards, track expenses, and control spending limits.",
    bg: "linear-gradient(135deg, #84fab0, #8fd3f4)",
  },
];

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #f7faff, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            color: "#222",
          }}
        >
          All-in-One Financial Hub 🚀
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "700px",
            mx: "auto",
            color: "#555",
            mb: 6,
            fontSize: "1.1rem",
          }}
        >
          From everyday bill payments to global money transfers — manage all your
          finances in one secure, easy-to-use platform.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  background: "#fff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                  },
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "-40%",
                    left: "-40%",
                    width: "180%",
                    height: "180%",
                    background: service.bg,
                    transform: "rotate(25deg)",
                    opacity: 0.15,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: service.bg,
                    mb: 2,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    mx: "auto",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
                >
                  {service.head}
                </Typography>
                <Typography sx={{ fontSize: "0.95rem", color: "#555" }}>
                  {service.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageWeOffer;

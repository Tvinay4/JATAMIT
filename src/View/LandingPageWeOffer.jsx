import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const colors = {
  primary: "#094576",
  orange: "#e86602",
  textDark: "#333",
  textLight: "#555",
  bgLight: "#fdf6f1",
};

const services = [
  {
    icon: <MonetizationOnIcon sx={{ color: colors.orange }} />,
    head: "Instant Transfers",
    desc: "Send money to anyone, anywhere instantly and securely.",
    iconBg: "#ffe5d6",
  },
  {
    icon: <PaymentIcon sx={{ color: colors.orange }} />,
    head: "Bill Payments",
    desc: "Pay electricity, water, gas, and internet bills in one place.",
    iconBg: "#fff2e5",
  },
  {
    icon: <FingerprintIcon sx={{ color: colors.orange }} />,
    head: "AEPS Banking",
    desc: "Withdraw, deposit & check balance with Aadhaar authentication.",
    iconBg: "#fff0e5",
  },
  {
    icon: <QrCodeScannerIcon sx={{ color: colors.orange }} />,
    head: "QR Payments",
    desc: "Pay instantly at shops, cafes, and markets via QR scan.",
    iconBg: "#fff3e5",
  },
  {
    icon: <CreditCardIcon sx={{ color: colors.orange }} />,
    head: "Card Management",
    desc: "Manage your cards, monitor expenses, and control spending.",
    iconBg: "#fff0e5",
  },
  {
    icon: <MobileFriendlyIcon sx={{ color: colors.orange }} />,
    head: "Mobile Recharge",
    desc: "Instant prepaid mobile & DTH recharges with secure payments.",
    iconBg: "#ffe5e5",
  },
  {
    icon: <LanguageIcon sx={{ color: colors.orange }} />,
    head: "Global Payments",
    desc: "Send and receive money internationally at low cost.",
    iconBg: "#fff2e5",
  },
  // New services
  {
    icon: <AttachMoneyIcon sx={{ color: colors.orange }} />,
    head: "UPI Payments",
    desc: "Seamless payments using UPI with instant settlement.",
    iconBg: "#fff0d6",
  },
  {
    icon: <AccountBalanceIcon sx={{ color: colors.orange }} />,
    head: "DMT (Money Transfer)",
    desc: "Transfer money domestically securely and instantly.",
    iconBg: "#ffe8d6",
  },
];

const LandingPageWeOffer = () => {
  return (
    <Box sx={{ py: 6, background: colors.bgLight, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: colors.primary }}
        >
          Explore Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "700px",
            mx: "auto",
            color: colors.textLight,
            mb: 10,
            fontSize: "1.1rem",
          }}
        >
          Manage all your financial needs in one place — secure, fast, and effortless.
        </Typography>

        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  padding: 3,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  background: "#fff",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                    borderColor: colors.orange,
                    borderWidth: "1px",
                    borderStyle: "solid",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: service.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 30,
                  }}
                >
                  {service.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: colors.orange, mb: 0.5 }}
                  >
                    {service.head}
                  </Typography>
                  <Typography sx={{ fontSize: "0.95rem", color: colors.textDark }}>
                    {service.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPageWeOffer;

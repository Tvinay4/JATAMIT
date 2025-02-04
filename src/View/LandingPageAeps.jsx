import React from 'react'
import { Button, Grid, Typography, Paper, Box, Stack } from "@mui/material";
import { lp_illustration } from "../iconsImports";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LandingPageAeps = () => {
  return (
    <Paper
      elevation={2}
      sx={{ p: 2, borderRadius: 4, backgroundColor: "#f9fafb" }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Image Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
  <Box>
    {/* Title */}
    <Typography variant="h3" fontWeight="bold" color="text.primary" sx={{ mb: 3 }}>
      Secure Payments with AEPS
    </Typography>

    {/* Subtitle */}
    <Typography variant="h5" color="text.secondary" sx={{ mt: 1 }}>
  Secure Payments with{" "}
  <Typography component="span" variant="h5" fontWeight="bold" color="#0F6E0A">
    Fast AEPS Transactions
  </Typography>
</Typography>


    {/* Features Section with Check Icons */}
    <Stack spacing={2} sx={{ mt: 3 }}>
      {[
        { text: "Aadhaar Based Authentication: Quick and secure verification" },
        { text: "Cash Withdrawals: Easy withdrawals from any bank" },
        { text: "Fund Transfers: Send money using your Aadhaar number" },
        { text: "Balance Inquiry: Check your account balance effortlessly" },
      ].map((item, index) => (
        <Stack key={index} direction="row" spacing={1} alignItems="center">
          <CheckBoxTwoToneIcon sx={{ color: "#009688", fontSize: 24 }} />
          <Typography variant="h6" color="text.secondary">
            {item.text}
          </Typography>
        </Stack>
      ))}
    </Stack>

    {/* Button */}
    <Button
  variant="contained"
  
  sx={{
    mt: 4,
    px: 1.6,
    py: 1.2,
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: 3,
    textTransform: "none",
    background: "linear-gradient(135deg, #FF416C, #FF4B2B)",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      background: "linear-gradient(135deg, #FF4B2B, #FF416C)",
      transform: "scale(1.05)",
      boxShadow: "0px 4px 15px rgba(255, 75, 43, 0.4)",
    },
  }}
  endIcon={<ArrowForwardIcon />}
>
  Know More
</Button>
  </Box>
</Grid>
        {/* Right Text Section */}

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img
            src={lp_illustration}
            alt="illustration"
            width="100%"
            height="auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LandingPageAeps
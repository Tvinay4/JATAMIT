import React from "react";

import { Button, Grid, Typography, Paper, Box, Stack } from "@mui/material";
import { lp_illustration } from "../iconsImports";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LandingPageInsurance = () => {
  return (
    <Paper
      elevation={2}
      sx={{ p: 2, borderRadius: 4, backgroundColor: "#f9fafb" }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Image Section */}
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

        {/* Right Text Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Box>
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
            Secure with Insurance
            </Typography>

            {/* Subtitle */}
            <Typography variant="h5" color="text.secondary" sx={{ mt: 1 }}>
  Get Coverage with{" "}
  <Typography component="span" variant="h5" fontWeight="bold" color="#0F6E0A">
    Affordable Premiums & Easy Claims
  </Typography>
</Typography>


            {/* Features Section with Check Icons */}
            <Stack spacing={1.5} sx={{ mt: 4 }}>
              {[
                {
                  text: "Health Insurance: Cover medical expenses & emergencies",
                },
                {
                  text: "Life Insurance: Secure your family's financial future",
                },
                { text: "Vehicle Insurance: Protection for your car & bike" },
                { text: "Travel Insurance: Stay worry-free while traveling" },
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
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
      </Grid>
    </Paper>
  );
};

export default LandingPageInsurance;

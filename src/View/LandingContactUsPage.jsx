import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";

import { PATTERNS } from "../utils/ValidationUtil";

import {
  primaryColor,
  getEnv,
  getFirmAddress,
  getFirmContact,
  getFirmEmail,
  primaryLight,
} from "../theme/setThemeColor";
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationCity as LocationCityIcon,
  Business as BusinessIcon,
  Message as MessageIcon,
  LocationOn as LocationOnIcon,
  PhoneAndroid as PhoneAndroidIcon,
} from "@mui/icons-material";

const LandingContactUsPage = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    mobile: "",
    email: "",
    city: "",
    company: "",
    message: "",
  });

  const isLetters = (str) => /^[A-Za-z\s]*$/.test(str);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" && !isLetters(value)) return;
    if (name === "mobile" && value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validation
    if (name === "email") {
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === "");
    }
    if (name === "mobile") {
      setIsMobileValid(/^\d{0,10}$/.test(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const contactCards = [
    {
      icon: <LocationOnIcon sx={{ fontSize: "2rem" }} />,
      title: "OUR MAIN OFFICE",
      content: getFirmAddress(),
      color: "#FFBC87",
    },
    {
      icon: <PhoneAndroidIcon sx={{ fontSize: "2rem" }} />,
      title: "PHONE NUMBER",
      content: getFirmContact(),
      color: "#FF6347",
    },
    {
      icon: <EmailIcon sx={{ fontSize: "2rem" }} />,
      title: "EMAIL",
      content: getFirmEmail(),
      color: "#FF1493",
    },
  ];
  const envValue = getEnv();
  return (
    <Box
      id="contact-us"
      sx={{
        // py: { xs: 4, md: 8 },
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
      }}
    >
      {envValue !== "MoneyOddr" && (
        <Grid className="servicePageBg">
          {/* <Box component="div" className="pageHead" sx={{ textAlign: "center", mt: 7 }}>
            Contact Us!
          </Box> */}
        </Grid>
      )}
      <Container maxWidth="lg">
        {/* <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            background: "linear-gradient(90deg, #ff6f91, #6a5acd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </Typography> */}

        <Typography
          variant="h6"
          sx={{
            mb: 6,
            textAlign: "center",
            color: "#555",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Have questions or need assistance? Reach out to our team and we'll get
          back to you promptly.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "white",
                "& .MuiTextField-root": { mb: 3 },
              }}
            >
              <TextField
                fullWidth
                name="firstName"
                label="Full Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="mobile"
                label="Mobile Number"
                variant="outlined"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                error={!isMobileValid}
                helperText={
                  !isMobileValid ? "Please enter a valid 10-digit number" : ""
                }
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="email"
                label="Email Address"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                required
                error={!isEmailValid}
                helperText={!isEmailValid ? "Please enter a valid email" : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="city"
                label="City"
                variant="outlined"
                value={formData.city}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="company"
                label="Company/Organization"
                variant="outlined"
                value={formData.company}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="message"
                label="Your Message"
                variant="outlined"
                value={formData.message}
                onChange={handleInputChange}
                required
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  borderRadius: "50px",
                  background: "linear-gradient(90deg, #ff6f91, #6a5acd)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #6a5acd, #ff6f91)",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>

          {/* Contact Cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={3}>
              {contactCards.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                      borderLeft: `4px solid ${card.color}`,
                    }}
                  >
                    <Box textAlign="center" mb={2}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 1.5,
                          borderRadius: "50%",
                          backgroundColor: `${card.color}20`,
                          color: card.color,
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        textAlign: "center",
                        color: card.color,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        whiteSpace: "pre-line",
                        color: "#555",
                      }}
                    >
                      {card.content}
                    </Typography>
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

export default LandingContactUsPage;

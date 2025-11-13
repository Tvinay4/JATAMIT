import {
  Button,
  Card,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

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

// ----------------- Contact Info Functions -----------------
export const getFirmAddress = () =>
  `HOUSE No-C-68 (OLD No-201)
KHASRA No - 31/2,
3RD FLOOR, VILLAGE PANSALI
BLOCK-C, DEEP VIHAR, PANSALI, DELHI-110042`;

export const getFirmContact = () => `9896146958`;

export const getFirmEmail = () => `info@jatmit.com`;

// ----------------- LandingContactUsPage Component -----------------
const LandingContactUsPage = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMobileValid, setIsMobileValid] = useState(true);
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

  return (
    <Box
      id="contact-us"
      sx={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        py: { xs: 4, sm: 0 },
        mb: 3,
      }}
    >
      <Grid className="servicePageBg">
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#094576", // or any color you prefer
          }}
        ></Box>
      </Grid>

      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h6"
          sx={{
            mb: 6, // more space below heading
            textAlign: "center",
            color: "#333",
            maxWidth: "700px",
            mx: "auto",
            mt: 2,
          }}
        >
          Have any questions or need support? Contact our team, and we’ll
          respond promptly.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 }, // increased padding
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "white",
                "& .MuiTextField-root": { mb: 3 }, // more space between fields
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
                rows={2} // slightly taller message box
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
                  mt: 3,
                  py: 1.8,
                  borderRadius: "50px",
                  background: "linear-gradient(90deg, #094576, #e86602)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #e86602, #094576)",
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
                      p: 2,
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
                          p: 2,
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

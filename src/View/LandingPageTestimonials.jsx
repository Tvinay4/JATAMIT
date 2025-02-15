import { Grid, Box, Typography, Card, Avatar, Rating } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const testimonials = [
  {
    text: "DIGIVOUCHERS made payments easy! The experience has been smooth and efficient.",
    name: "Arpita",
    location: "Delhi, India",
    image: "/images/arpita.jpg",
    rating: 5,
  },
  {
    text: "Bulk payments are hassle-free now! The team is very supportive and helpful.",
    name: "Sid",
    location: "Mumbai, India",
    image: "/images/sid.jpg",
    rating: 4,
  },
  {
    text: "DIGIVOUCHERS transformed how we handle transactions. Highly recommend it!",
    name: "Neha",
    location: "Bangalore, India",
    image: "/images/neha.jpg",
    rating: 5,
  },
  {
    text: "Seamless payment system, integrates perfectly with our workflow.",
    name: "Rahul",
    location: "Chennai, India",
    image: "/images/rahul.jpg",
    rating: 4.5,
  },
];

const LandingPageTestimonials = () => {
  return (
    <Grid xs={12} sx={{ backgroundColor: "#f9fafc", py: 5 }}>
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#333",
            letterSpacing: "1px",
            mb: 2,
          }}
        >
          What Our Customers Say
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 4,
            color: "#666",
            maxWidth: "600px",
            margin: "auto",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Hear from our satisfied users about how DIGIVOUCHERS has simplified
          their transactions.
        </Typography>

        {/* Testimonial Slider */}
        <Box sx={{ mt: 3 }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            infinite={true}
            autoplay={true}
            speed={300}
            breakpoints={{
              600: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    boxShadow: 3,
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 4,
                    textAlign: "center",
                    backgroundColor: "#fff8e1", // Light cream color
                    border: "1px solid #ffcc80", // Soft orange border
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1)",
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{
                      width: 65,
                      height: 65,
                      mb: 1.5,
                      border: "2px solid #ffcc80",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "Lato",
                      mb: 1,
                      color: "#444",
                      fontSize: "1rem",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "#222", fontSize: "1rem" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    {testimonial.location}
                  </Typography>
                  <Rating
                    name="testimonial-rating"
                    value={testimonial.rating}
                    readOnly
                    sx={{ mt: 1 }}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Grid>
  );
};

export default LandingPageTestimonials;

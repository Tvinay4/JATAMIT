import { Grid, Box, Typography, Avatar, Rating } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { avatar1, avatar2, avatar3, avatar4 } from "../iconsImports";

const testimonials = [
  {
    text: "Quick and easy payments! Absolutely love the seamless experience.",
    name: "Rohan Mehta",
    location: "Pune, India",
    image: avatar2,
    rating: 5,
  },
  {
    text: "Great support and smooth transactions. Highly recommended!",
    name: "Simran Kaur",
    location: "Delhi, India",
    image: avatar3,
    rating: 4.5,
  },
  {
    text: "Reliable and efficient! Never had an issue with transactions.",
    name: "Amit Sharma",
    location: "Hyderabad, India",
    image: avatar1,
    rating: 5,
  },
  {
    text: "Perfect for entrepreneurs! Easy payments, no hassles.",
    name: "Kavita Nair",
    location: "Bangalore, India",
    image: avatar4,
    rating: 4.5,
  },
];

const LandingPageTestimonials = () => {
  return (
    <Grid xs={12} sx={{ backgroundColor: "#fff8e1", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#333",
            letterSpacing: "1px",
            mb: 3,
          }}
        >
          What Our Clients Say
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            mb: 4,
            color: "#666",
            maxWidth: "650px",
            margin: "auto",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          See how our customers have transformed their payment experiences with
          DIGIVOUCHERS.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={600}
            breakpoints={{
              600: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 2,
                    backgroundColor: "#fff8e1",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{ width: 60, height: 60, mb: 1.5 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      mb: 1,
                      fontSize: "0.9rem",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#444",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#222",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "0.8rem", color: "#666" }}
                  >
                    {testimonial.location}
                  </Typography>
                  <Rating
                    name="testimonial-rating"
                    value={testimonial.rating}
                    readOnly
                    sx={{ mt: 1 }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Grid>
  );
};

export default LandingPageTestimonials;

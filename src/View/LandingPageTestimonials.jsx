import { Grid, Box, Typography, Avatar, Rating } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // <-- import module
import "swiper/css";
import "swiper/css/autoplay";
import { avatar1, avatar2, avatar3, avatar4,avatar5,avatar6,avatar7 } from "../iconsImports";

const testimonials = [
    { text: "Efficient, fast, and very user-friendly. Loved it!", name: "Ananya Singh", location: "Mumbai, India", image: avatar3, rating: 4.5 },
  { text: "Transactions made easy and safe. Excellent service!", name: "Rahul Kapoor", location: "Kolkata, India", image: avatar5, rating: 5 },
  { text: "Very professional and reliable platform for all payments.", name: "Priya Desai", location: "Jaipur, India", image: avatar7, rating: 4.5 },
  { text: "The best payment solution I have ever used. Highly recommend.", name: "Sanjay Reddy", location: "Chennai, India", image: avatar6, rating: 5 },
  { text: "Simple, fast, and secure. Exactly what every business needs.", name: "Meera Iyer", location: "Bangalore, India", image: avatar4, rating: 4.5 },
  { text: "Quick and easy payments! Absolutely love the seamless experience.", name: "Rohan Mehta", location: "Pune, India", image: avatar2, rating: 5 },
  { text: "Great support and smooth transactions. Highly recommended!", name: "Simran Kaur", location: "Delhi, India", image: avatar3, rating: 4.5 },
  { text: "Reliable and efficient! Never had an issue with transactions.", name: "Amit Sharma", location: "Hyderabad, India", image: avatar1, rating: 5 },
  { text: "Perfect for entrepreneurs! Easy payments, no hassles.", name: "Kavita Nair", location: "Bangalore, India", image: avatar4, rating: 4.5 },
  { text: "The JATMIT platform has completely simplified our payment workflow.", name: "Nikhil Verma", location: "Chennai, India", image: avatar2, rating: 5 },

];

const LandingPageTestimonials = () => {
  return (
    <Grid container sx={{  background: "linear-gradient(135deg, #fff5eb 0%, #fef7f3 100%)", py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#d2691e",
            letterSpacing: "1px",
            mb: 2,
          }}
        >
          What Our Clients Say
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 5,
            color: "#555",
            maxWidth: "700px",
            margin: "auto",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
          }}
        >
          See how our customers have transformed their payment experiences with JATMIT. Trusted by entrepreneurs, professionals, and businesses across India.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              reverseDirection: true, // this will reverse autoplay
              disableOnInteraction: false,
            }}
            speed={1000} // smooth animation
            breakpoints={{
              600: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            dir="rtl" // <-- ensures right-to-left sliding
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
                    minHeight: 230,
                    backgroundColor: "#fef7f3",
                    borderRadius: "12px",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
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
                      color: "#333",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#b85c00",
                      mb: 0.5,
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
                    sx={{ mt: 0.5 }}
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

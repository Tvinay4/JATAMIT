
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  StayCurrentPortrait as BillIcon,
  SatelliteAlt as DthIcon,
  Aod as UtilityIcon,
  Train as TravelIcon,
  QrCode as QrIcon,
  Smartphone as MobileIcon,
  Api as ApiIcon,
} from "@mui/icons-material";
import {
  aadharAtm_img,
  api,
  irctc_img,
  mobileR_img,
  mt,
  qrCode_img,
} from "../iconsImports";
const LandingServicesPage = ({ envName = "WALLETHUB" }) => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <BillIcon sx={{ fontSize: "2.5rem" }} />,
      title: "Bill Payments & Recharges",
      description:
        "Earn more by doing DTH/Mobile recharges, Utility bill payments for your customers easily and quickly across 150+ companies.",
    },
    {
      icon: <DthIcon sx={{ fontSize: "2.5rem" }} />,
      title: "DTH Recharge",
      description: `Choose from a variety of operators like Airtel DTH, Dish TV, Videocon D2h with ${
        envName === "WALLETHUB" ? "WALLETHUB" : "WALLETHUB"
      } merchant app.`,
    },
    {
      icon: <UtilityIcon sx={{ fontSize: "2.5rem" }} />,
      title: "Utility Recharge",
      description:
        "No more long queues. Easily pay Electricity, Water, and Gas bills for your customers through our platform.",
    },
  ];

  const featuredServices = [
    {
      title:
        envName === "WALLETHUB" ? "Travel Services" : "IRCTC Ticket Booking",
      description:
        envName === "WALLETHUB"
          ? "WALLETHUB offers comprehensive travel options including flights, hotels, trains, buses and vacation packages in one convenient platform."
          : `${envName} is authorized by IRCTC to book train tickets. Book tickets for any train, class, or destination quickly and reliably.`,
      image: { src:irctc_img, alt: "IRCTC Ticket Booking" },
      icon: <TravelIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "My QR/UPI",
      description: `${
        envName === "WALLETHUB" ? "WALLETHUB" : "WALLETHUB"
      } offers contactless payment services through QR codes or UPI, enabling instant, secure transactions for your customers.`,
      image: { src: qrCode_img, alt: "My QR/UPI" },
      icon: <QrIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title:
        envName === "WALLETHUB"
          ? "Prepaid Mobile & DTH Recharges"
          : "Mobile Recharge",
      description:
        envName === "WALLETHUB"
          ? "Find multiple operators and suitable plans for your customers and earn commission on each recharge."
          : `Earn by doing mobile/DTH recharges and utility bill payments for 150+ companies. ${envName} converts any shop into a one-stop solution.`,
      image: { src: mobileR_img, alt: "Prepaid Mobile & DTH Recharges" },
      icon: <MobileIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "API Banking",
      description:
        "An intuitive, simple-to-implement API banking stack built for scalability. Integrate with your backend ERP for balance inquiries and financial operations.",
      image: { src: api, alt: "API Banking" },
      icon: <ApiIcon sx={{ fontSize: "2.5rem" }} />,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #f8f9fb 100%)",
        py: { xs: 4, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
      id="our-services"
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255,111,145,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(106,90,205,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(90deg, #ff6f91, #6a5acd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Our Services
          </Typography>

          {envName === "WALLETHUB" ? (
            <Typography
              variant="h6"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                color: "#555",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Unlock new possibilities for your business and boost your earnings
              with{" "}
              <span style={{ fontWeight: 900, color: "#01A0E2" }}>
                WALLETHUB
              </span>
              . A single platform offering multiple services you can provide to
              your customers.
            </Typography>
          ) : (
            <Typography
              variant="h6"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                color: "#555",
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              We have exciting services for you on our application
            </Typography>
          )}
        </Box>

        {/* Core Services Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: "100%" }}>
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff9a8b, #ff6f91)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      color: "white",
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: "Poppins, sans-serif",
                      color: "#333",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", lineHeight: 1.7 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Featured Services */}
        {featuredServices.map((service, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              mb: 10,
              flexDirection: {
                xs: "column-reverse",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
            }}
            key={index}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: "60px",
                    height: "6px",
                    background: "linear-gradient(90deg, #6a5acd, #00bfa6)",
                    mb: 3,
                    borderRadius: "3px",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontFamily: "Poppins, sans-serif",
                    color: "#333",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#666",
                    lineHeight: 1.8,
                    mb: 4,
                    fontSize: "1.1rem",
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    background: "linear-gradient(90deg, #6a5acd, #00bfa6)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00bfa6, #6a5acd)",
                    },
                  }}
                  onClick={() => navigate("/sign-up")}
                  startIcon={service.icon}
                >
                  Sign Up Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  // boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  lineHeight: 0,
                  "& img": {
                    width: "50%",
                    height: "auto",
                    objectFit: "cover",
                  },
                }}
              >
                  <img src={service.image.src} alt={service.image.alt} />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default LandingServicesPage;

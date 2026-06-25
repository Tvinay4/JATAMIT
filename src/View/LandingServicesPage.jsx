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

const LandingServicesPage = ({ envName = "JATMIT" }) => {
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
        envName === "JATMIT" ? "JATMIT" : "JATMIT"
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
      title: envName === "JATMIT" ? "Travel Services" : "IRCTC Ticket Booking",
      description:
        envName === "JATMIT"
          ? "JATMIT offers comprehensive travel solutions with a wide range of options including flight tickets, hotel bookings, train reservations, bus services, and vacation packages. Merchants can provide these services directly to customers, making it a one-stop travel solution while also earning attractive commissions. With easy access, transparent pricing, and reliable support, our platform ensures convenience, customer satisfaction, and increased business opportunities for every merchant."
          : `${envName} is authorized by IRCTC to book train tickets seamlessly. Agents and merchants can provide their customers with access to train reservations across any class, route, or destination in India, ensuring a quick, reliable, and profitable service experience. With real-time booking, instant confirmations, and minimal downtime, merchants gain customer trust while expanding their digital service portfolio effectively and profitably.`,
      image: { src: irctc_img, alt: "IRCTC Ticket Booking" },
      icon: <TravelIcon sx={{ fontSize: "2.5rem" }} />,
    },
    // {
    //   title: "My QR/UPI",
    //   description: `${
    //     envName === "JATMIT" ? "JATMIT" : "JATMIT"
    //   } provides modern, contactless payment services through QR codes and UPI integration. Merchants can accept instant and secure digital payments directly from customers without the need for expensive infrastructure. It helps boost cashless transactions, improves customer convenience, and increases trust in your business. With seamless integration, zero hidden charges, and 24/7 availability, merchants can offer a smooth payment experience while strengthening their brand reputation.`,
    //   image: { src: qrCode_img, alt: "My QR/UPI" },
    //   icon: <QrIcon sx={{ fontSize: "2.5rem" }} />,
    // },
    {
      title:
        envName === "JATMIT"
          ? "Prepaid Mobile & DTH Recharges"
          : "Mobile Recharge",
      description:
        envName === "JATMIT"
          ? "Merchants can easily provide mobile and DTH recharge services for all leading operators in India. With multiple plans and instant processing, you can serve customers quickly, keep them happy, and earn commission on every transaction — turning your shop into a trusted digital recharge hub. The process is simple, secure, and ensures that merchants maintain strong customer relationships, increase foot traffic, and generate recurring daily income effortlessly."
          : `With ${envName}, merchants can handle mobile and DTH recharges along with utility bill payments for over 150+ service providers. This transforms any retail store into a complete digital service point, driving more footfall, customer satisfaction, and recurring income opportunities. By offering instant processing, error-free transactions, and wide coverage, merchants expand their service offerings and stay ahead in today’s fast-paced, digitally connected marketplace.`,
      image: { src: mobileR_img, alt: "Prepaid Mobile & DTH Recharges" },
      icon: <MobileIcon sx={{ fontSize: "2.5rem" }} />,
    },
    {
      title: "API Banking",
      description:
        "Our API Banking stack provides a robust, developer-friendly solution designed for businesses of all sizes. It allows secure integration with your ERP or backend systems to perform financial operations such as balance checks, utility payments, and more. With high scalability and strong compliance, businesses can automate and accelerate financial workflows while maintaining complete reliability. This creates an ecosystem where enterprises grow faster, improve efficiency, reduce costs, and deliver seamless financial services to their customers.",
      image: { src: api, alt: "API Banking" },
      icon: <ApiIcon sx={{ fontSize: "2.5rem" }} />,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #f8f9fb 100%)",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
      id="our-services"
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "200px", md: "300px" },
          height: { xs: "200px", md: "300px" },
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
          width: { xs: "250px", md: "400px" },
          height: { xs: "250px", md: "400px" },
          background:
            "radial-gradient(circle, rgba(106,90,205,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }} px={{ xs: 2, md: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(90deg, #ff6f91, #094676)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.75rem" },
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: "850px",
              mx: "auto",
              color: "#555",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            {envName === "JATMIT" ? (
              <>
                Unlock new possibilities for your business and boost your
                earnings with{" "}
                <span style={{ fontWeight: 900, color: "#01A0E2" }}>
                  JATMIT
                </span>
                . A single platform offering multiple services you can provide
                to your customers.
              </>
            ) : (
              "We have exciting services for you on our application."
            )}
          </Typography>
        </Box>

        {/* Core Services Grid */}
        <Grid container spacing={5} sx={{ mb: { xs: 6, md: 10 } }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                  p: 1,
                  boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 14px 26px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #e86602, #ff6f91, #ff6f91)",
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
                      color: "#222",
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
              mb: { xs: 8, md: 12 },
              px: { xs: 2, md: 4 },

              flexDirection: {
                xs: "column-reverse",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
            }}
            key={index}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: { md: 4 } }}>
                <Box
                  sx={{
                    width: 60,
                    height: 6,
                    background: "linear-gradient(90deg, #094676, #00bfa6)",
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
                    color: "#555",
                    lineHeight: 1.9,
                    textAlign: "justify",
                    mb: 4,
                    fontSize: { xs: "1rem", md: "1.15rem" },
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
                    background: "linear-gradient(90deg, #094576, #e86602)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #e86602, #094576)",
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
                  borderRadius: "20px",
                  overflow: "hidden",
                  lineHeight: 0,
                  display: "flex",
                  justifyContent: "center",
                  "& img": {
                    width: { xs: "70%", md: "65%" },
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

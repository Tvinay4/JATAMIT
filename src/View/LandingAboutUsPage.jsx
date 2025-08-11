import {
  Avatar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { aboutUs, aboutusstore } from "../iconsImports";
import { getEnv, primaryColor } from "../theme/setThemeColor";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SecurityIcon from "@mui/icons-material/Security";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import about_Us from "../assets/aboutUsC.jpg";
const mWhyChooseUs = [
  {
    title: "User-friendly platorm",
    body: "Our digital banking platform is designed with simplicity and ease of use in mind. We prioritise user experience and strive to create an intuitive interface that makes banking convenient and accessible.",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    title: "Minimum Investment",
    body: "Unlock financial opportunities with our platform requiring minimal investment. Our platform offers the flexibility to start investing with a low minimum investment, allowing you to take advantage of various investment options and grow your wealth. Experience the power of growing your wealth with even the smallest amounts.",
    icon: <TrendingUpOutlinedIcon />,
  },

  {
    title: "Quick Onboarding",
    body: "Experience hassle-free onboarding with us! Our streamlined process ensures quick and efficient account setup, allowing you to start enjoying our services in no time.",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Dedicated Merchant Support",
    body: "We prioritise customer satisfaction and offer exceptional support whenever you need it. Our dedicated merchant/customer support team is just a call or message away, and ready to assist you with any questions or concerns.",
    icon: <HandshakeOutlinedIcon />,
  },
  {
    title: "Safe & Secure Transactions",
    body: "We prioritise the security of our customers' financial information and adhere to strict compliance standards. With our robust security measures, you can trust that your transactions are confidential, protected, and carried out with integrity. Your peace of mind is our utmost priority.",

    icon: <LockClockOutlinedIcon />,
  },
  {
    title: "Multiple Banking Services",
    body: "We offer a wide range of digital banking services, including online banking, mobile banking, savings and checking accounts, insurance, and more. Our aim is to provide a comprehensive suite of services that cater to the diverse financial needs of our customers.",
    icon: <AccountBalanceOutlinedIcon />,
  },
];
const LandingAboutUsPage = () => {
  const envName = getEnv();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    setIsMounted(true); // Trigger the fade-in effect when the component mounts
  }, []);
  return (
    <div id="about-us " className="aboutUs">
      <Grid container className="builSecurity_bg">
        {/* about us */}
        <Grid md={12} xs={12}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
            }}
            variant="h4"
          >
            {/* <span className="the-slash"></span> */}
            <div className="landingPageHeadings">ABOUT US</div>
            {/* <span className="the-slash"></span> */}
          </Typography>
        </Grid>
        {/* paragraphs */}
        <Container maxWidth="lg" sx={{ my: 5, px: 2 }}>
          <Grid container className="d-flex justify-content-center">
            <Grid
              item
              md={5}
              sx={{ textAlign: "left", mr: { md: 1.5, sm: 0, xs: 0 } }}
            >
              <div className="justify-content">
                India’s vision is shaped by the guiding principles of "financial
                inclusion" and "AatmaNirbharta."
              </div>
              <div className="mt-2 justify-content">
                Our journey began at the intersection of these powerful
                ideologies. Across India, millions of dedicated individuals in
                the unorganized retail sector are the backbone of our economy.
              </div>
              <div className="mt-2 justify-content">
                Whether in a village, town, or bustling city, shopkeepers and
                kirana store owners face significant challenges in joining the
                digital revolution—primarily due to factors like lack of
                awareness, knowledge, and the right fintech support.
              </div>
            </Grid>
            <Grid
              item
              md={5}
              sx={{ textAlign: "left", ml: { md: 1.5, sm: 0, xs: 0 } }}
              className="justify-content"
            >
              This is the problem {getEnv()} aims to solve. Founded by a team of
              industry veterans with decades of experience in the BFSI sector,{" "}
              {getEnv()} is focused on unlocking the vast market potential
              within India’s financial transaction and fintech landscape. We are
              committed to guiding small-scale entrepreneurs towards a
              financially inclusive and empowered future.
            </Grid>
          </Grid>
        </Container>
        {/* the about us image */}
        {envName !== "MoneyOddr" && (
          <Grid
            container
            className="d-flex justify-content-center"
            sx={{
              pt: 3.5,
              background: "linear-gradient(135deg, #c8f2ff 0%, #ffe3f4 100%)",
              borderRadius: "15px",
            }}
          >
            <Grid md={5.5} sx={{ mb: { md: 0, xs: 5 } }}>
              <img
                src={aboutUs}
                width="80%"
                alt="About us img"
                style={{ borderRadius: "15px" }}
              />
            </Grid>

            <Grid
              md={6.5}
              container
              sx={{
                mt: { md: 10, xs: 0 },
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {/* Merchant Section */}
              <Grid
                md={5}
                className="bottom2top"
                sx={{
                  my: { md: 0, xs: 5 },
                  minWidth: { md: "0", xs: "350px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #fff8e1, #ffe0b2)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(255, 152, 0, 0.25)",
                }}
              >
                <div>
                  <StorefrontIcon
                    sx={{
                      color: "#ff7043",
                      fontSize: "3.5rem",
                      mb: 2,
                    }}
                  />
                  <div>
                    <span
                      className="landing-small-font less-thick-font"
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: "800",
                        color: "#e64a19",
                      }}
                    >
                      5000+
                    </span>
                    <div
                      style={{
                        fontSize: "16px",
                        marginTop: "8px",
                        color: "#ff7043",
                      }}
                    >
                      <span style={{ fontWeight: "800", fontSize: "18px" }}>
                        Merchants
                      </span>
                      <div>Onboarded across the country</div>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* Customers Section */}
              <Grid
                md={5}
                className="bottom2top"
                sx={{
                  my: { md: 0, xs: 5 },
                  minWidth: { md: "0", xs: "350px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(76, 175, 80, 0.25)",
                }}
              >
                <div>
                  <GroupAddIcon
                    sx={{
                      color: "#43a047",
                      fontSize: "3.5rem",
                      mb: 2,
                    }}
                  />
                  <div>
                    <span
                      className="landing-small-font less-thick-font"
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: "800",
                        color: "#2e7d32",
                      }}
                    >
                      11 Lakh+
                    </span>
                    <div
                      style={{
                        fontSize: "16px",
                        marginTop: "8px",
                        color: "#43a047",
                      }}
                    >
                      <span style={{ fontWeight: "800", fontSize: "18px" }}>
                        Customers
                      </span>
                      <div>Happy customers across India</div>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* Cities Section */}
              <Grid
                md={5}
                className="bottom2top"
                sx={{
                  my: { md: 0, xs: 5 },
                  minWidth: { md: "0", xs: "350px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0, 188, 212, 0.25)",
                }}
              >
                <div>
                  <ApartmentIcon
                    sx={{
                      color: "#00acc1",
                      fontSize: "3.5rem",
                      mb: 2,
                    }}
                  />
                  <div>
                    <span
                      className="landing-small-font less-thick-font"
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: "800",
                        color: "#00838f",
                      }}
                    >
                      5000+
                    </span>
                    <div
                      style={{
                        fontSize: "16px",
                        marginTop: "8px",
                        color: "#00acc1",
                      }}
                    >
                      <span style={{ fontWeight: "800", fontSize: "18px" }}>
                        Cities
                      </span>
                      <div>Spread across 5000+ cities</div>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* Transactions Section */}
              <Grid
                md={5}
                className="bottom2top"
                sx={{
                  my: { md: 0, xs: 5 },
                  minWidth: { md: "0", xs: "350px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(255, 152, 0, 0.25)",
                }}
              >
                <div>
                  <StorefrontIcon
                    sx={{
                      color: "#fb8c00",
                      fontSize: "3.5rem",
                      mb: 2,
                    }}
                  />
                  <div>
                    <span
                      className="landing-small-font less-thick-font"
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: "800",
                        color: "#e64a19",
                      }}
                    >
                      5,00,000+
                    </span>
                    <div
                      style={{
                        fontSize: "16px",
                        marginTop: "8px",
                        color: "#fb8c00",
                      }}
                    >
                      <span style={{ fontWeight: "800", fontSize: "18px" }}>
                        Transactions
                      </span>
                      <div>Processed Monthly</div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <>
        {envName !== "MoneyOddr" && (
          <div
            className="builSecurity_bg"
            style={{
              background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
              padding: "60px 0",
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={3} alignItems="center">
                {/* Left Side - Text Content */}
                <Grid item xs={12} md={6}>
                  <Box
                    className="landingPageHeadings"
                    sx={{
                      mb: 4,
                      fontSize: "28px",
                      fontWeight: "bold",
                      background: "#000080",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Transforming India’s Retail Landscape
                  </Box>

                  <Card
                    sx={{
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                      background:
                        "linear-gradient(135deg, #ffe3f4, rgb(255, 230, 255))",
                      width: { lg: "95%", md: "70%", sm: "85%", xs: "95%" },
                      p: { lg: 4, md: 4, sm: 3, xs: 3 },
                      borderRadius: "12px",
                      textAlign: "justify",
                    }}
                  >
                    <div
                      className="landing-bg_para"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#ff6f91",
                      }}
                    >
                      India's retail ecosystem is largely dominated by kirana
                      stores, mom-and-pop shops, and local brick-and-mortar
                      businesses, making up nearly{" "}
                      <strong>95% of the market</strong>. These businesses face
                      challenges in accessing modern financial and digital
                      solutions.
                      <br />
                      <br />
                      Our mission is to <strong>
                        empower local retailers
                      </strong>{" "}
                      with seamless fintech support, enabling them to compete in
                      the digital economy. By bridging the gap between{" "}
                      <strong>traditional retail</strong> and{" "}
                      <strong>modern trade</strong>, we create opportunities for
                      small businesses to{" "}
                      <strong>scale, grow, and thrive</strong>.
                      <br />
                      <br />
                      <strong>{getEnv()}</strong> is building a robust digital
                      ecosystem for India's unorganized retail sector, offering
                      financial tools and tech-driven solutions that foster
                      long-term sustainability.
                    </div>
                  </Card>
                </Grid>

                {/* Right Side - Image */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <img
                    src={aboutusstore}
                    alt="Retail Sector"
                    style={{
                      maxWidth: "100%",
                      height: "90%",
                      borderRadius: "12px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        )}

        {/* what we do */}
        <div className="builSecurity_bg">
          <Container maxWidth="lg" sx={{ mt: 10 }} className="bottom2top">
            <div className="landingPageHeadings ">
              {/* {envName === "MoneyOddr" ? "Why Choose Us" : "What We Do"} */}
              <h1>Embrace the future of finance.</h1>
            </div>

            {envName === "MoneyOddr" ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    my: 5,
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "600" }}>
                    Attractive Commision
                  </Typography>
                  <Typography variant="body">
                    Maximise Your Income with our Irresistible & Best Commission
                    Rates!
                  </Typography>
                </Box>
                <Grid container>
                  {mWhyChooseUs &&
                    mWhyChooseUs.map((item) => {
                      return (
                        <Grid
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          sx={{
                            mt: { lg: 2, md: 2, sm: 3, xs: 3 },
                            px: { lg: 1, md: 1, sm: 0, xs: 0 },
                          }}
                        >
                          <List
                            sx={{
                              width: "100%",

                              bgcolor: "background.paper",
                              position: "relative",
                            }}
                          >
                            <ListItem>
                              <ListItemAvatar
                                sx={{
                                  position: "absolute",
                                  // left: "-30px",
                                  top: 20,
                                }}
                              >
                                <Avatar sx={{ backgroundColor: "#0096DD" }}>
                                  {item.icon}
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                sx={{ ml: 8 }}
                                primary={
                                  <Typography
                                    variant="h4"
                                    sx={{ fontWeight: "600" }}
                                  >
                                    {item.title}
                                  </Typography>
                                }
                                secondary={
                                  <Typography
                                    variant="body"
                                    sx={{
                                      display: "flex",
                                      textAlign: "justify",
                                    }}
                                  >
                                    {item.body}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      );
                    })}
                </Grid>
              </>
            ) : (
              <>
                <Container maxWidth="lg" sx={{ mt: 10 }}>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      opacity: isMounted ? 1 : 0,
                      animation: isMounted ? "fadeIn 1s ease-in-out" : "none",
                    }}
                  >
                    <Grid
                      item
                      container
                      xs={12}
                      sm={6}
                      md={3}
                      direction="column"
                      spacing={2}
                      sx={{
                        mr: 10,
                      }}
                    >
                      <Grid item>
                        <Card
                          sx={{
                            width: "300px",
                            height: "270px",
                            margin: "10px",
                            textAlign: "center",
                            background:
                              "linear-gradient(135deg, #c8f2ff, #ffe3f4)",
                            borderRadius: "20px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                              }}
                            >
                              {/* Innovation Icon aligned to the right */}
                              <EmojiObjectsIcon
                                sx={{
                                  fontSize: "50px",
                                  color: "#ff6f91",
                                  mb: 1,
                                }}
                              />
                              <Typography
                                variant="h4"
                                sx={{
                                  background:
                                    "linear-gradient(90deg, #ff6f91, #6a5acd)",
                                  fontWeight: "bold",
                                  textAlign: "right",
                                }}
                              >
                                Innovation
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "18px",
                                  mt: 1,
                                  color: "#333",
                                }}
                              >
                                Cutting-edge technology and continuous
                                improvements to stay ahead of the curve.
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card
                          sx={{
                            width: "300px",
                            height: "270px",
                            margin: "10px",
                            textAlign: "center",
                            background:
                              "linear-gradient(135deg, #c8f2ff, #ffe3f4)",
                            borderRadius: "20px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                              }}
                            >
                              <SecurityIcon
                                sx={{
                                  fontSize: "50px",
                                  color: "#00bfa6",
                                  mb: 1,
                                }}
                              />
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: "bold",
                                  background:
                                    "linear-gradient(90deg, #00bfa6, #6a5acd)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                Security
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "18px",
                                  mt: 1,
                                  color: "#333",
                                }}
                              >
                                Robust security measures to protect your
                                transactions and sensitive data.
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>

                    {/* Center: 1 card */}
                    <Grid item xs={12} sm={6} md={3}>
                      <Card
                        sx={{
                          width: "300px",
                          height: "350px",
                          margin: "10px",
                          textAlign: "center",
                          alignItems: "center",
                          backgroundColor: " #FEDBBD",
                          borderRadius: "16px",
                          // background: "#71C1DC",
                          boxShadow: "0px 4px 20px rgba(0, 128, 0, 0.2)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 6px 25px rgba(0, 128, 0, 0.3)",
                          },
                        }}
                      >
                        <CardContent>
                          <img
                            src={about_Us}
                            alt="img"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      container
                      xs={12}
                      sm={6}
                      md={3}
                      direction="column"
                      spacing={2}
                      sx={{
                        ml: 10,
                      }}
                    >
                      <Grid item>
                        <Card
                          sx={{
                            width: "300px",
                            height: "270px",
                            margin: "10px",
                            textAlign: "center",
                            background:
                              "linear-gradient(135deg, #c8f2ff, #ffe3f4)",
                            borderRadius: "20px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                              }}
                            >
                              <IntegrationInstructionsIcon
                                sx={{
                                  fontSize: "50px",
                                  color: "#6a5acd",
                                  mb: 1,
                                }}
                              />
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: "bold",
                                  background:
                                    "linear-gradient(90deg, #6a5acd, #00bfa6)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                Integration
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "18px",
                                  mt: 1,
                                  color: "#333",
                                }}
                              >
                                Smoothly integrate with diverse platforms,
                                websites, and apps for seamless payment.
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card
                          sx={{
                            width: "300px",
                            height: "270px",
                            margin: "10px",
                            textAlign: "center",
                            background:
                              "linear-gradient(135deg, #c8f2ff, #ffe3f4)",
                            borderRadius: "20px",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                              }}
                            >
                              <ShutterSpeedIcon
                                sx={{
                                  fontSize: "50px",
                                  color: "#ff6f91",
                                  mb: 1,
                                }}
                              />
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: "bold",
                                  background:
                                    "linear-gradient(90deg, #ff6f91, #00bfa6)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                Speed
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "20px",
                                  textAlign: { lg: "left", sm: "center" },
                                }}
                              >
                                Fast transaction processing to keep your
                                payments moving without delays.
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </>
            )}

            {/* mission vission and values section */}

            <Grid container md={12} xs={12}>
              {/* 01 */}
              <Grid
                sx={{
                  mt: 12,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                md={12}
                className="bottom2top"
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                    width: "80%",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #FFBC87, #8B4513)", // Updated gradient colors
                      color: "#fff",
                      width: "70px",
                      height: "70px",
                      fontSize: "2.5rem",
                      borderRadius: "25%",
                      pt: 1,
                      fontWeight: "bold",
                      mr: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    01
                  </Box>
                  <span
                    className="landingPageHeadings"
                    style={{
                      letterSpacing: "0.1rem",
                      color: "#333",
                      fontSize: "1.8rem", // Smaller, concise header
                    }}
                  >
                    Financial Accessibility
                  </span>
                </Box>

                <Box
                  className="landing-bg_para"
                  component="div"
                  sx={{
                    textAlign: "justify",
                    width: "80%",
                    color: "#555",
                    fontSize: "1.3rem", // Larger content font size
                    lineHeight: "1.8",
                    mt: 2,
                  }}
                >
                  We aim to make banking services accessible and bring them
                  closer to communities, simplifying financial inclusion.
                </Box>
              </Grid>

              {/* 02 */}
              <Grid
                md={12}
                className="bottom2top"
                sx={{
                  mt: 6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                    width: "80%",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(135deg,rgb(183, 207, 99),rgb(129, 156, 67))", // Orange gradient for energy
                      color: "#fff",
                      width: "70px",
                      height: "70px",
                      fontSize: "2.5rem",
                      borderRadius: "25%",
                      pt: 1,
                      fontWeight: "bold",
                      mr: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    02
                  </Box>
                  <span
                    className="landingPageHeadings"
                    style={{
                      letterSpacing: "0.1rem",
                      color: "#333",
                      fontSize: "1.8rem", // Smaller header for consistency
                    }}
                  >
                    Empowering Progress
                  </span>
                </Box>

                <Box
                  className="landing-bg_para"
                  component="div"
                  sx={{
                    textAlign: "justify",
                    width: "80%",
                    color: "#555",
                    fontSize: "1.3rem", // Larger content font size
                    lineHeight: "1.8",
                    mt: 2,
                  }}
                >
                  Our mission is to enable businesses by providing seamless
                  access to digital financial tools, fostering growth.
                </Box>
              </Grid>

              {/* 03 */}
              <Grid
                sx={{
                  mt: 6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                md={12}
                className="bottom2top"
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                    width: "80%",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(135deg,rgb(86, 161, 130),rgb(110, 188, 155))", // Blue gradient for professionalism
                      color: "#fff",
                      width: "70px",
                      height: "70px",
                      fontSize: "2.5rem",
                      borderRadius: "25%",
                      pt: 1,
                      fontWeight: "bold",
                      mr: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    03
                  </Box>
                  <span
                    className="landingPageHeadings"
                    style={{
                      letterSpacing: "0.1rem",
                      color: "#333",
                      fontSize: "1.8rem", // Smaller header for consistency
                    }}
                  >
                    Building Trust
                  </span>
                </Box>

                <Box
                  className="landing-bg_para"
                  component="div"
                  sx={{
                    textAlign: "justify",
                    width: "80%",
                    color: "#555",
                    fontSize: "1.3rem", // Larger content font size
                    lineHeight: "1.8",
                    mt: 2,
                  }}
                >
                  We focus on providing transparent and reliable financial
                  solutions that ensure quality and consistency at every
                  touchpoint.
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    </div>
  );
};

export default LandingAboutUsPage;

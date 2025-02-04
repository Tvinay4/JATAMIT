import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { lp_illustration, slider1, slider2 } from "../iconsImports";
import { getEnv, secondaryColor } from "../theme/setThemeColor";
import { Box, Grid, IconButton } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "../theme/Theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageIntro from "../View/LandingPageIntro";
import LandingPageIntro2 from "../View/LandingPageIntro2";
import LandingPageIntro3 from "../View/LandingPageIntro3";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const PrevArrow = ({ onClick }) => (
  <IconButton
    className="slider-arrow left-arrow"
    onClick={onClick} 
    aria-label="Previous Slide"
    sx={{ backgroundColor: "red" }}
  >
    <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "30px" }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    className="slider-arrow right-arrow" // Add "right-arrow" class name
    onClick={onClick}
    aria-label="Next Slide"
  >
    <KeyboardDoubleArrowRightIcon sx={{ fontSize: "30px" }} />
  </IconButton>
);

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const navigate = useNavigate();
  const [env, setEnv] = useState(getEnv());

  return (
    <Slider {...settings} >
<LandingPageIntro/>
  <LandingPageIntro2/>
<LandingPageIntro3/>
      {/* <div className="slider-div">
        <div>
          <figure className="SliderCard">
            <img src={slider2} alt="slide1" width="100%" />
          </figure>
        </div>
      </div> */}
    </Slider>
  );
};

export default SimpleSlider;

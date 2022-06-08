import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { v4 as uuidv4 } from "uuid";
import Images from "./Images";

export default function Carousel({images}) {
  const sliderSettings = {
    //parametre du slicks
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [

      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  return (
    <div className="content">
      <Slider {...sliderSettings}>
        {images.map((item) => (
          <a href={item.link} key={uuidv4()}>
            <div className="cardImage pt-5 pb-5">
              <img src={item.image} alt={item.alt} />
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}

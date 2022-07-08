//défilement tout en bas des icones de languages/frameworks
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ArrayLanguages from "./ArrayLanguages";
import { v4 as uuidv4 } from "uuid";

export default function SlideLanguages() {
  const sliderSettings = {
    //parametre du slicks
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [

      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
        },
      },
    ],

  };


  return (
    <div id="slideLanguages" className="me-1">
      <Slider {...sliderSettings}>
        {ArrayLanguages.map((item) => (
            <div className="my-3" key="uuidv4()">
              <img src={item.image} alt={item.alt} />
            </div>
        ))}
      </Slider>
    </div>
  );
}

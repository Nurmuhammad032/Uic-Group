import "./About.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutImgs = ({ images, view }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        display: `${view ? "block" : "none"}`,
      }}
    >
      {images.length > 0 && (
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img src={img} alt="About carousel img" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AboutImgs;

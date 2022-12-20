import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <a href="https://pteacher.github.io/360_aiu/">
            <img
              height="400"
              className="d-block w-100"
              src="http://alatoo.edu.kg/image;jsessionid=WHO1I3OKbzj7OkHH8R2b4GmrTwsu0pLohjJqRFYj.unknown-host?img=thumb_image_360_sbar_4065355424698461236.jpg"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400"
            className="d-block w-100"
            src="http://alatoo.edu.kg/image;jsessionid=7tF0O6CIg1Elqs7owG4BBxqFG7KvxGinPS5hp7TP.unknown-host?img=thumb_image_kitep-betachar-slidebar_8105737983727694617.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400"
            className="d-block w-100"
            src="http://alatoo.edu.kg/image;jsessionid=WHO1I3OKbzj7OkHH8R2b4GmrTwsu0pLohjJqRFYj.unknown-host?img=thumb_image_krugst_slide_5964209573594135080.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

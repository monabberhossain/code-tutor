import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../../assets/sliders/slider1.jpg";
import Slider2 from "../../../assets/sliders/slider2.jpg";
import Slider3 from "../../../assets/sliders/slider3.jpg";

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider3}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;

import imgPersonOne from "../assets/images/touchstable-person1.jpg";
import imgPersonTwo from "../assets/images/touchstable-person2.jpg";
import imgPersonThree from "../assets/images/touchstable-person3.jpg";
import imgPersonFour from "../assets/images/touchstable-person4.jpg";
import imgPersonFive from "../assets/images/touchstable-person5.jpg";
import imgPersonSix from "../assets/images/touchstable-person6.jpg";
import imgPersonSeven from "../assets/images/touchstable-person7.jpg";

import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                centerMode
                emulateTouch
                centerSlidePercentage={80}
                showIndicators={false}
                transitionTime={750}
                className="custom-slider"
            >
                <div>
                    <img src={imgPersonOne} alt="" />
                </div>
                <div>
                    <img src={imgPersonTwo} alt="" />
                </div>
                <div>
                    <img src={imgPersonThree} alt="" />
                </div>
                <div>
                    <img src={imgPersonFour} alt="" />
                </div>
                <div>
                    <img src={imgPersonFive} alt="" />
                </div>
                <div>
                    <img src={imgPersonSix} alt="" />
                </div>
                <div>
                    <img src={imgPersonSeven} alt="" />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
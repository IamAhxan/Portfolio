import React, { Component, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItems from './SliderItems';




const SliderSection = (props) => {
    const { sliderData, title } = props
    const slider = useRef(null);
    useEffect(() => {

        console.log(slider)
    },);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,

                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <>
            <section class="projects" id="projects">
                <div class="title_div_right animate animate__bounce" id="animate">
                    <span class="text-grey">What I have done so far</span>
                    <h3 class="title title_left ">{title}</h3>
                </div>
                <div class="slider">
                    <Slider {...settings} ref={slider}>
                        {sliderData.map((slideData) => {
                            return <SliderItems {...slideData} key={slideData.id} />
                        })}
                    </Slider>
                    <div class="slider-one-btn">
                        <button class="s1-prev" onClick={() => slider.current.slickPrev()}>
                            <i class="fa fa-chevron-left"></i>
                        </button>
                        <button class="s1-next  right-0" onClick={() => slider.current.slickNext()}>
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderSection;

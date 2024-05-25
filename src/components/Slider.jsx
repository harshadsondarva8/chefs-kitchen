import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import slider1 from "../images/silider1.jpg";
import sliders from "../images/silider.png";
import slider2 from "../images/silider1.avif";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsArrowLeft
            className={className}
            style={{ ...style, display: "block", color: "#b09165" }}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsArrowRight
            className={className}
            style={{ ...style, display: "block", color: "#b09165" }}
            onClick={onClick}
        />
    );
}

$(function () {
    $(".bor").dblclick(() => {
        (".bor").css('border', "none")
    })
});

export default class CustomArrows extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="col-9 col-sm-8 col-lg-7 col-xl-6 m-auto">
                <Slider {...settings} className='text-center px-4 p-lg-auto'>
                    <div className="bor box" style={{ border: "none" }}>
                        <img src={sliders} alt="" className='responsive-img m-auto' width='600' />
                        <div className="box-content p-2 p-md-5">
                            <h3 className="h3 title fontbu">HotDog</h3>
                            <span className="post">Web designer</span>
                        </div>
                    </div>
                    <div className="bor box">
                        <img src={slider1} alt="" className='responsive-img m-auto' width='600' />
                        <div className="box-content p-5">
                            <h3 className="h3 title fontbu">HotDog</h3>
                            <span className="post">Web designer</span>
                        </div>
                    </div>
                    <div className="bor box">
                        <img src={slider2} alt="" className='responsive-img m-auto' width='600' />
                        <div className="box-content p-5">
                            <h3 className="h3 title fontbu">HotDog</h3>
                            <span className="post">Web designer</span>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
import React from 'react'
import "./Seventh.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import y from "../images/img/testimonial-1.jpg"
import z from "../images/img/testimonial-2.jpg"
import x from "../images/img/testimonial-3.jpg"
import w from "../images/img/testimonial-4.jpg"

const Seventh = (prop) => {

   const settings = {
     dots: true,
    speed: 500,
    slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
      autoplay: true,
       autoplaySpeed: 2000,
     };
  return (
    <div>
      <div class="container" data-wow-delay="0.1s">
            <div class="container">
                <div class="text-center">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 class="mb-5">Our Clients Say!!!</h1>
                </div>
                <div>
                <Slider {...settings}>
                    <div id='slid'>
                        <div id='slide'>
                            <h3>Hello world</h3>
                        </div>
                    </div>
                    <div id='slid'>
                        <h3>2</h3>
                    </div>
                    <div id='slid'>
                        <h3>3</h3>
                    </div>
                    <div id='slid'>
                        <h3>4</h3>
                    </div>
                    <div id='slid'>
                        <h3>5</h3>
                    </div>
                    
                </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seventh

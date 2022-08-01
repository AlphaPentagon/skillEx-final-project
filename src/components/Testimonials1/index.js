import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./testimonials.module.css";

export default function SimpleSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    vertical: true,
  };
  return (
    <div className={styles.wholeTestimonials}>
      <h2>Testimonials</h2>
      <Slider {...settings}>
        <div className={styles.allTestimonials}>
          <div className={styles.containerTestimonials}>
            <h6 className={styles.title}>Excellent</h6>
            <p className={styles.testimonials}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>

        <div className={styles.containerTestimonials}>
          <h6 className={styles.title}>Excellent</h6>
          <p className={styles.testimonials}>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <div className={styles.containerTestimonials}>
          <h6 className={styles.title}>Excellent</h6>
          <p className={styles.testimonials}>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </Slider>
    </div>
  );
}

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
		horizontal: true,
	};
	return (
		<div className={styles.wholeTestimonials}>
			<h2>Testimonials</h2>
			<Slider {...settings}>
				<div className={styles.allTestimonials}>
					<div className={styles.containerTestimonials}>
						<p className={styles.testimonials}>
							This site is amazing and has really helped me to improve my
							skills
						</p>
						<p className={styles.title}>Lucy de Rojas</p>
					</div>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						Fantastic tutors, all willing to help me to learn piano
					</p>
					<p className={styles.title}>Craig Summers</p>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						Love this site, I teach and learn which is great
					</p>
					<p className={styles.title}>Zainab Abid</p>
				</div>
			</Slider>
		</div>
	);
}

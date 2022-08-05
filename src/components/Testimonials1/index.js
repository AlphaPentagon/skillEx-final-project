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
							"This site is amazing and has really helped me to improve
							my skills!""
						</p>
						<p className={styles.title}>Lucy de Rojas</p>
					</div>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						"Fantastic tutors, all willing to help me to learn piano.""
					</p>
					<p className={styles.title}>Craig Summers</p>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						"Love this site, I teach and learn which is great.""
					</p>
					<p className={styles.title}>Zainab Abid</p>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						"A brilliant resource for upskilling! The community is
						wonderful. I love the concept and ethos."
					</p>
					<p className={styles.title}>Dave Hazeldean</p>
				</div>

				<div className={styles.containerTestimonials}>
					<p className={styles.testimonials}>
						"Got fed up with little things around the house breaking and
						having to pay an arm and a leg to get a contractor in to fix
						them. Popped over to SkillEx and quickly learnt how to fix all
						of my own DIY problems! What a site!"
					</p>
					<p className={styles.title}>Jay Whittingham</p>
				</div>
			</Slider>
		</div>
	);
}

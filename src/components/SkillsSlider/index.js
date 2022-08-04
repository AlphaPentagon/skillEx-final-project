
import React from "react";
import { useState } from "react";
import { skills } from "../../libs/skills";
import {
    FaArrowAltCircleRight as RightArrow,
    FaArrowAltCircleLeft as LeftArrow,
  } from "react-icons/fa";

export default function SkillSlider() {
  const [current, setCurrent] = useState(0);
  


 
  function nextSlide() {
    setCurrent(current === skills.length - 1 ? 0 : current + 1);
  };

   function prevSlide() {
    setCurrent(current === 0 ? skills.length - 1 : current - 1);
  };
  

  return (
    <>

      <h2 className="sub-heading"> Slides and Summary information</h2>
        <LeftArrow className="icon-left-arrow" onClick={prevSlide} />
        <RightArrow className="icon-right-arrow" onClick={nextSlide} />
      <section >

        {Skills.map((skill, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img className="image" src={skill.image} alt="Slides" />
              )}
            </div>
          );
        })}
      </section>
      <div className="arrows">
        </div>
    </>
  );
}

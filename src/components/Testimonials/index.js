//Testimonials
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./testimonials.module.css"

function Testimonials() {
  
  const text=[
    {id:0,value:"Fantastic tutors, all willing to help me learn piano within a few months and brushed up on my English teaching skills. Fantastic site!"},
    {id:1,value:"Got fed up with little things around the house breaking and having to pay an arm and a leg to get a contractor in to fix them. Popped over to SkillEx and quickly learnt how to fix all of my own DIY problems! What a site!"},
    {id:2,value:" We had one of the tutors assist our son with his French exercise, and it went really well. The tutor was considerate and patient, and he even recommended a free online pronunciation tool that was really helpful"},

  ];
  const [textData,setTextData]=useState(text[0].value)
  const handleClick=(index)=>{
    console.log(index)
    const textSlider=text[index].value;
    setTextData(textSlider)
  }
  return (

    <div className={styles.containerTestimonials}>



        <h2 className={styles.title}> Testimonials </h2>


        <div className={styles.testimonials}> 
        <Image 
            src="/media/images/TestimonialsLowRes.gif"
            width={853}
            height={480}

            layout='responsive'
            alt='testimonials animated gif'
        />
        </div>


{/* 
        <div className={styles.testimonialsAndImage}>

        <div className={styles.testimonials}> 
        <Image src= "/media/icons/testimonialsIcon.png" 
            width={437} 
                height={451} 
                layout="responsive"
                alt='testimonials image'/>
     
        </div>

        <div className={styles.paragraphTestimonial}>"{textData}"</div>
        </div>
       
         */}




{/* buttons: */}
      {/* <div className={styles.buttons}>
        {text.map((data,i)=>

          <button key={i} onClick={()=>handleClick(i)}
          className={styles.button}></button>

        )}
      </div> */}




    </div>
  );
}




export default Testimonials;
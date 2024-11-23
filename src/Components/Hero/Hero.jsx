import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider.jsx";

import hero1 from "../../assets/hero.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.jpg"
import hero5 from "../../assets/hero5.png"
import hero6 from "../../assets/hero6.jpg"
import hero7 from "../../assets/hero7.jpg"
import hero8 from "../../assets/hero8.jpg"
import hero9 from "../../assets/hero9.jpg"  
import hero10 from "../../assets/hero10.jpg"
import hero11 from "../../assets/hero11.jpg"

const subHeadings = [
  "Organized by:",
  "Department of CSE-AI &",
  "Department of CSE-AIML",
  "KIET Group Of Institutions,Delhi NCR,Ghaziabad"
];

const Hero = () => {
  
  // const images = [hero1, hero3, hero4, hero5];
  const images = [hero1, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11];

  return (
    <ImagesSlider
      className="h-[100vh] w-full"
      images={images}
      overlay={true}
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center h-full"
        id="home"
      >
        <motion.h1
          className="font-bold text-2xl sm:text-4xl md:text-6xl text-center text-white py-4"
        >
          International Conference on Emerging Trends in Computational Techniques
          <br />
          (ICETCT-2025)
        </motion.h1>
        <motion.h2
              className="font-semibold text-xl sm:text-3xl text-white"
            >
              On May 30-31, 2025
            </motion.h2>
            <br/><br/>
        <div className="text-center space-y-2">
          {subHeadings.map((text, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="font-semibold text-xl sm:text-3xl text-white"
            >
              {text}
            </motion.h2>
          ))}
        </div>
      </motion.div>
    </ImagesSlider>
  );
};


export default Hero;

import React, { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "../../assets/hero.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero.png";
import hero4 from "../../assets/hero2.png";


const backgroundImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [key, setKey] = useState(0); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setKey(prevKey => prevKey + 1);  
      }, 5000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        <div
          key={key} 
          className="hero"
          id="home"
          style={{
            background: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",      
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
            transition: "background 3s ease-in-out" 
          }}
        >
          <div className="hero-text">
            <h1>International Conference on Emerging Trends in Computational Techniques</h1>
            <h1>(ICETCT-2025)</h1>
            <h2>On May 30-31, 2025</h2>
            <h2>Organized by: Department of CSE-AI</h2>
            <h2>&</h2>
            <h2>Department of CSE-AIML</h2>
          </div>
        </div>
        <h1 className="text-center text-3xl text-bold mt-14">About ICETCT</h1>
      </>
    );
  };
  

export default Hero;

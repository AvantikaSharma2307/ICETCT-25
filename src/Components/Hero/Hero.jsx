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
      setKey((prevKey) => prevKey + 1);
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
        <div className="hero-text text-white text-center px-4 py-8 sm:py-16">
          <h1 className="text-3xl sm:text-5xl font-bold">International Conference on Emerging Trends in Computational Techniques</h1>
          <h1 className="text-2xl sm:text-4xl">(ICETCT-2025)</h1>
          <h2 className="mt-16 font-semibold text-xl sm:text-3xl">On May 30-31, 2025</h2>
          <h2 className="font-semibold text-xl sm:text-3xl">Organized by: </h2>
          <h2 className="font-semibold text-xl sm:text-3xl">Department of CSE-AI &</h2>
          <h2 className="font-semibold text-xl sm:text-3xl">Department of CSE-AIML</h2>
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold mt-14 mb-14 text-cyan-600">About ICETCT</h1>
      <div className="flex flex-col sm:flex-row gap-10 px-4 sm:px-20">
        <div className="w-full sm:w-1/3 text-center sm:text-left">
          <div className="bg-gray-300 rounded-lg p-6">Photo</div>
        </div>
        <div className="w-full sm:w-2/3 text-gray-700 text-lg sm:text-xl sm:ml-10">
          The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025), organized by the Department of Computer Science and Engineering – Artificial Intelligence (CSE-AI) and the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE-AIML) at KIET Group of Institutions, is a prestigious academic event scheduled for May 30-31, 2025. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning. ICETCT-2025 is dedicated to exploring the latest trends and developments in computational sciences, with a special focus on AI, machine learning, data science, and other emerging technologies. The conference will cover a wide range of topics, including deep learning, natural language processing, computer vision, big data analytics, IoT, Cyber Security, and AI applications across various industries. By providing an interdisciplinary platform, ICETCT-2025 aims to bring together thought leaders from academia and industry to share their insights and foster collaboration.
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 150, damping: 30, delay: 0.2 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 5, 
      }
    }
  };


  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.6 }
    }
  };

  const parallaxImageVariants = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 25, delay: 1 },
    },
  };


  return (
    <div id="aboutus">
      <motion.h1 
        variants={headerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="text-center text-4xl font-bold mt-14 mb-14 "
      >
        About ICETCT
      </motion.h1>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="flex flex-col sm:flex-row gap-10 px-4 sm:px-20"
      >
        <motion.div
          variants={parallaxImageVariants}
          className="w-full sm:w-1/3 text-center sm:text-left"
        >
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05, 
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }}
            className="bg-gray-300 rounded-lg p-6"
          >
            Photo
          </motion.div>
        </motion.div>

        <div className="w-full sm:w-2/3 text-gray-700 text-lg sm:text-xl sm:ml-10">
          <motion.div>
            <p>
              {`The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025), organized by the Department of Computer Science and Engineering – Artificial Intelligence (CSE-AI) and the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE-AIML) at KIET Group of Institutions, is a prestigious academic event scheduled for May 30-31, 2025. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning.`.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.03 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>

            <p>
              {`ICETCT-2025 is dedicated to exploring the latest trends and developments in computational sciences, with a special focus on AI, machine learning, data science, and other emerging technologies. The conference will cover a wide range of topics, including deep learning, natural language processing, computer vision, big data analytics, IoT, Cyber Security, and AI applications across various industries. By providing an interdisciplinary platform, ICETCT-2025 aims to bring together thought leaders from academia and industry to share their insights and foster collaboration.`.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.03 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;

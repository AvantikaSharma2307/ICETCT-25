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
      {/* <marquee direction="left" scrollamount="10" loop="infinite">
        <div className="flex flex-row gap-5 mt-16">
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/738983416.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/941528379.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/440826975.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/831756760.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/479675813.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/553833454.jpg" alt="KIET"/>
          <img src="https://www.kiet.edu/uploads/gallery/sub_gallary/july2020_018.jpg" alt="KIET"/>
        </div>
      </marquee> */}

      <motion.h1 
        variants={headerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="text-center text-4xl font-bold mt-14 mb-14 "
      >
        About ICETCT-2025
      </motion.h1>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="flex flex-col lg:flex-row gap-10 px-2 lg:px-20 ml-8 p-2"
      >
        <motion.div
          variants={parallaxImageVariants}
          className="w-full lg:w-1/3 text-center md:text-left "
        >
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05, 
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }}
            className=" rounded-lg "
          > <div className="justify-center pt-2 scale-90 lg:scale-125 lg:mt-14">
            <img src="https://www.kiet.edu/uploads/media/multiple_image_upload/3051433.JPG"/>
              {/* <img src="https://www.kiet.edu/uploads/media/multiple_image_upload/7924940.JPG" /> */}
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-2/3 text-gray-700  text-lg lg:text-xl lg:ml-10  ">
          <motion.div>
            <p className="text-justify max-w-full sm:max-w-3xl mx-auto">
              {`The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025), organized by the Department of Computer Science and Engineering – Artificial Intelligence (CSE-AI) and the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE-AIML) at KIET Group of Institutions, is a prestigious academic event scheduled for May 30-31, 2025. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning.`.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: -0.5,
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

            <p className="text-justify  max-w-full sm:max-w-3xl mx-auto">
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

      {/* Key Insights */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="flex flex-col sm:flex-row gap-10 px-4 mt-16 sm:px-20"
      >
        <div className="w-full sm:w-2/3 text-gray-700 text-lg sm:text-xl sm:ml-10">
          <motion.h1 
            variants={headerVariants} 
            initial="hidden" 
            whileInView="visible"
            className="text-center text-4xl font-bold mt-14 mb-14 "
          >
            Key Insights
          </motion.h1>

          <motion.div>
            <p className="text-justify max-w-full sm:max-w-3xl mx-auto">
              {`A key highlight of the conference will be the keynote addresses delivered by globally recognized experts in artificial intelligence and computational techniques. These keynote sessions will offer attendees a unique opportunity to gain valuable perspectives on the latest advancements and future directions in AI and machine learning. In addition to the keynote addresses, ICETCT-2025 will feature technical paper presentations, panel discussions, and interactive workshops designed to provide hands-on experience in areas like deep learning, AI-driven decision-making, and big data analytics.`.split(" ").map((word, index) => (
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

        <div className="w-3xl sm:w-2/3 text-gray-700 text-lg sm:text-xl sm:ml-10">
          <motion.h1 
            variants={headerVariants} 
            initial="hidden" 
            whileInView="visible"
            className="text-center text-4xl font-bold mt-14 mb-14 "
          >
            Objectives & Scope
          </motion.h1>

          <motion.div>
            <p className="text-justify max-w-4xl sm:max-w-3xl mx-auto">
              {`ICETCT-2025 is not only an academic forum but also a platform for networking and knowledge exchange.Through this  international gathering, ICETCT-2025 seeks to advance the understanding and implementation of emerging computational techniques, facilitate global collaboration in AI and machine learning, and support the growth of cutting-edge technologies in industries such as healthcare, finance, manufacturing, and more.`.split(" ").map((word, index) => (
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

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText"; 

const AboutUs = () => {
  const aboutp1 = `The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025), organized by the Department of Computer Science and Engineering – Artificial Intelligence (CSE-AI) and the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE-AIML) at KIET Group of Institutions, is a prestigious academic event scheduled for May 30-31, 2025. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning.`;

  const aboutp2 = `ICETCT-2025 is dedicated to exploring the latest trends and developments in computational sciences, with a special focus on AI, machine learning, data science, and other emerging technologies. The conference will cover a wide range of topics, including deep learning, natural language processing, computer vision, big data analytics, IoT, Cyber Security, and AI applications across various industries. By providing an interdisciplinary platform, ICETCT-2025 aims to bring together thought leaders from academia and industry to share their insights and foster collaboration.`;

  const keyInsightsContent = `A key highlight of the conference will be the keynote addresses delivered by globally recognized experts in artificial intelligence and computational techniques. These keynote sessions will offer attendees a unique opportunity to gain valuable perspectives on the latest advancements and future directions in AI and machine learning. In addition to the keynote addresses, ICETCT-2025 will feature technical paper presentations, panel discussions, and interactive workshops designed to provide hands-on experience in areas like deep learning, AI-driven decision-making, and big data analytics.`;

  const objectivesScopeContent = `ICETCT-2025 is not only an academic forum but also a platform for networking and knowledge exchange. Through this international gathering, ICETCT-2025 seeks to advance the understanding and implementation of emerging computational techniques, facilitate global collaboration in AI and machine learning, and support the growth of cutting-edge technologies in industries such as healthcare, finance, manufacturing, and more.`;

  // Variants for framer-motion animations
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 150, damping: 30, delay: 0.1 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1, 
        staggerChildren: 0.01, 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 25, delay: 0.1 } 
    }
  };

  const parallaxImageVariants = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 25, delay: 0.1 }
    }
  };

  return (
    <div id="aboutus">
      <motion.h1 
        variants={headerVariants} 
        initial="hidden" 
        whileInView="visible"
        className="text-center text-4xl font-bold mt-14 mb-14"
      >
        About ICETCT-2025
      </motion.h1>

      <motion.div 
        initial="hidden" 
        whileInView="visible"
        className="flex flex-col lg:flex-row gap-4  px-2 lg:px-20 lg:ml-8 p-2"
      >
        {/* <motion.div
          className="w-11/12 lg:w-1/3 text-center m-auto"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src="https://theknowledgereview.com/wp-content/uploads/2022/07/KIET-Group-of-Institutions-Hits-a-Record-of-95.03-Placement.jpg" className="h-72 rounded-lg" />
          </motion.div>
        </motion.div> */}

        <motion.div
          variants={parallaxImageVariants}
          className="w-11/12 lg:w-1/3 text-center  m-auto "
        >
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05, 
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }}
            className=" rounded-lg "
          > <div className="flex justify-center pl-2 scale-90 lg:scale-125 mt-0 md:mr-4 ">
            {/* <img src="https://www.kiet.edu/uploads/media/multiple_image_upload/3051433.JPG"/> */}
              <img src="https://theknowledgereview.com/wp-content/uploads/2022/07/KIET-Group-of-Institutions-Hits-a-Record-of-95.03-Placement.jpg" className="h-72 rounded-lg" />
              {/* <img src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9279/2019/4/11/Auditorium%20of%20KIET%20Group%20of%20Institutions%20Ghaziabad_Auditorium.jpg"/> */}
            </div>
          </motion.div>
        </motion.div>

        <div className="w-11/12 lg:w-2/3 text-gray-700 m-auto text-lg lg:text-xl lg:ml-10">
          <motion.div>
            <p className="text-justify max-w-full sm:max-w-3xl mx-auto">
              <AnimatedText text={aboutp1} el="p" className="text-lg" />
            </p>

            <p className="text-justify max-w-full sm:max-w-3xl mx-auto">
              <AnimatedText text={aboutp2} el="p" className="text-lg" />
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Insights Section */}
      <div className="flex flex-col lg:flex-row gap-10 px-4 mt-16 sm:px-20">
        <div className="w-full lg:w-2/3 text-gray-700 text-lg sm:text-xl mx-auto">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            className="text-center text-4xl font-bold mt-14 mb-14"
          >
            Key Insights
          </motion.h1>
          <div className="text-justify max-w-full w-11/12 sm:max-w-3xl mx-auto">
            <AnimatedText text={keyInsightsContent} el="p" className="text-lg" />
          </div>
        </div>

        {/* Objectives & Scope Section */}
        <div className="w-full lg:w-2/3 text-gray-700 text-lg sm:text-xl mx-auto">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            className="text-center text-4xl font-bold mt-14 mb-14"
          >
            Objectives & Scope
          </motion.h1>
          <div className="text-justify max-w-full sm:max-w-3xl w-11/12 mx-auto">
            <AnimatedText text={objectivesScopeContent} el="p" className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

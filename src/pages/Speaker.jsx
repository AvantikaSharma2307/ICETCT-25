import React from 'react';
import { motion } from 'framer-motion';

function Speaker() {
  const containerVariants = {
    hidden: { opacity: 0, x: '-100%' }, 
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delay: 0.2, 
      },
    },
  };

  return (
    <div id='speaker'className='pt-20' >
      <motion.div
        className="text-center text-white w-full h-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false }} 
      >
        <h1 className="mt-16 text-3xl md:text-4xl font-bold text-black">
          Speakers
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false}} 
      >
        <p className="text-gray-600 text-center text-lg md:text-3xl font-semibold" id="committees">
          Speakers in ICETCT-2025 will be officials from reputed industries and academicians
          from prominent institutions.
        </p>
      </motion.div>
    </div>
  );
}

export default Speaker;

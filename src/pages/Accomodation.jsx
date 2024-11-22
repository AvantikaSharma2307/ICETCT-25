import React from 'react';
import { motion } from 'framer-motion';

function Accomodation() {
  const containerVariants = {
    hidden: { opacity: 0, x: '100%' }, 
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 25,
      },
    },
  };

  const bounceVariants = {
    initial: { opacity: 0, x: '100%' }, 
    animate: {
      opacity: 1,
      x: [0, -15, 10, 0], 
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 25,
        duration: 1,
        repeatType: 'reverse', 
      },
    },
  };

  return (
    <div className='pt-28' id="accommodation">
      <motion.div
        className="text-center text-white w-full h-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black">Accommodation</h1>
      </motion.div>

      <motion.div
        className="px-4 md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <p className="text-gray-600 text-center text-lg md:text-3xl font-semibold mt-4 md:mt-8">
          Limited rooms are available for participants/guests (on a payment basis).
          <br /> The availability of rooms will be on a First-Come, First-Serve basis.
          <br /> For more details, kindly contact the following person:
        </p>

        <motion.div
          className="mt-6 text-center"
          variants={bounceVariants}
          initial="initial"
          animate="animate"
          whileInView="animate"
        >
          <p className="text-gray-700 text-xl md:text-2xl">
           <strong> Mr. Anurag Gupta</strong><br/> (Assistant Professor, KIET Group Of Institution,Delhi-NCR,Ghaziabad )
            <br />
            Phone: +91 8439012485
            <br />
            Email: anurag.gupta@kiet.edu
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Accomodation;

import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveTable from '../Components/ResponsiveTable';
import './Registration.css';

function Registration() {
  return (
    <div id="registration" className="mb-44">
      <div className="text-white w-full min-h-screen flex flex-col justify-center">
        
        <motion.h1
          className="pt-24 md:pt-36 text-3xl md:text-4xl font-bold text-black text-center"
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 25,
            delay: 0.2,
          }}
          viewport={{ amount: 0.5 }} 
        >
          Registration
        </motion.h1>

        <motion.div
          className="mt-8 md:mt-16 px-4 md:px-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 30,
            delay: 0.4,
          }}
          viewport={{ amount: 0.5 }} 
        >
          <p className="text-black text-lg md:text-3xl font-semibold text-center">
            At least one author of an accepted paper must register and present their paper at the
            conference.
            <br />
            <span
              className="bg-yellow-300 font-bold"
              style={{ backgroundColor: 'yellow' }}
            >
              Only accepted, registered, and presented papers will be considered for publication.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="mx-2 md:mx-24 mt-8 md:mt-14"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 30,
            delay: 0.6,
          }}
          viewport={{ amount: 0.2}} 
        >
            <motion.h2
            className="text-black text-2xl md:text-3xl font-bold mb-6 text-center"
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 0.8,
            }}
            viewport={{ amount: 0}} 
          >
            Registration Fees
          </motion.h2>

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }} 
            initial={{ opacity: 0, scale: 0.8 }}  
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 0.1, 
            }}
            viewport={{ amount: 0}} 
          >
            <ResponsiveTable />
          </motion.div>
        </motion.div>
        
<button className="button w-44 ml-14 md:ml-[45%]">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text " id="accommodation">Pay Now</span>
    </span>
</button>
      </div>
    </div>
  );
}

export default Registration;

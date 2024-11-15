import React from 'react';
import { motion } from 'framer-motion';


function Contact() {
  return (
    <>
      {/* Hero Section */}
      <motion.h1
            initial={{ opacity : 1 , y :100 }}
            whileInView ={{ opacity : 1 , y: 0 }}
            transition ={{
              type: "spring",
              stiffness:100,
              damping: 10,
              delay:0.2,
            }}
            className="text-2xl text-center sm:text-4xl font-semibold">
              <h1 className="pt-16 md:pt-36 text-black text-3xl md:text-4xl font-bold">
          Contact Us
        </h1>
      </motion.h1>

        {/* Content Section */}
        <motion.h1
            initial={{ opacity : 1 , y :100 }}
            whileInView ={{ opacity : 1 , y: 0 }}
            transition ={{
              type: "spring",
              stiffness:100,
              damping: 10,
              delay:0.2,
            }}
        className="mt-8">
          <p className="text-gray-600 text-center text-lg md:text-3xl font-semibold mb-20">
            For any query/correspondance,please contact:<br></br>
            Mr.Punnet Garg<br></br>
            Email:puneet.garg@kiet.edu
          </p>
        </motion.h1>
    </>
  );
}

export default Contact;

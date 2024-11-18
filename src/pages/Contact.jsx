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
            className="text-2xl text-center sm:text-4xl font-semibold" id="contact">
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
          <p className="text-gray-600 text-center text-xl md:text-3xl font-semibold ">
            For any query/correspondance,please contact:<br></br></p>
            <p className="text-gray-700 text-xl text-center md:text-2xl mb-20"><strong>Dr. Puneet Garg</strong><br></br>(Associate Professor,Department of CSE-AI)<br/>
            Phone:+91 9996091999<br/>
            Email:puneet.garg@kiet.edu
          </p>
        </motion.h1>
    </>
  );
}

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

function Organisingcommittie() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 1, 
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delay: 0.2, 
      },
    },
  };

  return (
    <div className="bg-blue-50 text-center px-4 mt-24 m-auto h-full md:px-8" id="commities">
      <div className="my-8">
        {/* Title Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl font-bold mb-8 text-blue-800 mt-20"
        >
          Organising Committee
        </motion.div>

        {/* Patron in Chief */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mb-4 text-blue-600 mt-6"
        >
          Patron in Chief
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full sm:w-2/6"
          >
            <div>Shri Sarish Agarwal</div>
            <div>Honourable Chairman</div>
            <div>KIET Group of Institutions</div>
          </motion.div>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full sm:w-2/6"
          >
            <div>Prof. (Dr.) Preeti Bajaj</div>
            <div>Director General</div>
            <div>KIET Group of Institutions, Delhi-NCR, Ghaziabad</div>
          </motion.div>
        </div>

        {/* General Chair */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          General Chair
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full sm:w-2/6"
          >
            <div>Dr. Manoj Goel</div>
            <div>Joint Director</div>
            <div>KIET Group of Institutions</div>
          </motion.div>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="w-full sm:w-2/6"
          >
            <div>Dr. Anil Ahlawat</div>
            <div>Dean Academics</div>
            <div>KIET Group of Institutions, Delhi NCR, Ghaziabad</div>
          </motion.div>
        </div>

        {/* Conference Chair */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Conference Chair
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="w-full sm:w-2/6 mx-auto"
        >
          <div className="text-center">
            <div>Prof. (Dr.) Rekha Kashyap</div>
            <div>Dean, Department of CSE-AI and Department of CSE-AIML</div>
            <div>KIET Group of Institutions</div>
          </div>
        </motion.div>

        {/* Technical Program Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Technical Program Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Nidhi Singh (Chair)</div>
            <div>Ms. Preeti Verma (Co-Chair)</div>
            <div>Mr. Thammali Gangadhar (Member)</div>
            <div>Ms. Ayushi Mittal (Member)</div>
          </div>
        </motion.div>

        {/* Publication Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Publication Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Umang Kant (Chair)</div>
            <div>Ms. Kavya Gupta (Co-Chair)</div>
            <div>Ms. Anjali Chauhan (Member)</div>
          </div>
        </motion.div>

        {/* Event Management Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Event Management Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Bhawna (Chair)</div>
            <div>Ms. Akanksha (Co-Chair)</div>
            <div>Ms. Chayanika Bhattacharjee</div>
          </div>
        </motion.div>

        {/* Publicity Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Publicity Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Mr. Bhuvnesh Malik (Chair)</div>
          </div>
        </motion.div>

        {/* Local Arrangement Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Local Arrangement Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Mr. Anurag Gupta (Chair)</div>
            <div>Ms. Pratibha Kashyap (Co-Chair)</div>
            <div>Mr. Sandeep Yadav (Member)</div>
            <div>Ms. Ritu Mehta (Member)</div>
          </div>
        </motion.div>

        {/* Finance Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Finance Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Kumud Alok (Chair)</div>
            <div>Mr. Rachit Patel (Co-Chair)</div>
          </div>
        </motion.div>

        {/* Registration Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Registration Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Ruchika Mavis Daniel (Chair)</div>
            <div>Ms. Gargi Singh (Co-Chair)</div>
            <div>Ms. Shaifali Rao (Member)</div>
          </div>
        </motion.div>

        {/* Other Committees */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Technical Session/Speaker Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Dr. Puneet Garg (Chair)</div>
            <div>Dr. Gaurav Srivastav (Co-Chair)</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Sponsorship Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Dr. Puneet Garg (Chair)</div>
            <div>Ms. Payal Chhabra (Member)</div>
            <div>Mr. Rajeev Kumar Singh (Member)</div>
            <div>Ms. Richa Singh (Co-Chair)</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Media Management Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Aastha Gupta (Chair)</div>
            <div>Mr. Shivansh Prasad (Co-Chair)</div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Abstract Book/Conference Proceedings
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Richa Singh (Chair)</div>
            <div>Mr. Deepak Tripathi (Co-Chair)</div>
            <div>Mr. Abhishek Shukla (Member)</div>
          </div>
        </motion.div>

        {/* Website Management Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Website Management Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Mr. Rajeev Kumar Singh (Chair)</div>
          </div>
        </motion.div>

        {/* Registration Kit/Memento Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Registration Kit/Memento Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Mr. Nagendra Nath Dubey (Chair)</div>
            <div>Mr. Sahil Bhatia (Co-Chair)</div>
            <div>Mr. Anuj Gupta (Member)</div>
          </div>
        </motion.div>

        {/* Certificate Committee */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Certificate Committee
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Ms. Nidhi Singh (Chair)</div>
            <div>Mr. Ashish Gaur (Co-Chair)</div>
          </div>
        </motion.div>

        {/* Concluding Remarks */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Concluding Remarks
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <div className="w-full sm:w-2/6">
            <div>Prof. (Dr.) Rekha Kashyap</div>
          </div>
        </motion.div>

        {/* Acknowledgement */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl font-bold mt-8 mb-4 text-blue-600"
        >
          Acknowledgement
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mt-4 text-lg text-gray-700"
        >
          We thank our Sponsors and Partners for their generous support
        </motion.div>

      </div>
    </div>
  );
}

export default Organisingcommittie;


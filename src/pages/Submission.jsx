import React from 'react';
import { motion } from 'framer-motion';

export default function PaperSubmission() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 pt-28 lg:px-8 bg-gray-100" id="submission">
      <div className="max-w-4xl mx-auto">
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          Paper Submission
        </motion.h1>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                delay: 0.3,
              }}
              className="px-6 py-4 bg-black"
            >
              <h2 className="text-xl font-bold text-white">Submission Guidelines</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                delay: 0.5,
              }}
              className="px-6 py-4"
            >
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  All submissions must be original and not under review/publication elsewhere.
                </li>
                <li className="flex items-start">
                  Papers should follow the conference formatting guidelines and should not exceed 8 pages, including references and appendices.
                </li>
                <li className="flex items-start">
                  Submit your papers through the conference submission portal by January 15, 2025.
                </li>
                <li className="flex items-start">
                  Accepted papers will be presented at the conference, and all registered participants will receive a certificate of participation.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 0.5,
            }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}  
              whileInView={{ opacity: 1, x: 0 }}  
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                delay: 0.5,
              }}
              className="px-6 py-4 bg-black"
            >
              <h2 className="text-xl font-bold text-white">Important Dates</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                delay: 0.7,
              }}
              className="px-6 py-4"
            >
              <ul className="space-y-3 text-black">
                <li className="flex items-center">
                  <strong className="mr-2">Paper Submission Deadline:</strong> January 15, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Notification of Acceptance:</strong> March 1, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Camera-ready Submission:</strong> April 15, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Conference Dates:</strong> May 30-31, 2025
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }}  
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.7,
          }}
          className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 0.8,
            }}
            className="px-6 py-4 bg-black"
          >
            <h2 className="text-xl font-bold text-white">Submit Your Paper</h2>
            <p className="text-sm text-gray-300 mt-1">Make sure you've read the guidelines before submitting.</p>
          </motion.div>
          <div className="px-6 py-4 bg-gray-50">
            <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Submit Paper
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

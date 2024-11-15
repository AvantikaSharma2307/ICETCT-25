import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function CallForPapers() {
  const tracks = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      topics: [
        'Deep Learning and Neural Networks',
        'Reinforcement Learning',
        'AI in Healthcare',
        'Transfer Learning',
        'Machine Learning for Autonomous Systems',
        'Explainable AI',
        'AI for Natural Language Processing',
        'Ethical AI and Fairness',
        'AI in Robotics',
        'AI for Edge and Cloud Computing',
      ],
    },
    {
      title: 'Data Science and Big Data Analytics',
      topics: [
        'Predictive Modeling',
        'Big Data Frameworks and Platforms (Hadoop, Spark)',
        'Data Visualization Techniques',
        'Data Mining and Knowledge Discovery',
        'Big Data in Healthcare',
        'Real-time Data Processing',
        'Sentiment Analysis and Opinion Mining',
        'Data Cleaning and Preprocessing',
        'Data Privacy and Security in Big Data',
        'Machine Learning on Large-scale Data',
      ],
    },
    {
      title: 'Internet of Things (IoT) and Smart Systems',
      topics: [
        'IoT Architectures and Frameworks',
        'Smart Cities and Infrastructure',
        'Edge Computing and IoT',
        'Sensor Networks and Data Management',
        'IoT for Healthcare and Wearables',
        'Industrial IoT Applications',
        'Security in IoT Networks',
        'AI in IoT Systems',
        'Smart Agriculture and Environment Monitoring',
        'Connected Vehicles and Autonomous Systems',
      ],
    },
    {
      title: 'Cybersecurity and Cryptography',
      topics: [
        'Cryptography and Encryption Techniques',
        'Intrusion Detection and Prevention Systems',
        'AI and Machine Learning for Cybersecurity',
        'Blockchain and Distributed Ledger Technologies',
        'Security in Cloud Computing',
        'Cybersecurity in IoT Systems',
        'Threat Modeling and Risk Analysis',
        'Post-Quantum Cryptography',
        'Secure Software Development Lifecycle (SSDLC)',
        'Cyber-Physical System Security',
      ],
    },
    {
      title: 'Natural Language Processing (NLP) and Speech Recognition',
      topics: [
        'Language Models and Transformers',
        'Machine Translation',
        'Text Summarization and Sentiment Analysis',
        'Speech Recognition and Synthesis',
        'Information Retrieval and Extraction',
        'AI in Conversational Agents and Chatbots',
        'Multimodal Language Processing',
        'Low-Resource Language Processing',
        'NLP for Healthcare and Social Media',
        'Ethics in NLP',
      ],
    },
    {
      title: 'Computer Vision and Image Processing',
      topics: [
        'Image Classification and Segmentation',
        'Object Detection and Tracking',
        'Facial Recognition Systems',
        'Deep Learning for Computer Vision',
        '3D Vision and Reconstruction',
        'Image and Video Enhancement',
        'Medical Image Processing',
        'AI in Autonomous Vehicles',
        'Augmented Reality and Virtual Reality',
        'Scene Understanding and Semantic Segmentation',
      ],
    },
    {
      title: 'Interdisciplinary Research',
      topics: [
        'AI in Healthcare and Bioinformatics',
        'Computational Social Sciences',
        'AI in Education and E-learning',
        'AI in Finance and Fintech Innovations',
        'Computational Techniques in Environmental Science',
        'AI for Drug Discovery and Development',
        'Computational Models in Psychology and Cognitive Science',
        'AI in Art, Music, and Creative Industries',
        'AI and Ethics in Interdisciplinary Contexts',
        'AI in Legal Tech and Governance',
      ],
    },
  ];

  return (
    <div className="w-full mx-auto px-6 py-16 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-200 mt-14" id="callforpapers">
      {/* Main Section Animation */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Call for Papers
          </motion.h1>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-medium text-gray-700 mt-4 leading-relaxed"
          >
            International Conference on Emerging Trends in Computational Techniques (ICETCT-2025)
          </motion.h2>
        </div>

        {/* Conference Overview Section */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-10 p-10 max-w-7xl mx-auto">
            <div className="border-b-2 border-gray-300 pb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Conference Overview</h3>
            </div>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025) invites researchers,
              scholars, industry professionals, and practitioners from across the globe to submit their original and
              unpublished research papers. The conference will focus on advancements in computational techniques with a
              particular emphasis on artificial intelligence, machine learning, and other cutting-edge technologies. Accepted
              papers will be included in the Scopus Indexed conference proceedings (Under Communication).
            </p>
          </div>
        </motion.div>

        {/* Conference Tracks Section */}
        <div className="mb-4 m-auto w-full">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl font-semibold text-gray-800 text-center mb-4"
          >
            Conference Tracks
          </motion.h3>
          <div className="w-full max-w-screen-xl mx-auto px-6 py-8">
            <Accordion aria-label="Conference Tracks" className="space-y-4 m-auto w-full">
              {tracks.map((track, index) => (
                <AccordionItem
                  key={index}
                  aria-label={track.title}
                  title={track.title}
                  className="bg-white shadow-lg rounded-lg p-2 px-4 m-2 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-teal-100 hover:to-blue-100"
                >
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ul className="list-inside list-disc space-y-2 pl-4 text-gray-800">
                      {track.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 20 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + topicIndex * 0.1, // Slight stagger for each topic
                          }}
                          className="text-lg"
                        >
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

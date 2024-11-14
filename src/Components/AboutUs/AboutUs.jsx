import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutus">
      <h1 className="text-center text-4xl font-bold mt-14 mb-14 text-cyan-600">About ICETCT</h1>
      <div className="flex flex-col sm:flex-row gap-10 px-4 sm:px-20">
        <div className="w-full sm:w-1/3 text-center sm:text-left">
          <div className="bg-gray-300 rounded-lg p-6">Photo</div>
        </div>
        <div className="w-full sm:w-2/3 text-gray-700 text-lg sm:text-xl sm:ml-10">
          The International Conference on Emerging Trends in Computational Techniques (ICETCT-2025), organized by the Department of Computer Science and Engineering – Artificial Intelligence (CSE-AI) and the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE-AIML) at KIET Group of Institutions, is a prestigious academic event scheduled for May 30-31, 2025. This international conference aims to provide a global platform for researchers, academicians, industry professionals, and students to present and discuss their innovative ideas and cutting-edge research in the rapidly evolving fields of computational techniques, artificial intelligence, and machine learning. ICETCT-2025 is dedicated to exploring the latest trends and developments in computational sciences, with a special focus on AI, machine learning, data science, and other emerging technologies. The conference will cover a wide range of topics, including deep learning, natural language processing, computer vision, big data analytics, IoT, Cyber Security, and AI applications across various industries. By providing an interdisciplinary platform, ICETCT-2025 aims to bring together thought leaders from academia and industry to share their insights and foster collaboration.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

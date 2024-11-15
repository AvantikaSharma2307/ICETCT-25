import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo Section */}
        <motion.h1
            initial={{ opacity : 1 , y :100 }}
            whileInView ={{ opacity : 1 , y: 0 }}
            transition ={{
              type: "spring",
              stiffness:100,
              damping: 10,
              delay:0.2,
            }}
          className="mb-8 md:mb-0"
        >
          <img src="image.png" alt="Logo" />
        </motion.h1>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="mb-8 md:mb-0"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#submission" className="text-gray-400 hover:text-white">
                Submissions
              </a>
            </li>
            <li>
              <a href="#registration" className="text-gray-400 hover:text-white">
                Registrations
              </a>
            </li>
            <li>
              <a href="#accomodation" className="text-gray-400 hover:text-white">
                Accommodation
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        >
          <h3 className="text-4xl font-semibold mb-4">ICETCT&nbsp;&nbsp;2025</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/kiet.edu" className="text-gray-400 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/Kiet_edu" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/kiet_edu/" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/school/kiet-group-of-institutions/posts/?feedView=all" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.hr
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-14"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center text-gray-500 mt-10"
      >
        &copy; {new Date().getFullYear()} KIET Group Of Institutions, Delhi NCR, Ghaziabad. <br />All Rights Reserved.
      </motion.div>
    </footer>
  );
}

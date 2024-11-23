import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";
import { motion } from "framer-motion";
import Image1 from "../../assets/440826975-removebg-preview.png";
import Image2 from "../../assets/784851290-removebg-preview.png";
import Image3 from "../../assets/831756760-removebg-preview.png";
import Image4 from "../../assets/941528379-removebg-preview.png";
import Image5 from "../../assets/logo-removebg-preview.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMobileMenu((prevState) => !prevState);

  return (
    <nav className={`${sticky ? "dark-nav" : ""} h-20`}>
      <motion.div
        className="kiet_logo"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        <div className="flex items-center justify-start md:gap-0 gap-2 leading-none">
     
          <img src="image.png" alt="Logo" className="lg:-ml-20 m-2 mr-1 w-42 h-10" />

          <img src={Image1} alt="Logo" className="hidden md:block lg:hidden xl:block w-16 h-16" />
          <img src={Image2} alt="Logo" className="hidden md:block lg:hidden xl:block w-16" />
          <img src={Image3} alt="Logo" className="hidden md:block lg:hidden xl:block w-16" />
          <img src={Image4} alt="Logo" className="hidden md:block lg:hidden xl:block w-16" />
          <img src={Image5} alt="Logo" className="hidden md:block lg:hidden xl:block w-14 h-12" />
        </div>
      </motion.div>


      <div className="hidden lg:flex justify-center space-x-6 mr-2 ">
        {["","Home", "Call For Papers", "Submission", "Registration", "Accommodation", "Speaker", "Committees", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            className="hover:text-orange-700 list-none m-2 hover:scale-105 hover:text-lg hover:font-bold transition-all duration-300"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  type: "spring", stiffness: 100, damping: 10, delay: index * 0.05 + 0.2 }}
          >
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
          </motion.li>
        ))}
      </div>

      <motion.ul
          className={`lg:hidden ${mobileMenu ? "mobile-menu" : "hidden"} min-w-[200px] w-2/5 sm:w-4/12 md:w-1/4 m-auto`}
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mobileMenu ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 0.3 }, // Increase opacity transition duration
            y: { type: "spring", stiffness: 100, damping: 25 },
          }}
        >
          {["Home", "Call For Papers", "Submission", "Registration", "Accommodation", "Speaker", "Committees", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="hover:text-orange-700 hover:scale-105 hover:font-bold transition-all duration-300 my-8 mx-4"
              initial={{ opacity: 0, scale: 0.5, x: 300 }}
              animate={{
                opacity: mobileMenu ? 1 : 0,
                scale: mobileMenu ? 1 : 0.5,
                x: mobileMenu ? 0 : 300,
              }}
              transition={{
                delay: index * 0.1 + 0.1, 
                duration: 0.1, 
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-base mx-4">
                {item}
              </a>
            </motion.li>
          ))}
      </motion.ul>

      <motion.div
        className="lg:hidden cursor-pointer z-10"
        onClick={toggleMenu}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        <AnimatedHamburgerButton isOpen={mobileMenu} />
      </motion.div>
    </nav>
  );
};

export default Navbar;

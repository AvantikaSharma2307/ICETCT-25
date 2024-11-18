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
       <div className=" flex items-center justify-start gap-2 leading-none">
           <img src="image.png" alt="Logo" className="w-32 h-8" />
             <img src={Image1} alt="Logo" className="w-16 h-16" />
             <img src={Image2} alt="Logo" className="w-16" />
             <img src={Image3} alt="Logo" className="w-16" />
             <img src={Image4} alt="Logo" className="w-16" />
             <img src={Image5} alt="Logo" className="w-14 h-12" />
          </div>

      </motion.div>

      <div className="hidden md:flex justify-center space-x-6 m-2 ">
        {["","Home", "Call For Papers", "Submission", "Registration", "Accomodation", "Speaker", "Committees", "Contact",""].map((item, index) => (
          <motion.li
            key={item}
            className="hover:text-orange-700 list-none m-2 hover:scale-105 hover:text-lg hover:font-bold transition-all duration-300"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  type: "spring", stiffness: 100, damping: 10, delay: index * 0.2 }}
          >
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
          </motion.li>
        ))}
      </div>

      <motion.ul
        className={`md:hidden ${mobileMenu ? "mobile-menu" : "hidden"}`}
        onClick={toggleMenu}
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: mobileMenu ? 1 : 0,
          y: mobileMenu ? 0 : -50,
        }}
        transition={{
          opacity: { duration: 0.3 },
          y: { type: "spring", stiffness: 50, damping: 25 },
        }}
      >
        {["Home", "Call For Papers", "Submission", "Registration", "Accomodation", "Speaker", "Committees", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            className="hover:text-orange-700 hover:scale-105 hover:font-bold transition-all duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: mobileMenu ? 1 : 0, y: mobileMenu ? 0 : -20 }}
            transition={{
              delay: index * 0.2, 
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="md:hidden cursor-pointer z-10"
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

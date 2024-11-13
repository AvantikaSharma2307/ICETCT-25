import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png"; 

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

    const toggleMenu = () => setMobileMenu(prevState => !prevState);

    return (
        <nav className={`${sticky ? "dark-nav" : ""} h-16`}>
            <div className="kiet_logo">
                <img src="image.png" alt="Logo" />
            </div>
            <ul className={mobileMenu ? "mobile-menu" : "mb-menu"}>
                <li className="hover:text-orange-700">
                    <a href="#home">Home</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#registration">Registration</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#speaker">Speaker</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#submission">Submission</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#callforpapers">Call For Papers</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#contact">Contact</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#commities">Commities</a>
                </li>
                <li className="hover:text-orange-700">
                    <a href="#accomodation">Accomodation</a>
                </li>
            </ul>
            <img
                src={menuIcon}
                alt="menu-icon"
                className="menu-icon"
                onClick={toggleMenu} 
            />
        </nav>
    );
};

export default Navbar;

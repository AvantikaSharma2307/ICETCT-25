import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png"; 

const Navbar = () => {
    // const [sticky, setSticky] = useState(false);
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
        <nav className="sticky dark-nav h-16">
            <div className="kiet_logo">
                <img src="image.png"></img>
            </div>
            <ul className={mobileMenu ? "mobile-menu" : "mb-menu"}>
                <li className="hover:text-orange-700">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/registration">Registration</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/speaker">Speaker</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/Submission">Submission</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/CallForPapers">Call For Papers</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/commities">Commities</Link>
                </li>
                <li className="hover:text-orange-700">
                    <Link to="/accomodation">Accomodation</Link>
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

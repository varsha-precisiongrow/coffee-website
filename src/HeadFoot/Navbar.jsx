

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const handleClose = () => setIsOpen(false);
  // 🔥 Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // show/hide navbar
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }
      // background change
      setScrolled(currentScroll > 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500   h-[100px] md:h-auto  ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${ scrolled ? "bg-white shadow-lg" : "bg-[#2c1712]"  }`}>
      <div className="max-w-[1400px] mx-auto px-6 py-1 flex justify-between items-center">
        {/* LOGO */}
        <img src="/Coffee_institute.webp" alt="logo" loading="lazy"
          className="h-20 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"/>
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 font-semibold text-sm md:text-lg">
          {[
            { name: "HOME", path: "/" },
             { name: "ABOUT", path: "/about" },
            { name: "OUR STORY", path: "/story" },
            { name: "BEANS", path: "/beans" },
            { name: "HEALTH", path: "/health" },
            { name: "SUSTAINABILITY", path: "/sustainability" },
            { name: "BLOG", path: "/blog" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
         <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `relative group transition ${
                isActive
                  ? scrolled
                    ? "text-[#6f4e37] font-bold"
                    : "text-[#a97c50] font-bold"
                  : scrolled
                  ? "text-[#3b2318]"
                  : "text-white"
              }`}>
            {({ isActive }) => (
              <>
                {item.name}
                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#a97c50] origin-left transform transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </li>
          ))}
        </ul>
        {/* MOBILE BUTTON */}
          {/* Toggle Button (Menu ↔ X) */}
      <button
          className={`lg:hidden z-[60] ${ scrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={26} />}
        </button>
      </div>
       {/* Mobile Sidebar */}
    <div className={`fixed top-22 right-0 h-full w-full bg-[#6f4e37] z-[99999]
      transform transition-transform duration-1000 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full" }`}>
      <ul className="flex flex-col gap-6 px-8 text-white font-semibold text-lg py-4  bg-[#6f4e37]">
        <li>
          <NavLink to="/" onClick={handleClose}>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleClose}> ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/story" onClick={handleClose}> OUR STORY</NavLink>
        </li>
        <li>
          <NavLink to="/beans" onClick={handleClose}>BEANS</NavLink>
        </li>
        <li>
          <NavLink to="/health" onClick={handleClose}>HEALTH</NavLink>
        </li>
        <li>
          <NavLink to="/sustainability" onClick={handleClose}>SUSTAINABILITY</NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={handleClose}>BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleClose}> CONTACT </NavLink>
        </li>
      </ul>
    </div>
          {/* Overlay */}
          {isOpen && (<div className="fixed inset-0  z-40" onClick={handleClose} ></div> )}
        </nav>
      );
    }

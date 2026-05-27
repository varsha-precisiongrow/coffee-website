import React from "react";
import footerBg from '../assets/bg-img/coffee-cup.jpg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <footer
  className="text-gray-300 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${footerBg})`,
  }}
>
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* <h2 className="text-lg md:text-xl tracking-widest text-white">
          JOIN OUR COFFEE COMMUNITY
          </h2> */}

          <h2 className="text-lg md:text-2xl font-bold tracking-widest text-[#d6b08c] uppercase relative inline-block">
            <span className="relative z-10">
              Join Our Coffee Community
            </span>

            {/* soft glow blur */}
            <span className="absolute inset-0 blur-md opacity-20 bg-[#6f4e37]"></span>
          </h2>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full md:w-72 px-4 py-2 bg-gray-800 text-white outline-none"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 px-5 py-2 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + Contact */}
        <div>
          <img src="/Coffee_institute.webp" alt="logo" className=" bg-white p-2 w-52 h-28 mb-6 rounded-xl" loading="lazy" />
          <p className="text-lg leading-6">

        From bean to brew, every cup tells a story of craftsmanship, culture, and passion for exceptional coffee.
          </p>
        
        </div>

        {/* Our Services */}
        <div>
          <h3 className="relative inline-block font-semibold mb-4 text-[#d6b08c] overflow-hidden">
          OUR ADDRESS

          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d6b08c]"></span>

          <span className="absolute bottom-0 left-[-40%] w-[30%] h-[2px] bg-[#6f4e37] animate-[slide_2s_linear_infinite]"></span>
        </h3>

          <ul className="space-y-1 text-lg">
            <li>Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710.</li>
            <h3 className="relative inline-block font-semibold mb-1 text-[#d6b08c] overflow-hidden">EMAIL
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d6b08c]"></span>
            <span className="absolute bottom-0 left-[-40%] w-[30%] h-[2px] bg-[#6f4e37] animate-[slide_2s_linear_infinite]"></span>
            </h3>
            <p className=" text-lg">
              <a href="mailto:info@coffeeinstitute.co.in" className="hover:text-[#d6b08c] transition">info@coffeeinstitute.co.in </a>
            </p>
          </ul>
            
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="relative inline-block font-semibold mb-4 text-[#d6b08c] overflow-hidden">QUICK LINKS
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d6b08c]"></span>
            <span className="absolute bottom-0 left-[-40%] w-[30%] h-[2px] bg-[#6f4e37] animate-[slide_2s_linear_infinite]"></span>
          </h3>
        <ul className="space-y-2 text-lg">

        <li>
          <Link
            to="/about"
            className="hover:text-[#c4a484] transition duration-300"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/beans"
            className="hover:text-[#c4a484] transition duration-300"
          >
            Beans
          </Link>
        </li>

        <li>
          <Link
            to="/health"
            className="hover:text-[#c4a484] transition duration-300"
          >
            Health
          </Link>
        </li>

        <li>
          <Link
            to="/story"
            className="hover:text-[#c4a484] transition duration-300"
          >
            Our Story
          </Link>
        </li>

        <li>
          <Link
            to="/sustainability"
            className="hover:text-[#c4a484] transition duration-300"
          >
            Sustainability
          </Link>
        </li>

      </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className=" relative inline-block font-semibold mb-4 text-[#d6b08c] overflow-hidden">OPENING HOURS
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d6b08c]"></span>
            <span className="absolute bottom-0 left-[-40%] w-[30%] h-[2px] bg-[#6f4e37] animate-[slide_2s_linear_infinite]"></span>
          </h3>
          <ul className="space-y-2 text-lg">
            <li>Mon - Sat : 9.30 Am - 6.30 Pm</li>
  
          </ul>
          
            <h3 className="relative inline-block font-semibold my-2 text-[#d6b08c] overflow-hidden">PHONE NO.
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d6b08c]"></span>
            <span className="absolute bottom-0 left-[-40%] w-[30%] h-[2px] bg-[#6f4e37] animate-[slide_2s_linear_infinite]"></span>
            </h3>
          <p className="mt-2 text-base">+91 8097283444</p>
          <p className="text-base">+91 224 8888888</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4b2e1f] text-center text-sm py-3 text-white">
        © 2026 Precision Grow Pvt. Ltd | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;




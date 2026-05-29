import React from "react";
import { motion } from "framer-motion";
import CoffeeHealthSection from "../Components/CoffeeHealthSection";
import CoffeeResearchLibrary from "../Components/CoffeeResearchLibrary";
import { Helmet } from "react-helmet-async";
import coffeeCup from "../assets/side-icon/coffee-cup-image2.png";
import coffee3bean from '../assets/side-icon/3Coffee-Bean.png'

const heading = "Health benefits of coffee";

export default function CoffeeBanner() {
  return (
    <>
      <Helmet>
        <title>Health Benefits of Coffee | Energy & Wellness</title>

        <meta
          name="description"
          content="Discover the science-backed health benefits of coffee for energy, focus, wellness, brain health, and daily performance."
        />

        <meta
          name="keywords"
          content="coffee health benefits, coffee and wellness, brain health coffee, energy coffee, healthy coffee"
        />

        <link
          rel="canonical"
          href="https://coffeeinstitute.co.in/health"
        />
      </Helmet>
      {/* ============================================================= banner section =============================================================== */}
      {/* Banner Section */}
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-96">      
        {/* Background Image */}
        <img src="two-coffee-cups-clicking.jpg" alt="Coffee Banner" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Heading */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <h1 className="flex flex-wrap text-white font-serif font-bold leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
              {heading.split("").map((letter, index) => (
                <motion.span
                  key={index} initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03, }} className="inline-block" >
                  {letter === " " ? "\u00A0" : letter} </motion.span>
              ))}
            </h1>
          </div>
        </div>
      </section>
{/* ====================================================================== coffee section =============================================================== */}
      {/* Health Content Section */}
      <section className="relative w-full bg-[#fdf8f3] py-14 px-4 sm:px-6 md:px-10 lg:px-20 pr-40 xl:pr-60 overflow-hidden">
         <motion.img src={coffee3bean} alt="Coffee Beans" loading="lazy" animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }} className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 w-40  object-contain z-10 pointer-events-none sepia hue-rotate-[330deg] saturate-[400%] brightness-75 mix-blend-multiply opacity-20" />
        {/* Animated Coffee Text */}
        <motion.h2 animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }}
          className=" hidden lg:block fixed right-12 bottom-52 text-7xl text-[#5a3b2e]  opacity-80  z-20 leading-none  pointer-events-none font-['Pacifico'] " > Coffee </motion.h2>
        {/* Coffee Cup Image */}
        <img  src={coffeeCup} alt="Coffee Cup" loading="lazy" className=" hidden lg:block fixed right-0 bottom-0 w-[240px] xl:w-[300px] object-contain pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#6f4e37] uppercase tracking-[3px] text-sm font-semibold mb-3"> Coffee & Wellness </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b2416] leading-tight mb-6"> More Than Just a Morning Drink </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
              Coffee is a naturally grown beverage made from coffee cherries that grow on trees. Loved for centuries across the world,
              coffee is now one of the most enjoyed and researched drinks globally. </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              Research from health experts and global studies suggests that coffee may support overall wellness by improving focus,
              boosting energy, and helping reduce the risk of several long-term health conditions.</p>
            {/* Quote Box */}
            <div className="bg-white border-l-4 border-[#6f4e37] p-5 rounded-xl shadow-md">
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                “Studies involving millions of people worldwide show that coffee can support cognitive health, physical performance,
                and long-term wellness. Moderate coffee consumption has been linked with healthier and longer lives.”</p>
              <h4 className="mt-4 text-[#3b2416] font-semibold text-sm sm:text-base"> — Farin Kamangar, MD, PhD </h4>
              <p className="text-gray-500 text-sm"> Morgan State University & NCA Medical Advisor </p>
            </div>
          </div>
          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-[#f1e4d8]">
              <div className="w-14 h-14 rounded-full bg-[#f6ece3] flex items-center justify-center text-2xl mb-4"> 🧠 </div>
              <h3 className="text-xl font-bold text-[#3b2416] mb-3"> Better Focus & Mood </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Coffee may help improve memory, concentration, alertness, and overall mood throughout the day.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-[#f1e4d8]">
              <div className="w-14 h-14 rounded-full bg-[#f6ece3] flex items-center justify-center text-2xl mb-4"> ❤️ </div>
              <h3 className="text-xl font-bold text-[#3b2416] mb-3"> Supports Heart Health </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Research links regular coffee consumption with a lower risk of heart disease, type 2 diabetes, and other chronic conditions. </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-[#f1e4d8]">
              <div className="w-14 h-14 rounded-full bg-[#f6ece3] flex items-center justify-center text-2xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-[#3b2416] mb-3">Increased Energy</h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base"> Coffee naturally boosts energy levels and endurance, helping people stay active and productive. </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 border border-[#f1e4d8]">
              <div className="w-14 h-14 rounded-full bg-[#f6ece3] flex items-center justify-center text-2xl mb-4"> 🌿</div>
              <h3 className="text-xl font-bold text-[#3b2416] mb-3">Healthier Lifestyle</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Many studies suggest coffee drinkers may enjoy longer, healthier lives with improved daily wellness. </p>
            </div>
          </div>
        </div>
      </section>
     {/* ======================================================================  section =============================================================== */}
      <CoffeeHealthSection />
     {/* ====================================================================== banner section =============================================================== */}
      <CoffeeResearchLibrary />
     {/* ====================================================================== banner section =============================================================== */}
   
    </>
  );
}
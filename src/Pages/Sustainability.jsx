
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SusSection2 from "../Components/SusSection2";
import sustainability from "../assets/sustainability/sustainability_banner.webp";
import stem from "../assets/sustainability/coffee_stem.webp";
import SusSection3 from "../Components/SusSection3";
import CoffeeGrow from '../Components/SustainabilityComp/CoffeeGrow'
import SusSection6 from '../Components/SustainabilityComp/SusSection6' 
import { Helmet } from 'react-helmet-async';


export default function Sustainability() {

  const { scrollY } = useScroll();
const text = "Committed to a Greener Future";
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
       < Helmet>
        <title>Sustainable Coffee & Ethical Coffee Farming</title>

        <meta
          name="description"
          content="Learn how sustainable coffee farming, ethical sourcing, and ecofriendly practices support farmers and the planet."
        />

        <meta
          name="keywords"
          content="sustainable coffee, ethical coffee, eco-friendly coffee, coffee farming, fair trade coffee"
        />
        <link rel="canonical" href="https://coffeeinstitute.co.in/sustainability" />
     </Helmet>

    <div className="relative w-full">

      {/* ==================================================== HERO =========================================================================== */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale, y, opacity }}>
          <img src={sustainability} className="w-full h-full object-cover" alt="sustainability" loading="lazy"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </motion.div>
      <div className="relative z-10 h-full flex items-center px-6 lg:px-16 leading-relaxed ">
        <div className="max-w-4xl text-white">
         <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3">
                {word.split("").map((letter, letterIndex) => (
                    <motion.span key={letterIndex}
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.6, delay: wordIndex * 0.3 + letterIndex * 0.05,
                      ease: "easeOut", }}className="inline-block"> {letter}
                     </motion.span>
                ))}  
              </span>
            ))}
          </motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              At Coffee Institute, sustainability is at the heart of every cup.From ethically sourced beans to eco-friendly packaging, we are
              committed to creating a better future for coffee lovers and the planet.</motion.p>
        </div>
      </div>
        <motion.div onClick={handleScroll}
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl cursor-pointer">  ↓ </motion.div>
      </section>
      {/* =================---------------------------------------- WRAPPER (IMPORTANT FIX) --------------------------------------------------------================= */}
      <div className="relative w-full">
        {/* 🌿 STEM (NOW STABLE ON ALL SCREENS) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-50 pointer-events-none">
          <img src={stem} alt="coffee-stem" loading="lazy" className="w-32 md:w-96 drop-shadow-xl"/>
        </div>
       {/* =================-------------------------------------- SECTION 2  --------------------------------------------------------================= */}
        <SusSection2 />
       {/* =================-------------------------------------- SECTION 3 --------------------------------------------------------================= */}
        <SusSection3 />
       {/* =================-------------------------------------- SECTION 4 --------------------------------------------------------================= */}   
       <CoffeeGrow />    
       {/* =================-------------------------------------- SECTION 5 --------------------------------------------------------================= */}   
       <SusSection6 />
       {/* =================-------------------------------------- SECTION 6 --------------------------------------------------------================= */}   
 
      </div>
    </div>
    </>
  );
}

import React from "react";
import cup from "../assets/home/coffee-cup.webp";
import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import leaf from "../assets/home/coffee_leaf.webp";
import redline from '../assets/side-icon/red-line.webp'
import bababudan from '../assets/home/baba-budan2.webp'
import BudFormation from "../Components/BudFormation";
import CoffeeSpecies from "../Components/CoffeeSpecies";
import CoffeeFarming from "../Components/CoffeeFarming";
import { Helmet } from 'react-helmet-async';

function Home() {
    const ref = useRef(null);

  // scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // image zoom animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.3]);

  // text opacity (step reveal)
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  return (
    <>
     <Helmet>
        <title>Premium Coffee Beans & Brewing Guide | Coffee Hub</title>
        <meta
          name="description"
          content="Discover coffee beans, brewing techniques, health benefits, sustainability, and coffee culture at Coffee Institute."
        />
        <meta
          name="keywords"
          content="coffee institute, coffee beans, coffee brewing, coffee health benefits, sustainability, coffee guide"
        />
        <link rel="canonical" href="https://coffeeinstitute.co.in/" />
      </Helmet>
    {/* ================= HERO SECTION ================= */}
    <section className="relative min-h-screen flex items-center bg-[#f5f2ec] bg-[url('/bg-home-banner.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">     
      {/* RIGHT SIDE SKETCH BACKGROUND */}
      <div className="absolute right-0 top-0 w-1/2 h-full " />
      {/* LEFT BOTTOM LEAF */}
      <motion.img src={leaf} alt="leaf" loading="lazy" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-40 md:w-56 lg:w-72 opacity-70 pointer-events-none" />
      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">       
        {/* LEFT CONTENT */}
        <div className="pl-10 sm:pl-0">         
         <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
           className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-wide pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40"  >COFFEE </motion.h1>
          <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-xl md:text-3xl font-semibold text-gray-700 leading-snug italic"> CRAFTED FOR COFFEE {" "}
           <span className="relative inline-block text-[#4B2E2B] font-extrabold uppercase italic">LOVERS
            <img src={redline} alt="brush" loading="lazy" className="absolute left-1/2 top-full -translate-x-1/2 -mt-2 w-[180px] md:w-[220px] pointer-events-none" />
          </span>
        </motion.h2>
       <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-gray-700 leading-snug text-lg ">Discover the rich aroma, bold flavors, and timeless artistry behind every perfect cup.
          From bean to brew, we bring passionate coffee lovers closer to the true craft of coffee.</motion.p>
          {/* BUTTONS */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16 flex gap-4" >            
          <a href="https://youtu.be/GGJCEsCCvbg?si=ZIAPglLtNWyPRX6D" target="_blank"  rel="noopener noreferrer"  className="inline-block"  >
           <button className="relative px-2 py-4 font-semibold text-white rounded-xl overflow-hidden group ">
         {/* Animated Coffee Gradient Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#3b2f2f] via-[#6f4e37] to-[#3b2f2f] bg-[length:200%_200%] animate-[coffeeMove_4s_ease_infinite]"></span>
          {/* Glow / Blur Layer */}
          <span className="absolute inset-0 opacity-40 blur-lg bg-gradient-to-r from-[#6f4e37] to-[#3b2f2f]"></span>
          {/* Hover Shine Effect */}
          <span className="absolute -left-full top-0 w-full h-full bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700"></span>
          {/* Text */}
          <span className="relative z-10 tracking-wide">
            VIEW DEMOS
          </span>
         </button>
          </a>
           <button className="relative px-4 py-4 font-semibold text-white rounded-xl overflow-hidden group bg-[#4B2E2B]">
          {/* Animated Coffee Glow Background */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#3b2f2f] via-[#6f4e37] to-[#3b2f2f] bg-[length:200%_200%] animate-[coffeeMove_4s_ease_infinite]"></span>
          {/* Hover Light Sweep */}
          <span className="absolute -left-full top-0 w-full h-full bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700"></span>
         {/* Text */}
          <span className="relative z-10 tracking-wide">BREW YOUR ORDER </span>
         </button>
          </motion.div>
          {/* STATS */}
          <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex gap-10 text-gray-800" >        
          </motion.div>
        </div>
        {/* RIGHT IMAGE */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center relative" >
          <img src={cup} alt="Coffee" loading="lazy" className="w-[280px] md:w-[400px] lg:w-[500px] object-contain animate-[float_8s_ease-in-out_infinite]" />
        </motion.div>
      </div>
    </section>

    {/* ====================================================================== ABOUT SECTION ==================================================================== */}
 
{/* <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[url('/bg-1.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative "> */}
{/* <img src="bababudan" alt="bababudan" loading="lazy" className="absolute right-0 bottom-0 h-[300px] md:h-[450px] lg:h-[550px] object-contain opacity-90 pointer-events-none
    z-0" /> */}

    <section className="relative overflow-hidden bg-[url('/bg-1.webp')] bg-cover bg-center py-16 px-6">
      <img src={bababudan} alt="Baba Budan" className="absolute -right-64 bottom-0 h-[400px] md:h-[500px] lg:h-[650px] object-contain z-0 hidden xl:block" />
      <div className="relative z-10 max-w-6xl lg:pl-20 pl-0">     
        <motion.h3 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#d4a373] text-center leading-snug" >
          MYSTICAL BEGINNING OF COFFEE IN SOUTH INDIA </motion.h3>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="h-1 bg-[#d4a373] mx-auto 
        mt-4 rounded-full" />      
        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="lg:col-span-4 flex justify-center " >        
        </motion.div>

        <motion.div className="text-white text-sm md:text-base lg:text-lg leading-relaxed space-y-5 text-justify lg:col-span-8" >
         <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            Coffee has an almost 400-year history in India, dating back to the 17th century. Around 1670, coffee made its first appearance in India.      
            <span className="font-semibold text-[#d4a373]"> BABA BUDAN </span>, a guide who took a pilgrimage to Islamic holy sites, is credited with bringing the history of coffee to India.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} >
            According to legend, an Indian traveller to Makkah, Baba Budan, returned to India with seven mystical raw coffee beans hidden in his beard from Yemen, a country located along the Arabian coast. He smuggled even beans from Yemen to India (it was illegal to transport) At the time, he brought coffee seeds from Arabia and planted them in the Karnataka Chandragiri hills.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} >
            Coffee became increasingly popular in this region, filling the air with blooms and fragrance. Though the origin is unknown, it is thought to have originated in India, near the Chandragiri highlands of the Chikmagalur district. This is where India's coffee industry began, and it is now part of the state of Karnataka.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} >
            Coffee soon flourished in this region, filling the surroundings with its blooms and fragrance. Today, the Chikmagalur region is considered
            the foundation of India’s coffee industry.
          </motion.p>
        </motion.div>
        </div>
      </div>
    </section>

   {/* --------------------------------------------------------------section 2 budformation-------------------------------------------- */}
    <BudFormation />
   {/* --------------------------------------------------------------section 3 CoffeeSpecies-------------------------------------------- */}
    <CoffeeSpecies />
   {/* --------------------------------------------------------------section 4 CoffeeFarming-------------------------------------------- */}
    <CoffeeFarming />
   
    </>
  );
}

export default Home;

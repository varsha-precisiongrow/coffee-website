import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section4 from '../Components/Story/Section4'
import HeritageSlider from '../Components/Story/HeritageSlider'
import Section6 from '../Components/Story/Section6'
import coffee_ripe2 from '../assets/story/coffee_ripe2.webp'
import { Helmet } from 'react-helmet-async';
import coffeecup from '../assets/side-icon/coffee-cup.png'
import coffeeCup from "../assets/side-icon/coffee-cup-image2.png";

const OurStory = () => {
  const { scrollY } = useScroll();
  
  // Scroll animations
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const y = useTransform(scrollY, [0, 600], [0, 60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.9]);

  const title = "COFFEE";
  const subtitle = "Home to a treasure brewing for centuries";

const sectionScale = useTransform(scrollY, [0, 800], [1.15, 1]);
const sectionY = useTransform(scrollY, [0, 800], [40, 0]);

  const handleScroll = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
        < Helmet>
        <title>Our Coffee Journey | Heritage & Specialty Coffee</title>

        <meta
          name="description"
          content="Explore our coffee journey from mountain-grown beans to expertly crafted specialty coffee with rich aroma and flavor."
        />

        <meta
          name="keywords"
          content="specialty coffee beans, mountain coffee, arabica coffee, coffee roasting, coffee heritage"
        />
        <link rel="canonical" href="https://coffeeinstitute.co.in/story" />
     </Helmet>

   <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden bg-[#2c1712] bg-[url('/bg-home-banner.webp')] bg-cover bg-center">     
      <motion.img animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}src={coffeecup} alt="coffeecup" loading="lazy" 
      className="hidden lg:block  absolute bottom-4 left-0 opacity-50" />
      <motion.div style={{ scale, y, opacity }} className="absolute inset-0">        
      </motion.div>
      {/* Floating Particles (left side like your design) */}
      <div className="absolute left-6 md:left-10 top-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
      <div className="absolute left-10 md:left-16 top-1/2 w-4 h-4 border border-white/30 rounded-full"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        {/* Top Icon */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="text-[#c8a96a] text-2xl md:text-7xl mb-4 pt-52" > ✦ </motion.div>
        {/* Small Heading */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-300 mb-4"> The Story Of </motion.p>
        {/* Animated Title */}
        <h1 className="text-white font-semibold tracking-widest leading-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {title.split("").map((letter, index) => ( <motion.span  key={index} initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{duration: 0.5, delay: index * 0.05, }} className="inline-block" >
          {letter === " " ? "\u00A0" : letter} </motion.span> ))}
        </h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-300 text-xs sm:text-sm md:text-base tracking-wide max-w-lg opacity-1 visibility-inherit uppercase" >
          {subtitle}
       </motion.p>
        {/* Bottom Illustration */}
        <motion.img src={coffee_ripe2} alt="coffee art" loading="lazy" animate={{ rotate: 360, }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear", }} className="mt-10 w-28 sm:w-36 md:w-96 lg:w-88  object-cover"/>
      </div>
    </section>

    {/* --------------------------------------------------------------------- Second Section 3------------------------------------------------------------------- */}     
    <section className="relative w-full h-[70vh] overflow-hidden"> 
        {/* IMPORTANT WRAPPER */}
        <div className="absolute inset-0 overflow-hidden">    
        <motion.div style={{ scale: sectionScale, y: sectionY }} className="absolute inset-0 bg-[url('/section_img.webp')] bg-cover bg-center" /> 
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
        {/* Coffee Text */}
        <motion.h2 animate={{ y: [0, -20, 0] }}  transition={{duration: 3, repeat: Infinity,  ease: "easeInOut", }} className=" absolute text-center text-7xl text-[#b08968] opacity-90 z-20 leading-none pointer-events-none font-['Pacifico'] ">Coffee</motion.h2>
        {/* Coffee Cup Image */}
        <img src={coffeeCup}  alt="Coffee Cup" loading="lazy" className="  w-[280px] xl:w-[360px] object-contain z-10 pointer-events-none " />
        </div>
        </div>
    </section>
    {/* --------------------------------------------------------------------- Second Section 3------------------------------------------------------------------- */}    
    <section className="w-full bg-[#cdb9a6] relative">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-32">
          <img src="https://api.ecrop.co/assets/precisiongrow/cdnassets/coffe4.webp" alt="ecropmachine-eith-coffee" loading="lazy" className="absolute right-0 bottom-0 w-96 h-96 hidden lg:block" />
          <p className=" text-[#2d221c] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose max-w-xl md:max-w-2xl lg:max-w-4xl font-normal ">
          At the Coffee Institute, we celebrate coffee as a craft rooted in tradition and refined through science. From farm to cup, we explore the journey of Arabica with precision, care, and respect for its origins.
          Blending global expertise with heritage techniques, we train the next generation of coffee professionals to master roasting, brewing, and sensory excellence where every cup reflects knowledge, culture, and quality.
          </p>
        </div>
    </section>
       {/* --------------------------------------------------------------------- Second Section 4------------------------------------------------------------------- */} 

       <Section4 />
       <HeritageSlider />
       <Section6 />

      </>
  );
};

export default OurStory;
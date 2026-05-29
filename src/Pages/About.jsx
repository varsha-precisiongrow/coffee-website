
import React, { useEffect, useState } from "react";
import sideimg from '../assets/about/about_sideimage.webp';
import CoffeeRegions from '../Components/AboutComponents/CoffeeRegions'
import LifeCycleOfCoffee from '../Components/AboutComponents/LifeCycleOfCoffee'
import Mission from "../Components/AboutComponents/Mission";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import coffee3bean from '../assets/side-icon/3Coffee-Bean.png'

const About = () => {
  const bannercoffee =
    "https://api.ecrop.co/assets/ecrop/img/coffee-banner.webp";

  const treeImage =
    "https://api.ecrop.co/assets/ecrop/img/sunsoil.webp";

  const leafImage =
    "https://api.ecrop.co/assets/ecrop/img/coffeeleaf.webp";

  const title = "What is coffee?";
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>

        < Helmet>
       
              <title>About Us | Coffee Knowledge & Quality Excellence</title>

              <meta
                name="description"
                content="Learn about our passion for coffee, sustainable farming, quality education, and empowering coffee producers across the global coffee industry."
              />

              <meta
                name="keywords"
                content="coffee quality, specialty coffee, coffee education, sustainable coffee farming, coffee producers"
              />

          <link rel="canonical" href="https://coffeeinstitute.co.in/about" />
         </Helmet>

      {/* ======================================================= HERO SECTION ================================================================== */}
      <section className="relative h-[650px] md:h-[700px] w-full font-serif overflow-hidden">
        <motion.img src={coffee3bean} alt="Coffee Beans" loading="lazy" animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ rotate: { repeat: Infinity, duration: 12, ease: "linear" }, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }} className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-40  object-contain z-10 pointer-events-none sepia hue-rotate-[330deg] saturate-[400%] brightness-75 mix-blend-multiply opacity-20" />
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center scale-100 transition-transform duration-[20000ms]"
          style={{ backgroundImage: `url(${bannercoffee})` }}/>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 md:px-10 text-white">
          {/* Animated Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center">
            {title.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ease-out ${
                  show
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          {/* Paragraph */}
          <p className={`text-base sm:text-lg md:text-2xl max-w-5xl font-medium italic leading-relaxed transition-all duration-1000 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} >
            Coffee is more than just a drink it’s the preferred choice for those who appreciate refined taste and rich aroma.  
            Have you ever wondered what coffee truly is? It begins as seeds hidden inside coffee cherries, grown in more than 40 countries worldwide. After harvesting, the seeds are processed, roasted, and ground to create the beverage we enjoy every day.
          </p>
        </div>     
      </section>
      {/* ====================================================== COFFEE TREE SECTION ========================================================================= */}
        <div className="absolute flex justify-center -mt-22 z-30 pointer-events-none left-1/2 -translate-x-1/2 z-20">
          <img src={leafImage} alt="Coffee Leaf" loading="lazy"  className="w-40 sm:w-52 md:w-72" />
        </div>
      {/* ============================================================= section 2 ======================================================================= */}
         <section className="w-full bg-[#f7f3ee] pt-16 md:pt-28 px-4 md:px-10 font-serif relative">
          {/* LEFT IMAGE ANIMATION */}
          <motion.div 
            className="hidden lg:block absolute left-0 bottom-0"
            initial={{ opacity: 0, x: -80, scale: 1.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} >
            <img src={sideimg} alt="Coffee Tree Left" loading="lazy" className="h-[65vh] w-full object-cover" />
          </motion.div>
          {/* Content Wrapper */}
          <div className="max-w-6xl ml-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative pb-10">
            {/* TEXT (LEFT SLIDE) */}
            <motion.div 
              className="w-full md:w-1/2 text-[#3b2318] space-y-5" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
              viewport={{ once: true }}>
              {/* Heading */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#2c1712]"
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }} >
                What is coffee made of? Meet the coffee tree.
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }} >
                Coffee trees come in many forms from small shrubs to tall trees. If not pruned, they can grow up to 30 feet (9 meters), showing their natural strength and adaptability.
              </motion.p>
              <motion.p 
                className="text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }} >
                Their leaves are thick, glossy, and veined, ranging from 1 to 16 inches in size. They may appear in shades of green, yellow, or purple, though dark green is most common.
              </motion.p>
              <motion.p className="text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }} >
                Leaves grow in opposite pairs along the branches, where coffee cherries develop. On average, one coffee tree produces around 10 pounds of cherries per year, resulting in about 2 pounds of green coffee beans.
              </motion.p>
            </motion.div>
            {/* RIGHT IMAGE (ZOOM + SLIDE) */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} >
              <motion.img
                src={treeImage}
                alt="Coffee Tree" loading="lazy"
                className="w-full h-[260px] md:h-[420px] object-cover rounded-tr-[25%] rounded-bl-[25%] shadow-lg border-8 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }} />
            </motion.div>
          </div>
        </section>
      {/* ============================================================= section 3 ======================================================================= */}
         <Mission />
      {/* ============================================================= section 3 ======================================================================= */}
       <CoffeeRegions />     
      {/* ============================================================= section 3 ======================================================================= */}
      <LifeCycleOfCoffee />
    </>
  );
};

export default About;
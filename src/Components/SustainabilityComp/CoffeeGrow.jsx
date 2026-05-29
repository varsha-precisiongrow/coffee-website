import React from "react";
import { motion } from "framer-motion";

const CoffeeGrow = () => {

  // text animation
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 }
    }
  };
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/Coffee_Hills2.webp')", 
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      {/* overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 md:px-10 lg:px-20 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT EMPTY (for spacing on desktop) */}
        <div className="hidden md:block"></div>
        {/* RIGHT CONTENT */}
        <motion.div   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className=" w-full bg-[#f4efe9] backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl " >
          <motion.h4
            className="text-3xl md:text-4xl font-bold text-[#3b2318] mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
           Growing coffee in a changing climate
          </motion.h4>
          <motion.p 
            className="text-base md:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }} >
           Most coffee is grown by farmers on small plots of land. After harvest, the unroasted green coffee beans are collected and transported together, where they are sorted based on size and quality. Beans from multiple farms are then combined, packed according to customer requirements, and exported worldwide.
          </motion.p>
          <motion.p 
            className="text-base md:text-lg  leading-relaxed mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}>
           For many farmers, coffee is more than a crop it is a livelihood and a cornerstone of local economies. In regions where alternative opportunities are scarce, communities depend heavily on coffee production. However, coffee trees are highly sensitive to climate conditions, making them increasingly vulnerable to the effects of climate change.
          </motion.p>
            <motion.p 
            className="text-base md:text-lg  leading-relaxed mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }} >
           Many coffee-producing countries have limited resources to support farmers in adopting modern agricultural practices or responding to climate challenges. Unlike regions such as North America and Europe, access to support systems like crop insurance is often lacking. Farmers may also face additional obstacles, including poor infrastructure, limited financing options, restricted access to public services, and security concerns.
          </motion.p>   
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeGrow;
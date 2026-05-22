
 import React from "react";
import rightimg from '../../assets/about/about_sideimage1.webp'
import { motion } from "framer-motion";

const Mission = () => {

  // reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const zoomImg = {
    hidden: { scale: 1.2, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 1.2 } }
  };

  return (
    <section className="bg-gradient-to-r from-[#f5e6d3] via-white to-[#f5e6d3] text-gray-800 py-16 px-6 relative overflow-hidden">

        <motion.h3 animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden lg:block absolute right-5 top-40 -translate-y-1/2 text-7xl xl:text-[180px]  uppercase tracking-[10px] text-transparent leading-[0.9] z-10 pointer-events-none select-none" style={{ WebkitTextStroke: "1px #c8a46b", fontFamily: "Arial Black, sans-serif" }}>
  COFFEE
</motion.h3>

      {/* IMAGE ZOOM ANIMATION */}
      <motion.div 
        className="hidden lg:block absolute right-0 bottom-0"
        variants={zoomImg}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.img
          src={rightimg}
          alt="Coffee Tree Left" loading="lazy"
          className="h-[65vh] w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <div className="max-w-7xl space-y-5">
        
        {/* Mission */}
        <motion.div 
          data-aos="fade-up"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto mb-6">
            <motion.h3
              className="text-3xl font-bold text-[#3b2318]"
              whileHover={{ scale: 1.05 }}
            >
              Mission
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "110px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-[#d4a373] mt-3 rounded-full"
            />
          </div>

          <motion.p 
            className="max-w-5xl mx-auto text-lg leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our mission is to enhance the quality of coffee while improving the
            lives of the people who produce it.
          </motion.p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          data-aos="fade-up" 
          data-aos-delay="100"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto mb-6">
            <motion.h3
              className="text-3xl font-bold text-[#3b2318]"
              whileHover={{ scale: 1.05 }}
            >
              Vision
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "90px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-[#d4a373] mt-3 rounded-full"
            />
          </div>

          <div className="max-w-5xl mx-auto space-y-4 text-lg leading-relaxed">
            <motion.p
              whileInView={{ opacity: [0, 1], x: [-30, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              We envision an education-driven system that creates self-sufficient,
              thriving, and sustainable coffee communities. By promoting a shared
              language of coffee and applying the best scientific practices across
              the entire value chain, we aim to elevate both quality and opportunity.
            </motion.p>

            <motion.p
              whileInView={{ opacity: [0, 1], x: [30, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              We strive for a future where producers live better lives, receive
              fair value for their work, and are recognized and respected in the
              global market.
            </motion.p>
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div 
          data-aos="fade-up" 
          data-aos-delay="200"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto text-center mb-10">
            <motion.h3
              className="text-3xl font-bold text-[#3b2318]"
              whileHover={{ scale: 1.05 }}
            >
              What We Do
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "140px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-[#d4a373] mx-auto mt-4 rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <motion.div 
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition border-l-2 border-b-2 border-[#3b2318]"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-lg leading-relaxed">
                Through education and the development of a strong global network,
                we help reduce risk, expand opportunities, and transform the
                specialty coffee market for the benefit of producers.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition border-l-2 border-b-2 border-[#3b2318]"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ul className="space-y-3 text-lg">
                <li>✔ Support a global network of coffee professionals</li>
                <li>✔ Provide education across the value chain</li>
                <li>✔ Improve quality and market value</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition border-l-2 border-b-2 border-[#3b2318]"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ul className="space-y-3 text-lg">
                <li>✔ Empower producers through knowledge</li>
                <li>✔ Strengthen global connections</li>
                <li>✔ Create sustainable opportunities</li>
              </ul>
            </motion.div>

          </div>
        </motion.div>

        {/* About Organization */}
        <motion.div 
          data-aos="fade-up" 
          data-aos-delay="300"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto mb-6">
            <motion.h4 
              className="text-3xl font-bold text-[#3b2318]"
              whileHover={{ scale: 1.05 }}
            >
              About the Organization
            </motion.h4>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-[#d4a373] mt-4 rounded-full"
            />
          </div>

          <motion.p 
            className="max-w-5xl mx-auto text-lg leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Coffee Quality Institute is an independent 501(c)(3) nonprofit
            organization dedicated to advancing coffee quality and supporting
            the people behind it.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default Mission;
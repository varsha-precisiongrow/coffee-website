import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaChartLine } from "react-icons/fa";

const SusSection6 = () => {

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
   <section className="w-full relative py-16 md:py-24 px-4 md:px-10 lg:px-20 bg-[#f4efe9] bg-[url('BG_coffee.webp')] bg-cover bg-center md:bg-fixed">
        {/* CONTENT */}
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <motion.h5 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-[#3b2318] uppercase" > Sustainability </motion.h5>
          {/* SUBTEXT */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" transition={{ delay: 0.2 }} viewport={{ once: true }}
            className="max-w-5xl mx-auto text-base md:text-xl leading-relaxed mb-12 text-gray-900">
           Sustainability refers to the ability to meet the needs of the present without compromising the ability of future generations to meet their own needs. It encompasses environmental, social, and economic aspects, often referred to as the "three pillars" of sustainability.
          </motion.p>
          {/* CARDS */}
          <motion.div  variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 ">
            {/* CARD 1 */}
            <motion.div  variants={fadeUp}  whileHover={{ scale: 1.05 }} className="p-8 text-center border-r border-gray-300 hover:bg-white hover:text-[#3b2318] transition duration-500" >
              <FaLeaf className="text-4xl mx-auto mb-4" />
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-3">
                Environmental Sustainability
              </h6>
              <p className="text-base leading-relaxed">
                Protecting natural resources by reducing waste, conserving energy, and using eco-friendly solutions to preserve ecosystems.
              </p>
            </motion.div>
            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center border-r border-gray-300 hover:bg-white hover:text-[#3b2318] transition duration-500">
              <FaUsers className="text-4xl mx-auto mb-4" />
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl font-semibold mb-3">
                Social Sustainability
              </h6>
              <p className="text-base leading-relaxed">
                Building fair and inclusive communities with equal opportunities, respect, and improved quality of life for all.
              </p>
            </motion.div>
            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center hover:bg-white hover:text-[#3b2318] transition duration-500" >
              <FaChartLine className="text-4xl mx-auto mb-4" />
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-3">
                Economic Sustainability
              </h6>
              <p className="text-base leading-relaxed">
                Supporting long-term growth through responsible resource use, stable economies, and reduced inequality.
              </p>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
};

export default SusSection6;
import React from "react";
import { motion } from "framer-motion";
const researchLinks = [
  "Coffee and cognitive performance studies",
  "Research on coffee and reduced depression risk",
  "Studies linking coffee with heart health",
  "Coffee and type 2 diabetes research",
  "Sports nutrition and coffee performance studies",
  "Coffee and longevity meta-analysis",
];
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  show: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
    },
  }),
};
const CoffeeHealthSection = () => {
  return (
    <section className="w-full bg-[#fdf8f3] px-4 sm:px-6 md:px-10 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p variants={fadeUp} initial="hidden"  whileInView="show"  viewport={{ once: true }}  custom={1}  className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-7xl mx-auto">
            Coffee is more than just a comforting daily drink. Backed by years of scientific research, coffee has been associated with improved brain
            function, increased energy, reduced risk of chronic diseases, and overall healthier living. </motion.p>
        </div>
        {/* Science Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} >
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}  custom={3}
              className="uppercase tracking-[3px] text-[#8b5e3c] text-sm font-semibold mb-3" >
              Backed By Research
            </motion.p>
            <motion.h4 variants={fadeUp} initial="hidden"  whileInView="show" viewport={{ once: true }}  custom={4} className="text-3xl sm:text-4xl font-bold text-[#3b2416] 
              leading-tight mb-6" >The Science Behind Coffee Benefits
            </motion.h4>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5} className="text-gray-600 leading-relaxed text-base sm:text-lg mb-5">
              Coffee contains naturally occurring compounds including caffeine, antioxidants, and anti-inflammatory elements that may support both mental and physical wellness.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={6} className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Research from global health organizations and scientific studies continues to show positive associations between moderate coffee consumption and healthier living.
            </motion.p>
          </motion.div>
          {/* Right */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={7} className="bg-white rounded-3xl p-8 shadow-xl border 
            border-[#f1e4d8]" >
            <motion.h5  variants={fadeUp}  initial="hidden" whileInView="show"  viewport={{ once: true }}  custom={8} className="text-2xl font-bold text-[#3b2416] mb-6" >
              Featured Research Topics
            </motion.h5>
            <div className="space-y-4">
              {researchLinks.map((item, index) => (
                <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index + 9} whileHover={{ x: 8 }}
                  className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-none">
                  {/* Animated Number Icon */}
                  <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={index + 1}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                    }}
                    className="w-10 h-10 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#8b5e3c] font-bold shadow-md"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Animated Text */}
                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={index + 10}
                    className="text-gray-700 leading-relaxed"
                  >
                    {item}
                  </motion.p>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={16}
          whileHover={{ scale: 1.01 }}
          className="mt-20 bg-[#3b2416] rounded-[30px] p-8 sm:p-12 text-center" >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={17}
            className="text-white italic text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
            “A growing body of research suggests that moderate coffee consumption
            may support cognitive health, physical performance, and overall
            wellness — helping people lead healthier and more active lives.”
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={18}
            className="mt-6">
            <motion.h6
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={19}
              className="text-[#f0d6bf] font-semibold text-lg" >
              Coffee Health Research Insights
            </motion.h6>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={20}
              className="text-gray-300 text-sm mt-1">
              Based on findings from global scientific studies
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={21}
          className="mt-10 text-center mb-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={22}
            className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto" >
            The information provided is for general educational purposes only and
            should not replace professional medical advice. Always consult your
            healthcare provider regarding your personal health and nutrition needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeHealthSection;
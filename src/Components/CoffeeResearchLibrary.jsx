import React from "react";
import { motion } from "framer-motion";

const researchTopics = [
  {
    title: "Brain Health",
    desc: "Research suggests coffee may support memory, focus, cognition, and emotional well-being.",
    icon: "🧠",
  },
  {
    title: "Heart & Wellness",
    desc: "Many studies link coffee consumption with better cardiovascular and metabolic health.",
    icon: "❤️",
  },
  {
    title: "Energy & Performance",
    desc: "Coffee may help improve energy levels, endurance, and physical performance.",
    icon: "⚡",
  },
  {
    title: "Longevity",
    desc: "Scientific evidence suggests coffee drinkers may enjoy healthier and longer lives.",
    icon: "🌿",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
    },
  }),
};

const CoffeeResearchLibrary = () => {

  return (
    <section className="w-full bg-[#fdf8f3] py-8 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="text-center mb-16">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="uppercase tracking-[4px] text-[#8b5e3c] text-sm font-semibold mb-3"
          >
            Research Library
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b2416] leading-tight max-w-7xl mx-auto"
          >
            Scientific Research On Coffee & Health
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-7xl mx-auto"
          >
            Independent researchers around the world continue to study coffee and
            its impact on overall health. Hundreds of peer-reviewed studies are
            published every year exploring the relationship between coffee,
            wellness, energy, and longevity.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
            className="relative group overflow-hidden rounded-[30px]"
          >
            <img
              src="https://www.aboutcoffee.org/wp-content/uploads/2024/10/woman-with-coffee-and-laptop-in-papasan-chair-635x520.jpg"
              alt="Coffee Research" loading="lazy"
              className="w-full h-[350px] sm:h-[450px] lg:h-[750px] object-cover rounded-[30px] group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 rounded-[30px]"></div>

            {/* Floating Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl"
            >
              <h4 className="text-[#3b2416] font-bold text-xl mb-2">
                Trusted Scientific Sources
              </h4>

              <p className="text-gray-700 text-sm leading-relaxed">
                The library focuses on high-quality reviews and meta-analyses
                that combine findings from multiple scientific studies for
                stronger evidence and clearer conclusions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={6}
              className="mb-8"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-[#3b2416] leading-tight mb-5">
                Carefully Curated Research & Insights
              </h3>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                This research collection highlights some of the most comprehensive
                scientific studies on coffee and health. The goal is to make
                trusted information easier to explore for coffee lovers,
                researchers, and health-conscious readers.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Priority is given to large-scale reviews and meta-analyses,
                which evaluate findings from many independent studies and are
                considered among the strongest forms of scientific evidence.
              </p>
            </motion.div>

            {/* Feature Points */}
            <div className="space-y-5">

              {[
                {
                  icon: "📚",
                  title: "Peer-Reviewed Studies",
                  desc: "Research included in the library comes from trusted, peer-reviewed scientific publications and journals.",
                },
                {
                  icon: "🔬",
                  title: "Strong Scientific Evidence",
                  desc: "Large reviews and combined analyses are prioritized to provide more reliable and evidence-based conclusions.",
                },
                {
                  icon: "☕",
                  title: "Reviewed By Experts",
                  desc: "Studies are reviewed alongside medical and food safety advisors to ensure quality and accuracy.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index + 7}
                  className="flex gap-4 bg-white p-5 rounded-2xl shadow-md border border-[#f1e4d8] hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f7ede4] flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#3b2416] mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={10}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#3b2416] mb-4">
              Popular Research Categories
            </h3>

            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Explore key areas where coffee and health research continues to
              provide valuable scientific insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchTopics.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index + 11}
                className="bg-white rounded-3xl p-7 shadow-lg border border-[#f1e4d8] hover:-translate-y-2 transition duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f7ede4] flex items-center justify-center text-3xl mb-5">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold text-[#3b2416] mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={15}
          className="mt-16 bg-[#3b2416] rounded-[30px] p-8 sm:p-12 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Trusted Information For Coffee Lovers
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto">
            Unless otherwise stated, the research highlighted here was not
            funded or conducted by the National Coffee Association. The goal is
            to provide transparent, evidence-based information gathered from
            independent scientific studies around the world.
          </p>
        </motion.div>

      </div>
    </section>
    
  );
};

export default CoffeeResearchLibrary;
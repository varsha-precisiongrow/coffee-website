

import { motion } from "framer-motion";
import drycoffee from '../assets/beans/dry-process-coffee.jpg'
import washcoffee from '../assets/beans/coffee-wash-process.jpg'
import semicoffee from '../assets/beans/semi-wash-coffee.jpg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CoffeeProcessing = () => {
  return (
<section className="w-full min-h-screen bg-[#fdf8f3] py-16 px-4 md:px-10 lg:px-20 bg-[url('/BG_coffee2.webp')] bg-cover bg-center bg-no-repeat md:bg-fixed">
      
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h6 className="text-3xl md:text-5xl font-bold text-[#4b2e2b] mb-4">
          Coffee Processing Methods
        </h6>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-1 bg-[#d4a373] mx-auto mb-4 rounded-full"
        />

        <p className="text-gray-600 text-lg leading-relaxed">
          Coffee processing involves picking ripe coffee cherries, removing the beans, and preparing them for roasting. This step is crucial as it directly impacts flavor, aroma, and overall quality.
        </p>
      </motion.div>

      {/* FLEX ROW */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex-1 flex flex-col"
        >
          <motion.img
            src={drycoffee}
            alt="Natural Process" loading="lazy"
            className="w-full h-60 object-cover"
            whileHover={{ scale: 1.05 }}
          />

          <div className="p-6 space-y-3 flex-grow">
            <motion.h3 variants={item} className="text-2xl font-bold text-[#4b2e2b]">
              Natural Process (Dry)
            </motion.h3>

                <motion.p variants={item} className="text-gray-600">
            Whole coffee cherries are sun-dried with the fruit intact until moisture drops to about 11%, then the outer layers are removed to extract the beans naturally.
            </motion.p>

            <motion.p variants={item} className="text-gray-600">
            This method produces full-bodied, sweet, and fruity flavors, but mixed ripeness can affect consistency and quality results.
            </motion.p>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex-1 flex flex-col" >
            
          <motion.img
            src={washcoffee}
            alt="Washed Process" loading="lazy"
            className="w-full h-60 object-cover"
            whileHover={{ scale: 1.05 }}
          />

          <div className="p-6 space-y-3 flex-grow">
            <motion.h3 variants={item} className="text-2xl font-bold text-[#4b2e2b]">
              Washed Process (Wet)
            </motion.h3>

            <motion.p variants={item} className="text-gray-600">
            The pulp is removed before drying, leaving beans with a thin parchment layer. This highlights flavors shaped by soil, climate, and farming practices.
            </motion.p>

            <motion.p variants={item} className="text-gray-600">
            Beans are pulped, sorted, and fermented for 12–48 hours, then washed and dried to about 11% moisture before the parchment is removed.
            </motion.p>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex-1 flex flex-col"
        >
          <motion.img
            src={semicoffee}
            alt="Honey Process" loading="lazy"
            className="w-full h-60 object-cover"
            whileHover={{ scale: 1.05 }}
          />

          <div className="p-6 space-y-3 flex-grow">
            <motion.h3 variants={item} className="text-2xl font-bold text-[#4b2e2b]">
              Honey Process (Semi-Washed)
            </motion.h3>

          <motion.p variants={item} className="text-gray-600">
            In this method, the pulp is removed before drying, leaving beans covered only by a thin parchment layer. Flavor develops from nutrients absorbed during growth.
            </motion.p>

            <motion.p variants={item} className="text-gray-600 ">
            It highlights terroir and farming practices, producing coffee with a clean, bright taste and floral or citrus notes.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoffeeProcessing;
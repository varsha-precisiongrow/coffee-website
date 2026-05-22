import { motion } from "framer-motion";
import cultivation1 from '../assets/home/land-preparation.jpeg'
import cultivation2 from '../assets/home/cultivation_2.webp'
import cultivation3 from '../assets/home/cultivation_3.webp'
import cultivation4 from '../assets/home/cultivation_4.webp'
import cultivation5 from '../assets/home/cultivation_5.webp'
import cultivation6 from '../assets/home/cultivation_6.webp'
import Coffeecup from '../assets/side-icon/coffee-cup.png'
import coffeeleaf from '../assets/side-icon/coffee-leaf.png'

const data = [
  {
    id: "01",
    title: "Land Preparation",
    image:cultivation1,
    points: [
      "Dig a pit 45 cm deep and wide, 1–2 months before planting",
      "Keep upper and lower soil separate",
      "Leave pit open for 15–20 days for sunlight exposure",
      "Add compost, neem ash, and lime",
      "Fill pit 10 cm above ground level",
      "Insert a stake in the center",
    ],
  },
  {
    id: "02",
    title: "Sowing",
    image:cultivation2,
    points: [
      "Pre-treat seeds before sowing",
      "Sow seeds in December–January",
      "Spacing: 1.5–2.5 cm",
      "Cover with soil and paddy straw",
      "Water daily and protect from sunlight",
      "Germination in about 45 days",
    ],
  },
  {
    id: "03",
    title: "Bag Nursery",
    image:cultivation3,
    points: [
      "Use polythene bags with drainage holes",
      "Fill with soil mix (6:2:1)",
      "Plant seedlings in bags",
      "Area supports up to 5000 seedlings",
    ],
  },
  {
    id: "04",
    title: "Field Preparation",
    image:cultivation4,
    points: [
      "Retain useful shade trees",
      "Terrace sloped areas",
      "Dig pits after summer rains",
      "Apply rock phosphate",
      "Plant along contour lines",
    ],
  },
  {
    id: "05",
    title: "Spacing",
    image:cultivation5,
    points: [
      "Arabica: 1.5–2.0 m spacing",
      "Dwarf: 1 x 1 m",
      "Robusta: 2.5–3 m spacing",
      "Liberica: 3.0–4.5 m spacing",
      "Excelsa: 3.0–4.0 m spacing",
    ],
  },
  {
    id: "06",
    title: "Shade Trees",
    image: cultivation6,
    points: [
      "Dadap for lower canopy shade",
      "Silver Oak for permanent shade",
      "Plant during monsoon",
      "Protect from sun damage",
      "Trim branches regularly",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function CoffeeFarming() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#f5e6d3] via-white to-[#f5e6d3] relative">
      <img
      src={Coffeecup}
      alt="coffee" loading="lazy"
      className="hidden md:block absolute left-0 bottom-0 w-48 opacity-80 float-left-anim"
    />
    <img
      src={coffeeleaf}
      alt="coffee" loading="lazy"
      className="hidden md:block absolute left-0 top-0 w-44 opacity-80 float-left-anim"
    />


      <div className="max-w-[80%] mx-auto px-6">

        {/* Heading */}
        <h5 className="text-4xl font-bold text-center text-[#5c3b2a] uppercase">
          Coffee Cultivation Process
        </h5>

        <div className="w-24 h-1 bg-[#d4a373] mx-auto mt-3 rounded-full" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {data.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
             <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } bg-white rounded-xl shadow-md overflow-hidden border-b-2 border-[#5c3b2a] transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${
                reverse ? "md:border-l-2" : "md:border-r-2"
              }`}
            >

                {/* IMAGE */}
                <div className="md:w-1/2 h-60 md:h-auto">
                  <img
                    src={item.image}
                    alt={item.title} loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 md:w-1/2">

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#6F4E37] text-white rounded-full font-bold">
                      {item.id}
                    </div>
                    <h6 className="text-2xl font-semibold text-[#4B2E2B]">
                      {item.title}
                    </h6>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-lg">
                        <span className="text-[#6F4E37]">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
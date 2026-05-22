import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: "01",
    title: "SAVOR FLAVORS OF NATURE",
    heading: "HERITAGE IN THE MAKING",
    image: "https://jazeancoffee.com/wp-content/uploads/2023/03/DSC07640-1-scaled.jpg",
    description:
      "Coffee Institute is proudly the homeland of Arabica and the source of our signature Jazean blend. Each cup carries in it the pristine coasts of the southern region, its secluded islands and towering, lush mountain",
  },
  {
    id: "02",
    title: "HERITAGE IN THE MAKING",
    heading: "HERITAGE IN THE MAKING",
    image: "https://jazeancoffee.com/wp-content/uploads/2023/03/mPYuhmYA-scaled.jpeg",
    description:
      "Generation after generation of farmers in Jazan have passed down cultivating and harvesting methods, fine-tuning their craft along the way. History, pride and passion are evident in every sip. Our coffee is not just coffee; it’s an heirloom.",
  },
  {
    id: "03",
    title: "A WARM WELCOME",
    heading: "HERITAGE IN THE MAKING",
    image: "https://jazeancoffee.com/wp-content/uploads/2023/03/new-coffee-tasting-min.jpg",
    description:
      "Coffee has its roots buried deeply in our culture, customs and identity. The rituals of preparation and presentation, the choice of beans, and the atmosphere of warmth and welcome are all closely associated with local hospitality, whether captured in a fragrant Saudi coffee or a foamy cappuccino.",
  },
];

export default function HeritageSlider() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => { nextSlide();  }, 5000);

    return () => clearInterval(timer);  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getIndex = (offset) => {
    return (current + offset + slides.length) % slides.length;
  };

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-black py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out scale-110"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 lg:px-20">
        <div className="w-full max-w-[1800px]">
       

          {/* Slider */}
          <div className="grid grid-cols-12 items-end gap-6">
            {/* Left Card */}
            <div className="col-span-12 lg:col-span-3">
              <div className="relative group">
                <img
                  src={slides[getIndex(-1)].image}
                  alt="slides" loading="lazy"
                  className="w-full h-[250px] object-cover transition-all duration-1000"
                />

                <div className="mt-6 text-white">
                  <span className="text-3xl font-light">
                    {slides[getIndex(-1)].id}
                  </span>
                  <h3 className="mt-2 text-xl uppercase tracking-wide">
                    {slides[getIndex(-1)].title}
                  </h3>
                </div>
              </div>
            </div>

          
            {/* Center Card */}
            <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative overflow-hidden">
                <img
                src={slides[current].image}
                alt="slide1" loading="lazy"
                className="w-full h-[800px] object-cover transition-all duration-[2000ms] ease-in-out"
                />

                <div className="absolute inset-0 bg-black/30" />

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col justify-between py-12 px-8 md:px-14">
                {/* Heading at Top */}
                <div className="text-center">
                    <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wide">
                    {slides[current].heading}
                    </h3>
                </div>

                {/* Description at Bottom */}
                <div className="text-center text-white pb-8">
                    <p className="max-w-4xl mx-auto text-sm md:text-2xl lg:text-3xl  font-light">
                    {slides[current].description}
                    </p>
                </div>
                </div>
            </div>
            </div>
            {/* Right Card */}
            <div className="col-span-12 lg:col-span-3">
              <div className="relative group">
                <img
                  src={slides[getIndex(1)].image}
                  alt="slide3" loading="lazy"
                  className="w-full h-[250px] object-cover transition-all duration-1000"
                />

                <div className="mt-6 text-white text-right">
                  <span className="text-3xl font-light">
                    {slides[getIndex(1)].id}
                  </span>
                  <h4 className="mt-2 text-xl uppercase tracking-wide">
                    {slides[getIndex(1)].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-500 rounded-full ${
                  current === index
                    ? "w-16 h-2 bg-white"
                    : "w-3 h-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
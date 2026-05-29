import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Coffee_Hills from '../../assets/story/Coffee_Hills.webp'

const slides = [
  {
    id: "01",
    image:Coffee_Hills,
    thumb: "https://jazeancoffee.com/wp-content/themes/jazean/images/slide2.webp",
    title: "HOMELAND TO THE WORLD",
    description:
      "Jazean coffee beans stem from the abundant mountains of southern region of Saudi Arabia. Nestled 1,000 meters above sea level, these ancient grounds root us to our heritage and provide the ideal environment for high quality yield.",
  },
  {
    id: "02",
    image: "https://jazeancoffee.com/wp-content/themes/jazean/images/slide2.webp",
    thumb: Coffee_Hills,
    title: "HOMELAND TO THE WORLD",
    description:
      "From mountain terraces to your cup, every bean carries generations of craftsmanship, tradition, and unmatched quality from the highlands.",
  },
];
export default function Section4() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  // Optional Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full bg-[#E8DED3] overflow-hidden py-16 lg:py-24">
      <div className="max-w-[1800px] mx-auto">
        {/* Heading */}
        <div className="px-6 lg:px-20 mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-[#2D2118] uppercase leading-none">
            FROM OUR
            <br/>
            Homeland to the
            <br />
            World
          </h2>
        </div>
        {/* Slider */}
        <div className="relative flex items-stretch">
          {/* Main Image */}
          <div className="relative w-full lg:w-[85%] h-[450px] md:h-[650px] lg:h-[750px] overflow-hidden">
            <div className="flex h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }} >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={slide.image}
                    alt={slide.title} loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  {/* Thumbnail */}
                  <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-52 md:w-72 lg:w-80 h-36 md:h-48 lg:h-56 overflow-hidden shadow-2xl">
                    <img
                      src={slide.thumb}
                      alt="Thumbnail" loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* Vertical Counter */}
          <div className="hidden lg:flex w-[12%] items-end justify-center">
            <div className="text-[90px] font-extralight text-[#8A786B] tracking-wider"
              style={{ writingMode: "vertical-rl" }} >
              {slides[current].id}/02
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="  grid grid-cols-1 md:grid-cols-[0.25fr_0.75fr] lg:grid-cols-[0.3fr_0.7fr] gap-8 md:gap-12 px-4 md:px-10 lg:px-20 py-12 md:py-16 items-center max-w-7xl">
          {/* Bottom Arrows */}
          <div className="flex items-center gap-6">
            <button onClick={prevSlide} className="group">
              <div className="w-20 h-20 rounded-full border border-[#4D3D34] flex items-center justify-center transition-all duration-500 group-hover:w-16 group-hover:h-16">
                <FaArrowLeft className="text-[#4D3D34] text-2xl transition-all duration-500 group-hover:scale-x-125" />
              </div>
            </button>
             
            <button onClick={nextSlide} className="group" >
              <div className="w-20 h-20 rounded-full border border-[#4D3D34] flex items-center justify-center transition-all duration-500 group-hover:w-16 group-hover:h-16">
                <FaArrowRight className="text-[#4D3D34] text-2xl transition-all duration-500 group-hover:scale-x-125" />
              </div>
            </button>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#2D2118] text-xl md:text-2xl lg:text-3xl leading-relaxed font-light transition-all duration-700">
              {slides[current].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
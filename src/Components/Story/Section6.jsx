import React from "react";
const Section6 = () => {
  return (
    <section className="w-full bg-[#1b0503] py-20 overflow-hidden  border-2">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Video */}
        <div className="relative h-full">
          <video
            src="https://jazeancoffee.com/wp-content/themes/jazean/videos/farmers.mp4?v=2"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[400px] md:h-[550px] lg:h-[700px] object-cover"/>
        </div>
          {/* Right Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 lg:py-0 text-white">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight uppercase leading-[1.1] tracking-wide mb-10">
          From Mountain <br /> To Cup </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-white/90 max-w-2xl">
            Grown in the lush highlands, our premium coffee beans thrive in rich soil,
            cool mountain air, and ideal climatic conditions. Carefully handpicked at
            peak ripeness and expertly roasted, every bean delivers a perfectly balanced
            cup with remarkable aroma, smooth texture, and unforgettable flavor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section6;
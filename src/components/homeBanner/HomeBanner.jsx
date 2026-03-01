import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typewriter from "typewriter-effect";

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeBanner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/3YFY777F/Yassoraa-Fragrance-Brand-Banner-Image.jpg", // Replace with your Coco Noir image
      subtitle: "LUSH SERENITY",
      title: "Soph|",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/ZpzCqcnV/Yassora-Hero-Image.jpg",
      subtitle: "TIMELESS ELEGANCE",
      title: "Noir|",
    },
  ];

  return (
    <div className="h-screen w-full relative group">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-end pb-32 px-10 md:px-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10">
                <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.4em] mb-4 opacity-80">
                  {slide.subtitle}
                </p>
                <h2 className="text-white text-6xl md:text-8xl font-serif italic tracking-tighter leading-none">
  <Typewriter
    options={{
      autoStart: true,
      loop: true,
      cursor: "|",
      delay: 75, // Speed of typing (ms)
      deleteSpeed: 50, // Speed of deleting (ms)
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Sophisticated")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Exclusive")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Timeless")
        .pauseFor(2000)
        .start();
    }}
  />
</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles to hide default Swiper pagination dots if they look too generic */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #ffaa0b !important; /* Matches your TravelEase Amber */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;
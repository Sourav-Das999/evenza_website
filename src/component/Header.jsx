import React, { useState, useEffect, useRef } from "react";
import bgImage from "../../image/Background.png";
import pic1 from "../../image/pic-1.png";
import pic2 from "../../image/pic-2.png";
import pic3 from "../../image/pic-3.png";
import videoIcon from "../../image/video-link.svg";
import lineIcon from "../../image/line.svg";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <div
      ref={headerRef}
      id="home"
      className="header__container bg-cover bg-center min-h-screen h-auto pt-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ------------------ Header Content Start ------------------- */}
      <div className="header__content flex flex-col items-center justify-center text-center text-white mt-10 md:mt-16 px-4 pb-16">
        
        {/* 1st / Top Content */}
        <div
          className={`flex items-center text-[12px] sm:text-[14px] font-semibold px-4 py-2 sm:py-3 gap-3 bg-white/10 backdrop-blur-md rounded-[100px] border border-white/10 hover:scale-105 ${animateText("delay-100")}`}
        >
          <div className="flex -space-x-2.5">
            <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={pic3} alt="vector" />
            <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={pic2} alt="vector" />
            <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" src={pic1} alt="vector" />
          </div>
          <span>Ideas that spark change.</span>
        </div>

        {/* 2nd / Middle Content Heading */}
        <h1
          className={`text-[32px] sm:text-[48px] md:text-[68px] lg:text-[78px] font-extrabold max-w-4xl leading-[1.1] mt-5 ${animateText("delay-200")}`}
        >
          Connecting Minds to Shape Tomorrow's Big Ideas
        </h1>

        {/* 2nd / Middle Content Subtitle */}
        <p
          className={`text-[14px] sm:text-[16px] leading-relaxed max-w-2xl mt-4 px-2 mx-auto text-center ${animateText("delay-300")}`}
        >
          Experience a powerful gathering of visionaries, creators, and industry experts united by one goal— exchanging ideas that spark growth, innovation, and meaningful change.
        </p>

        {/* 3rd / Bottom Content (Buttons) */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md ${animateText("delay-400")}`}
        >
          <a
            href="#"
            className="w-full sm:w-auto bg-[#734BDF] text-white text-[14px] md:text-[16px] font-bold rounded-[100px] px-8 py-3.5 whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Schedule
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white text-[14px] md:text-[16px] font-bold rounded-[100px] px-8 py-3.5 whitespace-nowrap hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer"
          >
            <img src={videoIcon} alt="video" className="w-6 h-6" />
            Watch Video
          </a>
        </div>

        {/* 4th / Bottom Content (Countdown Timer) */}
        <div
          className={`mt-12 sm:mt-16 w-full max-w-3xl ${animateText("delay-500")}`}
        >
          <div className="flex items-center justify-center text-center text-white gap-2 sm:gap-6 w-full">
            <img className="w-6 sm:w-16 opacity-70" src={lineIcon} alt="line" />
            <span className="text-xs sm:text-base whitespace-nowrap opacity-90">
              Upcoming Speaker Reveal - Don't Miss Out
            </span>
            <img className="w-6 sm:w-16 opacity-70" src={lineIcon} alt="line" />
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center text-center text-white mt-6 gap-3 sm:gap-6">
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-[20px] p-4 w-full sm:w-28 border border-white/10">
              <p className="text-[28px] sm:text-[38px] font-bold">202</p>
              <span className="text-[14px] opacity-80">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-[20px] p-4 w-full sm:w-28 border border-white/10">
              <p className="text-[28px] sm:text-[38px] font-bold">08</p>
              <span className="text-[14px] opacity-80">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-[20px] p-4 w-full sm:w-28 border border-white/10">
              <p className="text-[28px] sm:text-[38px] font-bold">13</p>
              <span className="text-[14px] opacity-80">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-[20px] p-4 w-full sm:w-28 border border-white/10">
              <p className="text-[28px] sm:text-[38px] font-bold">14</p>
              <span className="text-[14px] opacity-80">Seconds</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
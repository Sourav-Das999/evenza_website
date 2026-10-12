import React, { useEffect, useRef, useState } from "react";
import starIcon from "../../image/star.svg";

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // একবার স্ক্রল করে পৌঁছালে অ্যানিমেশন ট্র্রিগার হবে
        }
      },
      { threshold: 0.2 }, // সেকশনটি ২০% দৃশ্যমান হলেই টেক্সট নিচ থেকে ভেসে উঠবে
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const items = [
    "Latest Updates",
    "New Announcements",
    "Workshop Alerts",
    "Live Notices",
    "Event Countdown",
    "Workshop Alerts",
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#734BDF] py-3 sm:py-4 md:py-5 w-full overflow-hidden flex items-center select-none border-y border-white/10"
    >
      {/* বাম পাশের স্মুথ ওভারলে */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#734BDF] to-transparent z-10 pointer-events-none" />

      {/* ডান পাশের স্মুথ ওভারলে */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#734BDF] to-transparent z-10 pointer-events-none" />

      {/* Horizontal Continuous Scroll Wrapper */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First Set of Items */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 pr-6 sm:pr-8 md:pr-10 shrink-0">
          {items.map((text, index) => (
            <div
              key={`item-1-${index}`}
              className={`flex items-center gap-6 sm:gap-8 md:gap-10 shrink-0 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={starIcon}
                alt="star"
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
              />
              <span className="text-[18px] sm:text-[24px] md:text-[30px] font-bold text-white tracking-wide whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Second Set of Items (Infinite Loop-এর জন্য) */}
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 pr-6 sm:pr-8 md:pr-10 shrink-0">
          {items.map((text, index) => (
            <div
              key={`item-2-${index}`}
              className={`flex items-center gap-6 sm:gap-8 md:gap-10 shrink-0 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={starIcon}
                alt="star"
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
              />
              <span className="text-[18px] sm:text-[24px] md:text-[30px] font-bold text-white tracking-wide whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
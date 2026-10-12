import React, { useState, useEffect, useRef } from "react";
import blueDot from "../../image/blue-dot.svg";
import keyImg1 from "../../image/key-section-image-1.svg";
import keyImg2 from "../../image/key-section-image-2.svg";
import evenzaIcon3 from "../../image/evenza-icon-3.svg";
import ring2 from "../../image/ring-2.svg";
import keyImage1 from "../../image/key-image-1.png";
import ring1 from "../../image/ring-1.svg";
import keyImage2 from "../../image/key-image-2.png";

export default function KeyBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ---------- Left Content Start ------------ */}
        <div
          className={`flex-1 w-full flex flex-col justify-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Subtitle & Title */}
          <div>
            <div
              className={`flex items-center gap-2.5 mb-3 ${animateText("delay-75")}`}
            >
              <img src={blueDot} alt="dot" className="w-2.5 h-2.5" />
              <span className="text-[#161A2D] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Key Benefits
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-4xl lg:text-[48px] font-semibold text-[#161A2D] leading-tight max-w-xl ${animateText("delay-150")}`}
            >
              Key advantages that ensure your events stand out
            </h2>
          </div>

          {/* Key Advantages Item List */}
          <div
            className={`flex flex-col gap-8 my-8 py-8 border-y border-black/10 max-w-xl ${animateText("delay-200")}`}
          >
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <img
                src={keyImg1}
                alt="Expert-Led Keynote Sessions"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <h3 className="text-[#161A2D] text-lg sm:text-[20px] font-bold mb-1">
                  Expert-Led Keynote Sessions
                </h3>
                <p className="text-[#737681] text-sm sm:text-[16px] leading-relaxed">
                  Experience inspiring keynote sessions led by industry experts
                  who share valuable insights, trends, and strategies to help
                  you grow personally and professionally.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <img
                src={keyImg2}
                alt="Advanced Event Technology"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <h3 className="text-[#161A2D] text-lg sm:text-[20px] font-bold mb-1">
                  Advanced Event Technology
                </h3>
                <p className="text-[#737681] text-sm sm:text-[16px] leading-relaxed">
                  Experience inspiring keynote sessions led by industry experts
                  who share valuable insights, trends, and strategies to help
                  you grow personally and professionally.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button & Contact Info */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl ${animateText("delay-300")}`}
          >
            <button className="text-sm sm:text-[16px] font-bold text-[#F6F6F7] bg-[#734BDF] rounded-full px-7 py-3.5 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              View Our Schedule
            </button>

            <div className="flex items-center gap-3.75">
              <img
                src={evenzaIcon3}
                alt="call icon"
                className="w-12 h-12 shrink-0"
              />
              <div>
                <h4 className="text-[#161A2D] text-base sm:text-[20px] font-bold">
                  Call Now!
                </h4>
                <p className="text-[#737681] text-sm sm:text-[16px] whitespace-nowrap">
                  +00 123 456 789
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------- Left Content End ---------------- */}

        {/* ------------ Right Content Start (Image & Floating Overlays) ------------------ */}
        <div
          className={`flex-1 w-full relative flex items-center justify-center transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center">
            {/* Top Right Decorative Ring */}
            <img
              src={ring2}
              alt="ring decoration"
              className="absolute -top-6 right-2 sm:right-6 w-16 sm:w-24 z-0 animate-bounce"
            />

            {/* Main Image 1 */}
            <div className="relative z-10 w-4/5">
              <img
                src={keyImage1}
                alt="key main visual"
                className="w-full h-auto rounded-3xl object-cover shadow-lg"
              />
              {/* Bottom Decorative Ring */}
              <img
                src={ring1}
                alt="ring decoration"
                className="mt-6 ml-6 sm:ml-12 w-12 sm:w-16 opacity-80"
              />
            </div>

            {/* Overlay Image 2 (Floating Image) */}
            <div className="absolute -bottom-6 right-0 sm:right-4 w-3/5 z-20 transition-transform duration-500 hover:scale-105">
              <img
                src={keyImage2}
                alt="key secondary visual"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
        {/* ---------------- Right Content End -------------------- */}
      </div>
    </section>
  );
}

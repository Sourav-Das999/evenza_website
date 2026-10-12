import React, { useState, useEffect, useRef } from "react";
import coreFeatureDot from "../../image/core-feature-dot.svg";
import cartImage from "../../image/core-feature-cart-image.svg";
import cartAro from "../../image/core-feature-cart-aro.svg";
import coreStar from "../../image/core-star.svg";

export default function CoreFeature() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Features Data List
  const features = [
    {
      title: "Event Planning Manage",
      desc: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
      bg: "bg-white/15",
    },
    {
      title: "Event Planning Manage",
      desc: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
      bg: "bg-[#734BDF]", // Active highlighted card
    },
    {
      title: "Event Planning Manage",
      desc: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
      bg: "bg-white/15",
    },
    {
      title: "Event Planning Manage",
      desc: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
      bg: "bg-white/15",
    },
  ];

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#161A2D] bg-[radial-gradient(circle_at_50%_10%,rgba(115,75,223,0.35)_0%,transparent_50%)] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center text-center">
          <div className={`flex items-center gap-2.5 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 ${animateText("delay-75")}`}>
            <img
              src={coreFeatureDot}
              alt="dot"
              className="w-2.5 h-2.5"
            />
            <span className="text-xs sm:text-sm text-white font-semibold">
              Core Feature
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-[48px] text-white font-semibold max-w-3xl text-center mt-4 leading-tight ${animateText("delay-150")}`}>
            Core features that power our exceptional services
          </h2>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-16 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-[20px] ${item.bg} backdrop-blur-sm border border-white/10 transition-all duration-700 hover:scale-105 hover:shadow-xl transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div>
                <div className="border-b border-white/15 pb-6">
                  <img
                    src={cartImage}
                    alt="cart-image"
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-lg sm:text-[20px] text-white font-bold mt-8 sm:mt-12">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[16px] text-white/80 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mt-6 cursor-pointer group">
                <span className="text-sm sm:text-[16px] text-white font-medium group-hover:underline">
                  Read More
                </span>
                <img
                  src={cartAro}
                  alt="cart-aro"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Review & Callout Section */}
        <div
          className={`flex flex-col items-center text-center mt-14 sm:mt-20 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm sm:text-[16px] text-white/90 max-w-xl px-4">
            Join our team and help weave innovation, quality, and success
            together worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-6 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <span className="text-lg sm:text-[20px] text-white font-bold">
              4.9/5
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={coreStar}
                  alt="core-star"
                  className="w-4 h-4"
                />
              ))}
            </div>
            <span className="text-sm sm:text-[20px] text-white font-bold">
              Our 4200 Review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
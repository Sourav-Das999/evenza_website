import React, { useState, useEffect, useRef } from "react";
import speakerImg1 from "../../image/speaker-image-1.png";
import speakerImg2 from "../../image/speaker-image-2.png";
import speakerImg3 from "../../image/speaker-image-3.png";
import blueDot from "../../image/blue-dot.svg";
import shareBtn from "../../image/share-button.svg";
import shotImg from "../../image/shot-image.png";
import shotIcon from "../../image/shot-icon.png";

export default function Speakers() {
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

  // Speakers Data List with correct relative paths (from src/component/ to image/)
  const speakersData = [
    {
      img: speakerImg1,
      name: "Sophia Rodrigues",
      role: "Global Marketing Director",
    },
    {
      img: speakerImg2,
      name: "Jacob Jones",
      role: "Lead AI Research Scientist",
    },
    {
      img: speakerImg3,
      name: "Arlene McCoy",
      role: "Innovation Strategy Expert",
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
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center text-center">
          <div
            className={`flex items-center gap-2 bg-[#F6F6F7] px-4 py-1.5 rounded-full border border-gray-200 ${animateText("delay-75")}`}
          >
            <img src={blueDot} alt="blue-dot" className="w-2.5 h-2.5" />
            <span className="text-[#161A2D] text-xs sm:text-sm font-semibold">
              Our Speakers
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-[48px] text-[#161A2D] font-semibold max-w-3xl text-center mt-3 leading-snug ${animateText("delay-150")}`}
          >
            Introducing the expert speakers joining our event
          </h2>
        </div>

        {/* Speakers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16 w-full">
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className={`bg-[#F6F6F7] p-3 rounded-3xl transition-all duration-700 hover:shadow-xl hover:-translate-y-2 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-4 pt-6 pb-4">
                <div>
                  <h3 className="text-lg sm:text-[20px] text-[#161A2D] font-bold">
                    {speaker.name}
                  </h3>
                  <p className="text-sm sm:text-[16px] text-[#737681] mt-1.5">
                    {speaker.role}
                  </p>
                </div>
                <button
                  aria-label="Share profile"
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  <img
                    src={shareBtn}
                    alt="share-button"
                    className="w-10 h-10 object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Community Callout */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-3 mt-12 sm:mt-16 text-center sm:text-left transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex -space-x-3 shrink-0">
            <img
              src={shotImg}
              alt="shot"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={shotIcon}
              alt="shot"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </div>
          <p className="text-sm sm:text-[16px] text-[#737681] max-w-lg">
            Join our speaker and help weave innovation, quality, and success
            together worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import evenzaImg1 from "../../image/envenza-image-1.png";
import evenzaCircle from "../../image/evenza-circle.png";
import evenzaAward from "../../image/evenza-2.png";
import blueDot from "../../image/blue-dot.svg";
import evenzaIcon1 from "../../image/evenza-icon-1.svg";
import evenzaIcon2 from "../../image/evenza-icon-2.svg";
import evenzaIcon3 from "../../image/evenza-icon-3.svg";

export default function Evenza() {
  const [activeTab, setActiveTab] = useState("mission");
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

  // Tabs Content Data
  const tabContents = {
    vision:
      "Our vision is to build a global community where collaboration fuels innovation. We aim to encourage fresh thinking, spark inspiring dialogues, and create an inclusive space.",
    mission:
      "Our mission is to bring together innovators, leaders, and changemakers to share knowledge, spark inspiration, and build meaningful, lifelong professional connections.",
    goal: "Our goal is to deliver high-value experiences through insightful keynotes, interactive workshops, and powerful networking opportunities for all participants.",
  };

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#F6F6F7] py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* ---------------- Left Items (Images & Badges) ---------------- */}
        <div
          className={`flex-1 w-full relative flex flex-col items-center justify-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main Image Wrapper */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={evenzaImg1}
              alt="Evenza main"
              className="w-full h-auto rounded-3xl object-cover shadow-sm"
            />

            {/* 25+ Badge */}
            <div className="absolute top-4 left-4 sm:-left-6 bg-[#EAEAEE]/90 backdrop-blur-md text-[#161A2D] text-xl sm:text-2xl lg:text-3xl font-bold px-5 py-3 sm:px-6 sm:py-4 rounded-full shadow-md">
              25+
            </div>

            {/* Floating Circle Image */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 w-20 sm:w-28 z-20">
              <img
                src={evenzaCircle}
                alt="circle decorative"
                className="w-full h-auto animate-spin-slow"
              />
            </div>
          </div>

          {/* Floating Award Card */}
          <div className="mt-6 lg:-mt-24 lg:ml-20 w-full max-w-xs sm:max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 z-10 transition-transform hover:scale-105 duration-300">
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <img
                src={evenzaAward}
                alt="Award Icon"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
              />
              <h3 className="text-sm sm:text-base font-semibold text-[#161A2D] leading-snug">
                “Institute for Professional Achievement Awards 2025”
              </h3>
              <p className="text-xs sm:text-sm text-[#737681] mt-2">
                by-Nisha Trivedi
              </p>
            </div>
            <div className="text-sm sm:text-base text-[#161A2D] font-bold px-6 py-4 bg-[#F6F6F7] text-center border-t border-gray-100">
              Celebrating Achievement with Pride
            </div>
          </div>
        </div>
        {/* --------------- Left Items End ---------------- */}

        {/* ------------------ Right Items (Content) ---------------- */}
        <div
          className={`flex-1 w-full flex flex-col justify-center transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Subtitle & Title */}
          <div>
            <div
              className={`flex items-center gap-2 mb-3 ${animateText("delay-75")}`}
            >
              <img src={blueDot} alt="dot" className="w-2.5 h-2.5" />
              <span className="text-sm text-[#161A2D] font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-4xl lg:text-[48px] text-[#161A2D] font-semibold leading-tight ${animateText("delay-150")}`}
            >
              Uncover our mission & purpose behind this event
            </h2>
            <p
              className={`text-[#737681] text-sm sm:text-base mt-4 leading-relaxed max-w-xl ${animateText("delay-200")}`}
            >
              Discover the vision that drives this event—a commitment to
              bringing together innovators, leaders, and changemakers to share
              knowledge, spark inspiration, and create meaningful connections.
            </p>
          </div>

          {/* Dynamic Tabs */}
          <div
            className={`flex flex-wrap sm:flex-nowrap bg-[#EAEAEC] p-1.5 rounded-2xl sm:rounded-full max-w-md mt-8 gap-1 ${animateText("delay-250")}`}
          >
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "vision"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-sm"
                  : "text-[#737681] hover:text-[#161A2D]"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "mission"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-sm"
                  : "text-[#737681] hover:text-[#161A2D]"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("goal")}
              className={`flex-1 py-3 px-4 sm:px-6 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "goal"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-sm"
                  : "text-[#737681] hover:text-[#161A2D]"
              }`}
            >
              Our Goal
            </button>
          </div>

          {/* Dynamic Tab Content Display */}
          <div
            className={`text-sm sm:text-base text-[#737681] mt-6 min-h-[70px] leading-relaxed max-w-xl transition-all duration-300 ${animateText("delay-300")}`}
          >
            {tabContents[activeTab]}
          </div>

          {/* Feature Highlights */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 ${animateText("delay-350")}`}
          >
            <div className="text-base sm:text-lg text-[#161A2D] font-bold flex items-start gap-3.5">
              <img
                src={evenzaIcon1}
                alt="icon"
                className="w-6 h-6 mt-1 shrink-0"
              />
              <span>Receive real-time event updates.</span>
            </div>
            <div className="text-base sm:text-lg text-[#161A2D] font-bold flex items-start gap-3.5">
              <img
                src={evenzaIcon2}
                alt="icon"
                className="w-6 h-6 mt-1 shrink-0"
              />
              <span>Connect with world-class speakers.</span>
            </div>
          </div>

          {/* CTA Button & Contact Info */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10 ${animateText("delay-400")}`}
          >
            <button className="text-sm sm:text-base font-bold text-white bg-[#734BDF] rounded-full px-7 py-3.5 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              Learn More About
            </button>

            <div className="flex items-center gap-3.5">
              <img
                src={evenzaIcon3}
                alt="call icon"
                className="w-12 h-12 shrink-0"
              />
              <div>
                <h4 className="text-sm sm:text-base text-[#161A2D] font-bold">
                  Call Now!
                </h4>
                <p className="text-sm text-[#737681]">+00 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------- Right Items End ---------------- */}
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import coreFeatureDot from "../../image/core-feature-dot.svg";
import eventImg1 from "../../image/event-image-1.png";
import eventImg2 from "../../image/event-image-2.png";
import eventImg3 from "../../image/event-image-3.png";
import eventImg4 from "../../image/event-image-4.png";
import mapImage from "../../image/map-image.png";

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState("day1");
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

  // Events Data List according to Days
  const scheduleData = {
    day1: [
      {
        img: eventImg1,
        time: "9:00 AM - 5:30 PM",
        date: "22 March 2025",
        title: "Professional Skills Development Workshop",
        desc: "Unlock your potential and elevate your career with our Professional Skills Development designed for students and working professionals.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
      {
        img: eventImg2,
        time: "10:00 AM - 4:00 PM",
        date: "05 May 2025",
        title: "Leadership & Growth Conference",
        desc: "Unlock your potential and elevate your career with our Professional Skills Development designed for students and working professionals.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
      {
        img: eventImg3,
        time: "8:30 AM - 6:00 PM",
        date: "20 June 2025",
        title: "Digital Marketing Masterclass",
        desc: "Unlock your potential and elevate your career with our Professional Skills Development designed for students and working professionals.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
      {
        img: eventImg4,
        time: "11:00 AM - 3:00 PM",
        date: "10 April 2025",
        title: "Annual Innovation Summit 2025",
        desc: "Unlock your potential and elevate your career with our Professional Skills Development designed for students and working professionals.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
    ],
    day2: [
      {
        img: eventImg2,
        time: "10:00 AM - 4:00 PM",
        date: "23 March 2025",
        title: "Advanced Tech & AI Exploration",
        desc: "Explore cutting-edge developments in artificial intelligence and automation with leading global experts.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
      {
        img: eventImg3,
        time: "1:00 PM - 5:00 PM",
        date: "23 March 2025",
        title: "UI/UX Design Systems Masterclass",
        desc: "Learn how to build scalable design systems and modern user interfaces with hands-on practice.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
    ],
    day3: [
      {
        img: eventImg4,
        time: "9:30 AM - 3:30 PM",
        date: "24 March 2025",
        title: "Global Networking & Closing Gala",
        desc: "Connect directly with investors, agency leaders, and founders in an exclusive round-table session.",
        location: ["Street, Block 12", "Sector 4, Ipsum City"],
      },
    ],
  };

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="min-h-screen bg-[#161A2D] bg-[radial-gradient(circle_at_50%_10%,rgba(115,75,223,0.35)_0%,transparent_50%)] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div
            className={`flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 ${animateText("delay-75")}`}
          >
            <img src={coreFeatureDot} alt="dot" className="w-2.5 h-2.5" />
            <span className="text-xs sm:text-sm font-semibold">
              Our Event Schedule
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-[48px] font-semibold max-w-2xl text-center mt-4 leading-tight ${animateText("delay-150")}`}
          >
            Explore the complete schedule for our event
          </h2>
        </div>

        {/* Day Selection Tabs */}
        <div className={`mt-8 sm:mt-10 ${animateText("delay-200")}`}>
          <div className="flex bg-[#EAEAEC]/10 backdrop-blur-md p-1.5 rounded-full border border-white/10 max-w-md gap-1 sm:gap-2">
            <button
              onClick={() => setActiveDay("day1")}
              className={`py-3 px-6 sm:px-10 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeDay === "day1"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-md"
                  : "text-white hover:text-white/80"
              }`}
            >
              Day 01
            </button>
            <button
              onClick={() => setActiveDay("day2")}
              className={`py-3 px-6 sm:px-10 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeDay === "day2"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-md"
                  : "text-white hover:text-white/80"
              }`}
            >
              Day 02
            </button>
            <button
              onClick={() => setActiveDay("day3")}
              className={`py-3 px-6 sm:px-10 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeDay === "day3"
                  ? "bg-[#F6F6F7] text-[#161A2D] shadow-md"
                  : "text-white hover:text-white/80"
              }`}
            >
              Day 03
            </button>
          </div>
        </div>

        {/* Schedule Items List */}
        <div className="mt-12 lg:mt-16 w-full flex flex-col gap-8">
          {scheduleData[activeDay]?.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20 transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Event Image */}
              <div className="overflow-hidden rounded-2xl shrink-0">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Timing & Date */}
              <div className="w-full lg:w-48 shrink-0">
                <h3 className="text-lg sm:text-[20px] font-bold text-white">
                  {event.time}
                </h3>
                <p className="text-sm sm:text-[16px] text-white/70 mt-1">
                  {event.date}
                </p>
              </div>

              {/* Event Title & Description */}
              <div className="flex-1 max-w-xl">
                <h3 className="text-lg sm:text-[20px] font-bold text-white leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-[16px] text-white/80 mt-2 leading-relaxed">
                  {event.desc}
                </p>
              </div>

              {/* Location Info */}
              <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
                <img
                  src={mapImage}
                  alt="map"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div className="flex flex-col text-sm sm:text-[16px] text-white/90 leading-tight">
                  <span>{event.location[0]}</span>
                  <span>{event.location[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

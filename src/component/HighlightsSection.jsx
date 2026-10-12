import { useState, useEffect, useRef } from "react";
import highlightsBackground from "../../image/highlights-background-image.jpg";

export default function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      category: "Panels",
      title: "Interactive Panel Discussions",
    },
    {
      category: "Networking",
      title: "Connect With Top Professionals",
    },
    {
      category: "Resources",
      title: "Exclusive Access Event Material",
    },
    {
      category: "Updates",
      title: "Real-Time Event Announcement",
      desc: "Build meaningful relationships with industry leaders, innovators.",
      hasLink: true,
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
      id="pages"
      className={`relative w-full h-screen min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex flex-col justify-end transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ backgroundImage: `url(${highlightsBackground})` }}
    >
      {/* bg overlay */}
      <div className="absolute inset-0 bg-[#161A2D]/60 z-0" />

      {/* content container */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white">
        {highlights.map((item, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            className={`relative flex flex-col justify-end p-6 sm:p-8 lg:p-12 h-full transition-all duration-800 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${
              index !== highlights.length - 1
                ? "lg:border-r lg:border-white/10"
                : ""
            }`}
          >
            <span
              className={`text-xs sm:text-sm font-bold tracking-wider text-purple-300 uppercase mb-2 block truncate ${animateText("delay-100")}`}
            >
              {item.category}
            </span>
            <h3
              className={`text-base sm:text-lg lg:text-xl font-bold leading-snug whitespace-nowrap ${animateText("delay-200")}`}
            >
              {item.title}
            </h3>
            {item.desc && (
              <p
                className={`text-sm text-white/80 mt-2 ${animateText("delay-300")}`}
              >
                {item.desc}
              </p>
            )}
            {item.hasLink && (
              <a
                href="#"
                className={`text-sm font-semibold text-white mt-4 inline-flex items-center gap-1 hover:underline ${animateText("delay-400")}`}
              >
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

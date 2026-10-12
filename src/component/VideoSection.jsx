import { useState, useEffect, useRef } from "react";
import videoBgImage from "../../image/intro-video-image.png"; // image path for the video section background

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Animation Helper Function
  const animateElement = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 translate-y-8"
    }`;

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative w-full h-[400px] sm:h-[500px] lg:h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000 transform overflow-hidden ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ backgroundImage: `url(${videoBgImage})` }}
      >
        <div className="absolute inset-0 bg-[#161A2D]/60 z-0" />

        <div
          className={`relative z-10 flex items-center justify-center ${animateElement("delay-200")}`}
        >
          <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#734BDF] opacity-75 animate-ping"></span>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Play Video"
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#734BDF] hover:bg-[#5f3ac8] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current translate-x-0.5 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

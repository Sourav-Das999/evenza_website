import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Ralph Edwards",
      role: "Global Marketing Director",
      review:
        '"Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."',
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Kristin Watson",
      role: "Global Marketing Director",
      review:
        '"Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."',
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Animation Helper Function
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f0c1b] text-white relative overflow-hidden"
    >
      {/* Top Center Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] bg-[#734BDF]/30 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1500px] mx-auto relative z-10 p-2 sm:p-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <div className={`inline-flex items-center gap-2 mb-3 ${animateText("delay-75")}`}>
            <span className="w-2 h-2 rounded-full bg-[#734BDF]"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400">
              Testimonials
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight ${animateText("delay-150")}`}>
            What our customers say about their experience
          </h2>
        </div>

        {/* Main Grid Content (Responsive for Mobile & Desktop) */}
        <div
          className={`flex flex-col lg:flex-row gap-8 items-stretch transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Left Purple Banner Card */}
          <div className="lg:col-span-4 bg-[#734BDF] rounded-[32px] p-6 sm:p-10 flex flex-col justify-between h-full min-h-[420px] w-full lg:max-w-[345px] shadow-2xl relative overflow-hidden mx-auto lg:mx-0">
            <div className={`mb-8 w-full ${animateText("delay-200")}`}>
              {/* Overlapping Avatars Stack */}
              <div className="flex items-center -space-x-3 mb-6">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                  alt="User"
                />
              </div>

              <p className="text-xs sm:text-sm text-purple-200 font-medium mb-1">
                Over 15,000+ Attendees
              </p>
              <p className="text-xs text-purple-300 font-light mb-8">
                Connected Worldwide
              </p>
            </div>

            <div className={animateText("delay-300")}>
              <h3 className="text-[20px] font-bold leading-tight mb-8">
                Client Experience Speak For Themselves
              </h3>

              <button className="bg-white text-[#161A2D] hover:bg-gray-100 font-bold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                View All Reviews
              </button>
            </div>
          </div>

          {/* Right Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {testimonials.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`bg-[#1a162b] border border-white/10 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[420px] w-full shadow-xl transition-all duration-300 
                  cursor-pointer group
                  active:scale-95
                  ${index === activeIndex ? "border-purple-500 ring-2 ring-purple-500/20" : "hover:border-purple-500/30"}
                  ${animateText(index === 0 ? "delay-250" : "delay-350")}
                `}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 text-purple-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {item.review}
                </p>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                {/* Client Footer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-purple-400/40"
                    />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-400 font-light">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <span className="text-purple-500/60 text-3xl font-serif transition-colors duration-300 group-hover:text-purple-400">
                    “
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className={`flex justify-center items-center gap-2 mt-10 ${animateText("delay-400")}`}>
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer
                ${
                  i === activeIndex
                    ? "w-6 bg-[#734BDF]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }
              `}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
        </div>

        {/* Supported Brands Section */}
        <div className={`mt-24 pt-12 text-center ${animateText("delay-500")}`}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 w-full">
            <div className="h-[1px] bg-white/10 flex-1"></div>
            <p className="text-xs sm:text-base font-semibold text-white tracking-wide shrink-0">
              Supported by Brands That Inspire Innovation
            </p>
            <div className="h-[1px] bg-white/10 flex-1"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-[#161A2D] shrink-0 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                Logoipsum
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-[#161A2D] shrink-0 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="3" />
                  <circle cx="12" cy="17" r="3" />
                  <circle cx="7" cy="12" r="3" />
                  <circle cx="17" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                Logoipsum
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-[#161A2D] shrink-0 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 8c2.5 0 3.5 1 5 1s2.5-1 5-1 3.5 1 5 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1V8zm0 5c2.5 0 3.5 1 5 1s2.5-1 5-1 3.5 1 5 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1v-2z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                Logoipsum
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-[#161A2D] shrink-0 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                Logoipsum
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-[#161A2D] shrink-0 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">
                Logoipsum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
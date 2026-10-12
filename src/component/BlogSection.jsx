import { useState, useEffect, useRef } from "react";
import BlogSection1 from "../../image/BlogSection-1.png";
import BlogSection2 from "../../image/BlogSection-2.png";
import BlogSection3 from "../../image/BlogSection-3.png";

export default function BlogSection() {
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

  const rightBlogs = [
    {
      author: "Esther Howard",
      title: "Simple Self-Defense Skills Everyone Should Learn for Safety",
      image: BlogSection2,
    },
    {
      author: "Esther Howard",
      title: "The Power of Networking: Building Connections That Last",
      image: BlogSection3,
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
      id="blog"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-[#161A2D] relative overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div
            className={`inline-flex items-center gap-2 mb-3 ${animateText("delay-75")}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#734BDF]"></span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#161A2D]">
              Latest Blog
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${animateText("delay-150")}`}
          >
            Explore our latest insights stories and updates
          </h2>
        </div>

        {/* Main Grid / Flex Container */}
        <div
          className={`flex flex-col lg:flex-row gap-8 items-stretch transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Left Large Blog Card */}
          <div className="w-full lg:w-[45%] bg-[#161A2D]/10 text-[#161A2D] rounded-[32px] p-6 sm:p-4 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <div>
              {/* Blog Image */}
              <div className="rounded-[24px] overflow-hidden mb-6 h-[260px] sm:h-[320px]">
                <img
                  src={BlogSection1}
                  alt="Mastering Public Speaking"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Author Info */}
              <div
                className={`flex items-center gap-2 text-sm text-gray-500 mb-3 ${animateText("delay-200")}`}
              >
                <svg
                  className="w-4 h-4 text-[#734BDF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">Esther Howard</span>
              </div>

              {/* Title */}
              <h3
                className={`text-xl sm:text-2xl font-bold mb-3 leading-snug ${animateText("delay-300")}`}
              >
                Mastering Public Speaking: Expert Tips for Confident
                Presentations
              </h3>

              {/* Description */}
              <p
                className={`text-gray-600 text-sm sm:text-base font-normal leading-relaxed mb-6 ${animateText("delay-400")}`}
              >
                Improve your communication skills with proven techniques used by
                world-class speakers to captivate and inspire audiences.
              </p>
            </div>

            <div>
              <div className="w-full h-[1px] bg-gray-200 mb-5"></div>
              {/* Read More Link */}
              <a
                href="#read-more"
                className={`inline-flex items-center gap-2 text-[#734BDF] font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer ${animateText("delay-500")}`}
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side Small Blog Cards (Stacked Vertically) */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 max-w-[720px]">
            {rightBlogs.map((blog, index) => (
              <div
                key={index}
                className="flex-1 bg-[#161A2D]/10 text-[#161A2D] rounded-[32px] p-4 sm:p-2.5 flex flex-col sm:flex-row gap-7.5 shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Small Blog Image */}
                <div className="w-full sm:w-[343px] h-[180px] sm:h-[343px] rounded-[20px] overflow-hidden shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between h-full w-full mr-0 sm:mr-20">
                  <div>
                    {/* Author Info */}
                    <div
                      className={`flex items-center gap-2 text-xs text-gray-500 mb-2 mt-0 sm:mt-12.5 ${animateText(index === 0 ? "delay-200" : "delay-300")}`}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#734BDF]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="font-medium">{blog.author}</span>
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-base sm:text-lg font-bold mb-4 leading-snug ${animateText(index === 0 ? "delay-300" : "delay-400")}`}
                    >
                      {blog.title}
                    </h4>
                  </div>

                  <div className="mb-0 sm:mb-12.5">
                    {/* Clean White Divider Line */}
                    <div className="w-full h-[1px] bg-black/10 mb-3"></div>

                    {/* Read More Link */}
                    <a
                      href="#read-more"
                      className={`inline-flex items-center gap-2 text-[#734BDF] font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 cursor-pointer ${animateText(index === 0 ? "delay-400" : "delay-500")}`}
                    >
                      Read More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

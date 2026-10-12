import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  // IntersectionObserver to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentFooter = footerRef.current;
    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  // Reusable helper classes for elements animation
  const animateText = (delayClass = "delay-100") =>
    `transition-all duration-700 transform ease-out ${delayClass} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-[#0f0c1b] text-white relative overflow-hidden pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[350px] bg-[#734BDF]/20 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Top Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-white/10">
          {/* Left Title */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight text-white ${animateText("delay-100")}`}>
              Join our newsletter for event important announcement
            </h2>
          </div>

          {/* Right Newsletter Input & Note */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-3">
            {/* Note text above input */}
            <div className={`flex items-center gap-2 text-xs sm:text-sm text-gray-300 ${animateText("delay-200")}`}>
              <svg
                className="w-4 h-4 text-purple-400 shrink-0 transition-transform duration-500 hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span>
                Stay informed with instant updates delivered straight to your
                inbox.
              </span>
            </div>

            {/* Input Form Box */}
            <form
              onSubmit={handleSubmit}
              className={`w-full sm:w-[450px] bg-[#1a162b] border border-white/10 rounded-full p-1.5 flex items-center justify-between focus-within:border-[#734BDF] transition-all duration-300 ${animateText("delay-300")}`}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent text-white placeholder-gray-500 px-5 text-sm sm:text-base focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-[#734BDF] hover:bg-[#623bc2] text-white p-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 shadow-lg cursor-pointer"
                aria-label="Subscribe"
              >
                {/* Paper Plane Send Icon */}
                <svg
                  className="w-5 h-5 fill-current transform rotate-45 -translate-x-0.5 transition-transform duration-300 hover:rotate-[60deg]"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Middle Footer Navigation Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Info (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <div className={`flex items-center gap-3 ${animateText("delay-100")}`}>
              <div className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-white shadow-md transition-transform duration-500 hover:rotate-12">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Evenza<span className="text-[#734BDF]">.</span>
              </span>
            </div>

            <p className={`text-gray-400 text-sm leading-relaxed max-w-sm font-light ${animateText("delay-200")}`}>
              Experience a world-class conference designed to inspire
              innovation, empower professionals, and connect leaders from around
              the globe.
            </p>

            {/* Social Icons with Real SVGs */}
            <div className={`flex items-center gap-3 pt-2 ${animateText("delay-300")}`}>
              {[
                {
                  label: "Pinterest",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 0 0-4.33 23.17c-.1-.94-.2-2.4.04-3.44l.84-3.58s-.22-.44-.22-1.09c0-1.02.59-1.78 1.33-1.78.63 0 .93.47.93 1.04 0 .63-.4 1.58-.61 2.46-.17.74.37 1.34 1.1 1.34 1.32 0 2.33-1.39 2.33-3.4 0-1.78-1.28-3.03-3.11-3.03-2.12 0-3.37 1.59-3.37 3.23 0 .64.25 1.33.56 1.71.06.07.07.13.05.2-.02.08-.07.3-.08.34-.03.11-.1.14-.23.08-.85-.39-1.39-1.62-1.39-2.61 0-2.12 1.54-4.07 4.45-4.07 2.34 0 4.16 1.67 4.16 3.9 0 2.32-1.46 4.19-3.49 4.19-.68 0-1.32-.35-1.54-.77l-.42 1.62c-.15.58-.57 1.31-.85 1.76A12 12 0 1 0 12 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter/X",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#social"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-white hover:border-[#734BDF] hover:bg-[#734BDF]/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className={`text-base font-bold text-white mb-5 ${animateText("delay-100")}`}>Quick Links</h4>
            <ul className={`space-y-3 text-sm text-gray-400 font-light ${animateText("delay-200")}`}>
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="hover:text-white transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Schedules (Col Span 2.5) */}
          <div className="lg:col-span-2.5">
            <h4 className={`text-base font-bold text-white mb-5 ${animateText("delay-150")}`}>Schedules</h4>
            <ul className={`space-y-3 text-sm text-gray-400 font-light ${animateText("delay-250")}`}>
              <li>
                <a
                  href="#management"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Event Management
                </a>
              </li>
              <li>
                <a
                  href="#streaming"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Live Streaming
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Virtual Event Setup
                </a>
              </li>
              <li>
                <a
                  href="#keynote"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Keynote Sessions
                </a>
              </li>
              <li>
                <a
                  href="#networking"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Networking Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch (Col Span 2.5) */}
          <div className="lg:col-span-2.5 ml-0 lg:ml-22.5">
            <h4 className={`text-base font-bold text-white mb-5 whitespace-nowrap ${animateText("delay-200")}`}>
              Get In Touch
            </h4>
            <div className={`space-y-3 text-sm text-gray-400 font-light ${animateText("delay-300")}`}>
              <p className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                +00 123 456 789
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                support@domainname.com
              </p>

              {/* Longer Divider Line using negative margin & min-width */}
              <div className="w-[120%] -mr-10 min-w-[280px] border-t border-white/10 my-4"></div>

              <p className="pt-1 leading-relaxed whitespace-nowrap">
                45/2 Central Business Innovation
                <br />
                Near International Trade Tower
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className={`pt-8 border-t border-white/10 text-center ${animateText("delay-400")}`}>
          <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
            Copyright © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
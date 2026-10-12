import React, { useState, useEffect, useRef } from "react";
import logoImg from "../../image/logo.png";
import downVector from "../../image/down-vector.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Smooth scroll behavior add করার জন্য HTML ট্যাগ এ স্টাইল যোগ করা
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`nav__container fixed top-0 left-0 w-full bg-slate-900/40 backdrop-blur-md border-b border-white/10 flex flex-row justify-between items-center px-4 sm:px-6 md:px-18 py-4 z-50 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <a href="#home" className="cursor-pointer">
        <img src={logoImg} alt="Logo" className="h-8 w-auto md:h-10" />
      </a>

      {/* Desktop Menu */}
      <ul className="nav__list hidden text-white lg:flex items-center gap-6 text-[16px] font-medium">
        <li>
          <a
            href="#home"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Home <img src={downVector} alt="vector" />
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span>About Us</span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#schedule"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span>Schedule</span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span>Blog</span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#pages"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Pages <img src={downVector} alt="vector" />
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="group relative inline-block py-1 transition-all duration-300"
          >
            <span>Contact Us</span>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
      </ul>

      {/* Right side CTA Button & Mobile Hamburger Icon */}
      <div className="flex items-center gap-3">
        <a
          href="#pricing"
          className="hidden sm:inline-block bg-[#734BDF] text-white text-[14px] md:text-[16px] font-bold rounded-[100px] px-5 py-2.5 md:py-3 whitespace-nowrap hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Join the Conference
        </a>

        {/* Hamburger Menu Button for Mobile/Tablet */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none p-2 bg-white/10 rounded-lg backdrop-blur-md cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl text-white px-6 py-6 border-b border-white/10 transition-all duration-300 absolute w-full left-0 top-full z-40 shadow-2xl">
          <ul className="flex flex-col gap-4 text-[16px] font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#pages"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-[#734BDF]"
              >
                Contact Us
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="inline-block text-center w-full bg-[#734BDF] text-white text-[14px] font-bold rounded-[100px] py-3 shadow-md cursor-pointer"
              >
                Join the Conference
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
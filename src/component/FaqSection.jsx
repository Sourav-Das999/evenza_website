import { useState, useEffect, useRef } from "react";
import faqImage from "../../image/faqs-image.png"; // আপনার সঠিক ইমেজের পাথ দিন

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(2); // ৩ নম্বর FAQ-টি ডিফল্টভাবে ওপেন রাখা হয়েছে (Figma অনুযায়ী)
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "1. How does the complete event register process actually work?",
      answer:
        "Registering is simple. Choose your desired package, fill out the basic attendee form, and complete payment to receive your digital ticket instantly.",
    },
    {
      question: "2. Where is the main event venue located precisely?",
      answer:
        "The event takes place at our primary convention hall with full accessibility and central city connections. Full address details are sent with your ticket.",
    },
    {
      question: "3. Can attendees freely switch between sessions and tracks?",
      answer:
        "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
    {
      question:
        "4. Does the event provide virtual participation options online?",
      answer:
        "Yes, we provide live virtual streaming for selected pass holders so you can join keynotes and panel discussions from anywhere.",
    },
    {
      question: "5. What is the event refund and cancellation policy?",
      answer:
        "Tickets can be canceled up to 7 days before the event for a full refund. You can also transfer your pass to a colleague anytime.",
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#161A2D] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Image Container */}
        <div
          className={`lg:col-span-5 relative transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          {/* Main Wrapper with Rounded Border & White Padding Background */}
          <div className="relative rounded-4xl overflow-hidden p-0.75">
            {/* Main Image */}
            <img
              src={faqImage}
              alt="Customer with microphone"
              className="w-full object-cover object-center rounded-[24px]"
            />

            {/* Floating Purple Badge with White Outline-Padding */}
            <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-[32px] border border-white">
              <div className="bg-[#734BDF] text-white p-6 sm:p-7 rounded-[20px] shadow-lg max-w-[210px] sm:max-w-[230px]">
                <h4 className="text-[20px] sm:text-lg font-bold leading-tight mb-12.5">
                  Your Questions, <br />
                  Clearly Answer
                </h4>

                <div className="flex flex-col gap-4.25">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-[#734BDF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-[16px] sm:text-sm text-white tracking-wide">
                    +00 123 456 789
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side FAQ Content */}
        <div
          className={`lg:col-span-7 transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Subtitle Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-3 ${animateText("delay-100")}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#734BDF]"></span>
            <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
              FAQs
            </span>
          </div>

          {/* Section Main Title */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#161A2D] mb-8 leading-tight ${animateText("delay-200")}`}
          >
            What our customers say about their experience
          </h2>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-[#F8F9FA] rounded-[20px] transition-all duration-300 overflow-hidden border border-gray-100 ${animateText(`delay-${300 + index * 100}`)}`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#161A2D]">
                      {faq.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <div className="w-7 h-7 rounded-full border border-purple-200 bg-purple-50 text-[#734BDF] flex items-center justify-center shrink-0 text-lg font-bold transition-transform duration-300 hover:scale-110">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Answer Content Collapse */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-500 leading-relaxed transition-all duration-300 border-t border-gray-200/50 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

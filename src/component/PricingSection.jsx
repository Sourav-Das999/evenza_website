import { useState, useEffect, useRef } from "react";

export default function PricingSection() {
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

  const plans = [
    {
      name: "Basic Package",
      subtitle: "Perfect for first-time attend",
      price: "49",
      buttonText: "Get Basic Pass",
      popular: false,
      icon: <img src="../../image/icon-pricing-1.svg" alt="" />,
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge",
      ],
    },
    {
      name: "Standard Pass",
      subtitle: "Perfect for first-time attend",
      price: "59",
      buttonText: "Get Standard Pass",
      popular: true,
      icon: <img src="../../image/icon-pricing-2.svg" alt="" />,
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge",
      ],
    },
    {
      name: "Premium Pass",
      subtitle: "Perfect for first-time attend",
      price: "69",
      buttonText: "Get Premium Pass",
      popular: false,
      icon: <img src="../../image/icon-pricing-3.svg" alt="" />,
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge",
      ],
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-3 ${animateText("delay-75")}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#734BDF]"></span>
            <span className="text-[14px] font-semibold text-[#161A2D] uppercase tracking-wider">
              Pricing Plan
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#161A2D] max-w-198 mx-auto leading-tight ${animateText("delay-150")}`}
          >
            Discover our flexible pricing plans for attendees
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              className={`relative bg-[#F8F9FA] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Popular Diagonal Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none rounded-tr-[24px]">
                  <div className="bg-[#734BDF] text-white text-[11px] font-bold tracking-wider py-1.5 text-center uppercase transform rotate-45 translate-x-8 translate-y-4 w-40 shadow-md">
                    Popular
                  </div>
                </div>
              )}

              {/* Card Upper Content */}
              <div>
                {/* Header Icon + Titles */}
                <div
                  className={`flex items-center gap-4 mb-6 pt-2 pl-2 ${animateText("delay-200")}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#734BDF] flex items-center justify-center shadow-md">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-[#161A2D]">
                      {plan.name}
                    </h3>
                    <p className="text-[16px] text-[#737681]">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price Display */}
                <div
                  className={`flex items-baseline gap-1 mb-6 pl-2 ${animateText("delay-300")}`}
                >
                  <span className="text-[48px] sm:text-5xl font-bold text-[#161A2D]">
                    ${plan.price}
                  </span>
                  <span className="text-[16px] text-[#737681]">/One-Time</span>
                </div>

                {/* White Container Box for Included Features */}
                <div
                  className={`bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm ${animateText("delay-400")}`}
                >
                  <h4 className="text-[20px] font-bold text-[#161A2D] mb-1">
                    What's Included:
                  </h4>
                  <p className="text-[16px] text-[#737681] mb-5">
                    It could relate to a subscription
                  </p>

                  <div className="w-full h-[1px] bg-gray-100 mb-5"></div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-[16px] font-medium text-[#737681]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#734BDF] flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-[#734BDF] hover:bg-[#5f3ac8] text-white font-bold py-3.5 rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantees Info */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-semibold text-gray-700 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#734BDF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Get 30 day free trial</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#734BDF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>No any hidden fee pay</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#734BDF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>You can cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

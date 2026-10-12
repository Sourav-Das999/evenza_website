import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Announcement from "./component/Announcement";
import Evenza from "./component/Evenza";
import CoreFeature from "./component/CoreFeature";
import KeyBenefits from "./component/KeyBenefits";
import EventSchedule from "./component/EventSchedule";
import Speakers from "./component/Speakers";
import HighlightsSection from "./component/HighlightsSection";
import PricingSection from "./component/PricingSection";
import VideoSection from "./component/VideoSection";
import FaqSection from "./component/FaqSection";
import TestimonialsSection from "./component/TestimonialsSection";
import BlogSection from "./component/BlogSection";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      {/* Navbar section */}
      <Navbar isVisible={true} />

      {/* Header section */}
      <Header />

      {/* Announcement section */}
      <Announcement />

      {/* Evenza section */}
      <Evenza />

      {/* CoreFeature section */}
      <CoreFeature />

      {/* KeyBenefits section */}
      <KeyBenefits />

      {/* EventSchedule section */}
      <EventSchedule />

      {/* Speakers section */}
      <Speakers />

      {/* HighlightsSection section */}
      <HighlightsSection />

      {/* PricingSection section */}
      <PricingSection />

      {/* VideoSection section */}
      <VideoSection />

      {/* FaqSection section */}
      <FaqSection />

      {/* TestimonialsSection section */}
      <TestimonialsSection />

      {/* BlogSection section */}
      <BlogSection />

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default App;

"use client";

import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import CtaSection from "./components/CtaSection";
import FAQSection from "./components/FaqSection";
import Hero from "./components/Hero";
import PopularDestination from "./components/PopularDestination";
import Testimonial from "./components/Testimonial";
import WhoAreWe from "./components/WhoAreWe";
import WhyTravel from "./components/WhyTravel";
import PopUp from "./components/PopUp";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 30000);
  }, []);
  return (
    <>
      <Hero />
      <PopularDestination />
      <Categories />
      <WhoAreWe />
      <Testimonial />
      <FAQSection />
      <WhyTravel />
      <CtaSection />
      {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
    </>
  );
}
   
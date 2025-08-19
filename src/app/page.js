import Categories from "./components/Categories";
import CtaSection from "./components/CtaSection";
import FAQSection from "./components/FaqSection";
import PopularDestination from "./components/PopularDestination";
import WhyTravel from "./components/WhyTravel";

export default function Home() {
  return (
    <>
      <PopularDestination />
      <Categories />
      <FAQSection />
      <WhyTravel />
      <CtaSection />
    </>
  );
}

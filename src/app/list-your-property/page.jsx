import Image from "next/image";
import StepsSection from "./components/StepsSection";
import WhyTravel from "../components/WhyTravel";
import Headline from "./components/Headline";

const ListYourProperty = () => {
  return (
    <>
      <Headline />
      <section className="w-full aspect-[5/3] md:-top-16 relative -z-10">
        <Image
          src="/images/property_list.svg"
          alt="property"
          fill
          className="object-contain"
        />
      </section>
      <StepsSection />
      <WhyTravel />
    </>
  );
};

export default ListYourProperty;

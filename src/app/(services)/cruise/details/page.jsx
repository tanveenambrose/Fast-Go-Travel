import CabinCards from "../components/CabinCards";
import CruiseCarousel from "../components/CruiseCarousel";
import CruiseOverview from "../components/CruiseOverview";
import CruisePackageInfo from "../components/CruisePackageInfo";

const CruiseDetails = () => {
  return (
    <>
      <CruiseCarousel />
      <CruisePackageInfo />
      <CruiseOverview />
      <CabinCards />
    </>
  );
};

export default CruiseDetails;

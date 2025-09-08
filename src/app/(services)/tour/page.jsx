import ServiceBanner from "../components/ServiceBanner";
import TourLeftFilter from "./components/TourLeftFilter";
import TourPackages from "./components/TourPackages";

const Tour = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-4">
        {/* Left Side (Filters) */}
        <div className="hidden lg:block col-span-3">
          <TourLeftFilter />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <TourLeftFilter />
          </details>
        </div>

        {/* Right Side (Results) */}
        <div className="col-span-9">
          <TourPackages />
        </div>
      </div>
    </div>
  );
};

export default Tour;

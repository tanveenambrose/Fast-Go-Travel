import ServiceBanner from "../components/ServiceBanner";
import HotelLeftSideBar from "./components/HotelLeftSideBar";
import HotelSearchResults from "./components/HotelSearchResults";

const Hotel = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ServiceBanner />
      <div className="p-4 lg:grid lg:grid-cols-12 gap-4">
        {/* Left Side (Filters) */}
        <div className="hidden lg:block col-span-3">
          <HotelLeftSideBar />
        </div>

        {/* For mobile: Filters as collapsible */}
        <div className="lg:hidden mb-4">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-semibold">Filters</summary>
            <HotelLeftSideBar />
          </details>
        </div>

        {/* Right Side (Results) */}
        <div className="col-span-9">
          <HotelSearchResults />
        </div>
      </div>
    </div>
  );
};

export default Hotel;

import BusTravelerDetails from "../components/BusTravelerDetails";
import ReviewBusBooking from "../components/ReviewBusBooking";
import SelectBusSeat from "../components/SelectBusSeats";

const BusBookingDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ReviewBusBooking />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-1 lg:col-span-8">
          <BusTravelerDetails />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <SelectBusSeat />
        </div>
      </div>
    </div>
  );
};

export default BusBookingDetails;

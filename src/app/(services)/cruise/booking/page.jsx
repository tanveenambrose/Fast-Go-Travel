import AddCotraveler from "../components/AddCotraveler";
import BookingForm from "../components/BookingForm";
import CruiseBookingSummary from "../components/CruiseBookingSummary";

const Booking = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">
      <div className="col-span-1 lg:col-span-7 my-7 md:my-14">
        <BookingForm />
        <AddCotraveler />
      </div>
      <div className="col-span-1 lg:col-span-3 my-7 md:mt-40">
        <CruiseBookingSummary />
      </div>
    </div>
  );
};

export default Booking;

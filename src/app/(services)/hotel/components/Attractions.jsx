import { CalendarCheck2, Languages, Wallet } from "lucide-react";

const Attractions = () => {
  return (
    <section className="mt-16 mx-5 md:mx-0">
      <div className="flex flex-col md:flex-row md:gap-32">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Nearby Attractions
          </h2>
          <p className="text-[#989898] my-1 md:my-2">
            Bosundhara Station - 0.3 km
          </p>
          <p className="text-[#989898]">
            Shinjuku Gyoen National Garden - 0.5 km
          </p>
          <p className="text-[#989898] my-1 md:my-2">Meiji Shrine - 2.1 km</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Transportation</h2>
          <p className="text-[#989898] my-1 md:my-2">
            Subway: 5 min walk to Shinjuku Station
          </p>
          <p className="text-[#989898]">
            Train: 5 min walk to Shinjuku Station
          </p>
          <p className="text-[#989898] my-1 md:my-2">
            Airport: 45 min by airport shuttle
          </p>
        </div>
      </div>

      {/* important information */}
      <div className="mt-10">
        <h1 className="md:text-3xl text-2xl font-semibold mb-5">
          Important Information
        </h1>
        <div className="flex items-center gap-5">
          <CalendarCheck2 size={25} color="#989898" />
          <div>
            <h4 className="text-xl">Check-in/out</h4>
            <p className="text-sm text-slate-500">
              Check-in from 15:00, check-out by 11:00
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 my-5">
          <Languages size={25} color="#989898" />
          <div>
            <h4 className="text-xl">Languages</h4>
            <p className="text-sm text-slate-500">English, Japanese</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Wallet size={25} color="#989898" />
          <div>
            <h4 className="text-xl">Payment</h4>
            <p className="text-sm text-slate-500">
              Credit cards, cash accepted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;

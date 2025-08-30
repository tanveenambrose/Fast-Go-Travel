import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import VisaTabForm from "./VisaTabForm";
import VisaSearchBar from "./VisaSearchBar";
import showToast from "@/utils/showToast";
import { Search } from "lucide-react";

const VisaType = () => {
  return (
    <div>
      <h1 className="text-[#055BC9] text-2xl md:text-3xl font-bold">
        Visa Type
      </h1>
      <div className="flex gap-4 mt-6">
        <Button variant="blue" className="px-7">
          All
        </Button>
        <Button variant="blue">Tourist</Button>
        <Button variant="blue" className="px-5">
          Work
        </Button>
        <Button variant="blue">Student</Button>
      </div>

      {/* checkbox */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-7">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">30 Day Tourist Visa</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">60 Day Tourist Visa</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">90 Day Tourist Visa</Label>
        </div>
      </div>

      <VisaTabForm />

      <div className="flex gap-2 flex-col md:flex-row">
        <VisaSearchBar />
        <div className="w-full lg:w-auto mt-3 lg:mt-2">
          <button
            onClick={showToast}
            className="w-full lg:w-auto flex justify-center items-center gap-2 px-5 py-4 lg:py-6 text-base font-bold text-white bg-gradient-to-r from-[#0A60F9] to-[#B004FE] rounded-lg cursor-pointer lg:px-10 lg:text-lg hover:from-purple-600 hover:to-purple-700 transition-colors duration-300"
          >
            <Search />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaType;

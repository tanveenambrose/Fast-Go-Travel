import Countries from "./components/Countries";
import InsuranceCard from "./components/InsuranceCard";
import { CheckCircle, Headphones } from "lucide-react";

const Insurence = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
        <div className=" flex flex-col md:grid md:grid-cols-12 gap-9 px-4 my-20">
            <div className="md:col-span-5">
                <section className="max-w-2xl mx-auto px-4">
      {/* Title */}
      <h2 className="text-[44.351px] font-semibold leading-[1.3] text-[#161616]">
        International Travel + <br /> Medical Insurance & <br /> Assistance
      </h2>

      {/* Subtext */}
      <p className="text-[18.262px] text-[#161616] py-4">
        99% Claim settlement ratio
      </p>

      {/* Features */}
      <div className="mt-6 ">
        {/* Card 1 */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex items-center justify-center w-16 h-16 mt-4 rounded-lg bg-[#E9F4FF]">
            <img src="/icons/shield-tick.png" className="w-10 h-10" alt="" />
          </div>
          <div>
            <h3 className="text-base text-[28px] font-semibold text-[#161616]">
              Comprehensive travel + medical <br /> insurance by FastGo
            </h3>
            <p className="text-[18px] text-gray-500">
              Insurance policies covering country-specific visa requirements and
              Schengen Visa Compliant plans.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-x-6">
          <div className="flex items-center justify-center w-20 h-18 mt-4 rounded-lg bg-[#E9F4FF]">
            <img src="/icons/headphone-tick.png" className="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 className="text-base text-[28px] font-semibold text-[#161616]">
              Global ON-TRIP Assistance for Travel & Medical Needs
            </h3>
            <p className="text-[18px] text-gray-500 mt-1">
              24/7 call and on-ground support for ambulance, medical
              consultation, baggage loss/delay, lost baggage recovery and more
            </p>
          </div>
        </div>
      </div>
    </section>
            </div>




            <div className="md:col-span-7 rounded-[17.135px] bg-white shadow-[0_3.213px_32.128px_0_rgba(0,0,0,0.16)]">
                <div className="p-6">
                    <Countries/>
                    <InsuranceCard/>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Insurence;
import Image from "next/image";

export default function FareSummary() {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/images/arab_emirates.svg"
          alt="flag"
          height={60}
          width={30}
        />
        <span className="font-semibold text-lg md:text-xl ">Arab Emirates</span>
      </div>

      <div className="border-[1px] mb-4"></div>

      <h3 className="text-md font-semibold mb-3">Fare Summary</h3>
      <div className="text-sm space-y-2">
        <div className="flex justify-between font-semibold">
          <span>Adult (1 traveler)</span>
        </div>
        <div className="flex justify-between">
          <span>Base Fare</span>
          <span>6,000 BDT</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes + Fees</span>
          <span>00 BDT</span>
        </div>
        <div className="border-[1px] my-2"></div>
        <div className="flex justify-between font-semibold">
          <span>Sub-Total</span>
          <span>6,000 BDT</span>
        </div>
        <div className="flex justify-between font-bold  pt-2">
          <span>You Pay (For 1 Traveler)</span>
          <span>6,000 BDT</span>
        </div>
      </div>
    </div>
  );
}

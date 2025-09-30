import insuranceData from "../../data/insurance.json";
import TravellerForm from "../../components/TravellerForm";

export default async function  InsuranceDetails({ params }) {
  const { id } = await params;

  if (!id) {
    console.error("params.id is undefined", params);
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Invalid parameters
      </div>
    );
  }

  const plan = insuranceData.find((item) => String(item.id) === String(id));

  if (!plan) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Plan not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 font-manrope">
      <TravellerForm plan={plan} />
    </div>
  );
}

"use client";

import { FaArrowLeft } from "react-icons/fa";

const ReviewPayment = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Payment Method
              </h2>

              {/* Selected Card */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <span className="text-[#161616] font-">
                  Visa ending in 1234
                </span>
              </div>

              {/* Card Details */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-[#989898] text-base mb-1">
                    Card Holder Name
                  </div>
                  <div className="text-[#161616] text-lg font-medium">John Doe</div>
                </div>
                <div>
                  <div className="text-[#989898] text-base mb-1">Expiry Date</div>
                  <div className="text-[#161616] text-lg font-medium">06/27</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[#989898] text-base mb-1">CVV</div>
                <div className="text-[#161616] text-lg font-medium">***</div>
              </div>

              {/* Edit Payment Details Link */}
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                <a href="/payment" className="flex gap-2 justify-center items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit Payment Details
                </a>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 h-fit">
            <div className="p-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">
                Order Summary
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#989898]">Booking Type:</span>
                <span className="font-medium text-[#161616] text-right">
                  Soudia Coach Service Bus
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#989898]">Destination:</span>
                <span className="font-medium text-[#161616]">Dhaka to Bangkok</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#989898]">Travel Dates:</span>
                <span className="font-medium text-right text-[#161616]">
                  June 10, 2025 - June 15, 2025
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#989898]">Travelers:</span>
                <span className="font-medium text-[#161616]">2 Adults, 1 Child</span>
              </div>

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl text-[#161616] font-bold">
                    Base Amount:
                  </span>
                  <span className="font-semibold text-[#161616] text-xl">BDT 25,000</span>
                </div>

                <div className="flex justify-between items-center mb-3 mt-3">
                  <span className="text-[#055BC9]">Discount Applied:</span>
                  <span className="text-[#055BC9] font-bold">
                    BDT 2,500 (10% off)
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#055BC9]">Promo Code: SAVE10</span>
                  <button className="text-[#055BC9] hover:text-blue-700 font-medium">
                    Change Promo Code
                  </button>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      Amount Payable:
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      BDT 22,500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6 max-w-4xl mx-auto">
          {/* Terms & Conditions Checkbox */}
          <div className=" bg-white rounded-lg shadow-xl border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-gray-700 ">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button onClick={onBack}  className="flex items-center gap-2 px-6 py-3 border-2 border-[#989898] rounded-lg text-[#989898] text-lg font-semibold transition-colors">
            <FaArrowLeft />
              Back
            </button>

            <button onClick={onNext} className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Confirm Payment
            </button>
          </div>

          {/* Security Information */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-[#989898] text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Your payment is secure with SSL Commerce
            </div>

            <div className="flex justify-center mt-5">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                Secured by SSL Commerce
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPayment;

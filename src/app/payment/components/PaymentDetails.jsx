"use client"


import { useState } from "react"

const PaymentDetails = ({onNext}) => {
    const [promoCode, setPromoCode] = useState("")
    const [activeTab, setActiveTab] = useState("card")
    return (
        <div className="  p-4 md:p-8">
          <div className="max-w-3xl mx-auto py-4 md:py-12 text-center">
            <h1 className="text-4xl font-bold text-[#161616]">Secure Payment</h1>
            <p className="text-[#989898] mt-2 text-lg">Complete your booking with our secure payment options</p>
          </div>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Payment Form */}
          <div className=" shadow-xl border ">
            <div className="p-6">
              <div className="w-full mb-6 ">
                <div className="grid grid-cols-3 border-b-  p-1">
                  <button
                    onClick={() => setActiveTab("card")}
                    className={`text-sm py-2 px-3 font-semibold  transition-colors ${
                      activeTab === "card" ? " text-[#055BC9] border-b-2 border-b-[#055BC9] " : "text-gray-600 hover:text-gray-900 border-b-2 border-gray-200"
                    }`}
                  >
                    Credit/Debit Card
                  </button>
                  <button
                    onClick={() => setActiveTab("bank")}
                    className={`text-sm py-2 px-3 font-semibold transition-colors ${
                      activeTab === "bank" ? "text-[#055BC9] border-b-2 border-b-[#055BC9]" : "text-gray-600 hover:text-gray-900 border-b-2 border-gray-200"
                    }`}
                  >
                    Bank Payment
                  </button>
                  <button
                    onClick={() => setActiveTab("mobile")}
                    className={`text-sm py-2 px-3 font-semibold transition-colors ${
                      activeTab === "mobile" ? "text-[#055BC9] border-b-2 border-b-[#055BC9]" : "text-gray-600 hover:text-gray-900 border-b-2 border-gray-200"
                    }`}
                  >
                    Mobile & Online
                  </button>
                </div>
              </div>

              {activeTab === "card" && (
                <div className="space-y-6">
                  {/* Payment Method Icons */}
                  <div className="flex gap-3 mb-6">
                    <img src="/images/paymentlogo.png" alt="" />
                  </div>

                  {/* Card Holder Name */}
                  <div className="space-y-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-[#161616]">
                      Card Holder Name
                    </label>
                    <input
                      id="cardName"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Card Number */}
                  <div className="space-y-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-[#161616]">
                      Card Number
                    </label>
                    <div className="relative">
                      <img src="/icons/icon.png" className=" absolute top-2 left-2 h-8 w-6" alt="" />
                      <input 
                      
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full h-12 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      
                    </div>
                  </div>

                  {/* Expiry Date and CVV */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        id="expiryMonth"
                        type="text"
                        placeholder="MM"
                        maxLength={2}
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expiryYear" className="block text-sm font-medium text-[#161616] opacity-0">
                        Year
                      </label>
                      <input
                        id="expiryYear"
                        type="text"
                        placeholder="YY"
                        maxLength={2}
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cvv" className="block text-sm font-medium text-[#161616]">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pay Now Button */}
                  <button onClick={onNext} className="w-full h-12 bg-[#055BC9] hover:bg-blue-700 text-white text-lg font-medium rounded-md transition-colors mt-8">
                    Pay Now
                  </button>
                </div>
              )}

              {activeTab === "bank" && (
                <div className="space-y-6">
                {/* Payment Method Icons */}
                <div className="flex gap-3 mb-6">
                  <img src="/images/paymentlogo.png" alt="" />
                </div>

                {/* Card Holder Name */}
                <div className="space-y-2">
                  <label htmlFor="cardName" className="block text-sm font-medium text-[#161616]">
                    Card Holder Name
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Card Number */}
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-[#161616]">
                    Card Number
                  </label>
                  <div className="relative">
                    <img src="/icons/icon.png" className=" absolute top-2 left-2 h-8 w-6" alt="" />
                    <input 
                    
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full h-12 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    
                  </div>
                </div>

                {/* Expiry Date and CVV */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      id="expiryMonth"
                      type="text"
                      placeholder="MM"
                      maxLength={2}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="expiryYear" className="block text-sm font-medium text-[#161616] opacity-0">
                      Year
                    </label>
                    <input
                      id="expiryYear"
                      type="text"
                      placeholder="YY"
                      maxLength={2}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cvv" className="block text-sm font-medium text-[#161616]">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">!</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pay Now Button */}
                <button onClick={onNext} className="w-full h-12 bg-[#055BC9] hover:bg-blue-700 text-white text-lg font-medium rounded-md transition-colors mt-8">
                  Pay Now
                </button>
              </div>
              )}

              {activeTab === "mobile" && (
                <div className="text-center py-8 text-gray-500">
                  Mobile & online payment options will be displayed here
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 h-fit">
            <div className="p-6 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-8 items-center">
                <span className="text-gray-600">Booking Type :</span>
                <span className="font-medium">Flight + Hotel Package</span>
              </div>

              <div className="flex gap-12 items-center">
                <span className="text-gray-600">Destination :</span>
                <span className="font-medium">Dhaka to Bangkok</span>
              </div>

              <div className="flex gap-8 items-center">
                <span className="text-gray-600">Total Amount :</span>
                <span className="font-medium">BDT 25,000</span>
              </div>

              <div className="flex gap-8 items-center">
                <span className="text-[#055BC9]">Discount Applied :</span>
                <span className="text-[#055BC9] font-medium">BDT 2,500 (10% off)</span>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 py-2 px-3 border border-gray-300 rounded focus:outline-none "
                />
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors bg-transparent">
                  Apply
                </button>
              </div>

              {/* Amount Payable */}
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Amount Payable:</span>
                  <span className="text-xl font-bold text-blue-600">BDT 22,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PaymentDetails;  
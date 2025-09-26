// components/AvailablePlans.jsx

import { CheckCircle, Globe, HeartPulse, ShieldCheck, Wallet, Phone } from 'lucide-react';

export default function AvailablePlans() {
  return (
    <section className="bg-white text-gray-800 font-manrope">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className='flex flex-col lg:flex-row space-x-20'>


            <div className='flex-1 text-left '>
                <h1 className="text-[46px] font-semibold tracking-tight mb-4">
          Cover All Your Travel Insurance Needs with{' '}
          <span className="text-blue-600">FastGo</span>
        </h1>

        <p className="text-[16px] text-[#161616] font-normal max-w-3xl mb-8">
          Fastgo brings you comprehensive travel + medical insurance plans powered by Tata AIG, including trip
          cancellations, flight delays, lost luggage and medical expenses. Each plan is designed to protect your dream
          trips against unexpected challenges and to give you absolute peace of mind on your journey along with:
        </p>
            </div>


            <div className='flex-1 justify-center items-center content-center '>
                
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2   gap-4 mb-12">
          {/* Feature Cards */}
          <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
            <ShieldCheck className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-[14px] font-medium">Instant policy <span className='text-[14px] font-light'>generation</span></p>
            </div>
          </div>

          <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
            <HeartPulse className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-[14px] font-medium"><span className='text-[14px] font-light'>Comprehensive</span> Health Insurance <span className='text-[14px] font-light'>included</span></p>
            </div>
          </div>

          <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
            <Globe className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-[14px] font-medium"><span className='text-[14px] font-light'>Worldwide</span> cashless hospitalisation</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl  space-x-3 p-4 border border-[#E4E6E8] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.2)]">
            <Wallet className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-[14px] font-medium">Value for <span className='text-[14px] font-light'>money</span></p>
            </div>
          </div>
        </div>

            </div>
        </div>
        

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          What Kind of Plans Are Available?
        </h2>

        {/* Available Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Travel Insurance Card */}
          <div className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Insurance</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                Quick & easy claim process in simple 4 steps.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                100% Digital Claim & Settlement
              </li>
            </ul>
            <div className="mt-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <CheckCircle className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Travel Assistance Card */}
          <div className="bg-blue-50 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Assistance via Call</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                24X7 Availability on phone
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                Zero Hassle, 100% Convenience
              </li>
            </ul>
            <div className="mt-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Phone className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client'

const Confirmation = () => {
    return (
        <div className="  flex items-center justify-center p-4">
        <div className="max-w-3xl w-full   text-center">
          <div className="mt-10 pb-8">
           <div className="flex justify-center items-center">
            <img className="mb-10" src="/images/confirm.png" alt="" />
           </div>
  
            <h1 className="text-3xl font-bold text-[#000] mb-6">Thank You For Your Purchase</h1>
            <p className="text-[#989898] text-lg mb-8">Order #123RGR231567Y Confirmed</p>
  
            <div className="space-y-4 mb-3">
            <a href="/">
            <button className="w-full max-w-lg rounded text-sm mx-auto block bg-[#055BC9] text-white py-3 px-7   ">
                Go To Dashboard
              </button>
            </a>
  
              <button className="text-[#32C770] text-xl font-medium mt-6">Generate Receipt</button>
            </div>
  
            <div className=" pt-6 space-y-4">
              <p className="text-sm text-[#161616]">
                By making the purchase, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>
              </p>
  
              {/* Payment method logos */}
              <div className="flex justify-center  items-center gap-3 pt-4">
                <img src="/images/paymentlogo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Confirmation;
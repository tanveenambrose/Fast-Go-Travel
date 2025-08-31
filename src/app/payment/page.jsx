"use client"

import { useState } from "react"
import PaymentDetails from "./components/PaymentDetails";
import ReviewPayment from "./components/ReviewPayment";
import Confirmation from "./components/Confirmation";

const steps = [
  { id: 1, title: "Payment Details", status: "current" },
  { id: 2, title: "Review Payment", status: "upcoming" },
  { id: 3, title: "Confirmation", status: "upcoming" },
]

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed"
    if (stepId === currentStep) return "current"
    return "upcoming"
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
      {/* Stepper Navigation */}
      <nav aria-label="Progress shadow">
        <ol className="flex items-center justify-between">
          {steps.map((step, stepIdx) => {
            const status = getStepStatus(step.id)

            return (
              <li key={step.id} className="relative flex-1">
                {/* Step connector line */}
                {stepIdx !== steps.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-0.5">
                    <div className="w-full border-t-2 border-dotted border-gray-300"></div>
                  </div>
                )}

                {/* Step content */}
                <div className="relative flex flex-col items-center group">
                  {/* Step circle */}
                  <div className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full border-2 bg-white relative z-10 p-2">
                    {status === "completed" ? (
                      <svg
                        className="w-12 h-12 text-[#055BC9]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span
                        className={`text-lg font-medium ${
                          status === "current"
                            ? "text-white bg-[#055BC9] w-full h-full rounded-full flex items-center justify-center border-[#055BC9]"
                            : "text-[#161616] border-[#161616]"
                        }`}
                      >
                        {status === "current" && (
                          <span className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                            {step.id}
                          </span>
                        )}
                        {status === "upcoming" && step.id}
                      </span>
                    )}
                  </div>

                  {/* Step title */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs md:text-base font-medium ${
                        status === "current"
                          ? "text-[#055BC9] text-base md:text-lg font-semibold"
                          : status === "completed"
                          ? "text-[#989898]"
                          : "text-[#989898]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Step Content */}
      <div className="mt-10">
        {currentStep === 1 && (
          <PaymentDetails onNext={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <ReviewPayment
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && (
          <Confirmation onBack={() => setCurrentStep(2)} />
        )}
      </div>
    </div>
  )
}

export default Page

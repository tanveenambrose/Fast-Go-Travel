import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Shield,
  Headphones,
  FileText,
  Clock,
} from "lucide-react";

const FAQSection = () => {
  const faqData = [
    {
      question: "How do I book a trip through your website?",
      answer:
        "Booking a trip is simple! Just select your destination, travel dates, and preferences. Then follow the step-by-step process to complete your reservation with secure payment.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, most bookings can be cancelled or modified. The specific terms depend on the service provider and the rate you selected. Check your booking confirmation for details or contact our support team.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      question:
        "How can I contact customer support in case of an emergency during my trip?",
      answer:
        "We provide 24/7 emergency support. Call our emergency hotline at +1 (555) 123-HELP. You can also use the emergency contact feature in our mobile app for immediate assistance.",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "For customized travel experiences, please contact our travel experts who can tailor arrangements based on your specific preferences and needs.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "We offer a variety of loyalty programs and discounts for frequent travelers. Sign up for our newsletter to stay informed about special promotions and exclusive deals.",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and in some regions, bank transfers.",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we offer comprehensive travel insurance options during the booking process. You can select from various coverage levels to protect your trip against unforeseen circumstances.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      question: "What happens if my flight is delayed or canceled?",
      answer:
        "If your flight is delayed or canceled, we'll automatically notify you and help rebook alternative arrangements. If you purchased travel insurance through us, you may be eligible for compensation depending on the circumstances.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Yes, we provide detailed travel documentation including itineraries, booking confirmations, and destination information for all your trips through your account dashboard.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "We partner with trusted providers worldwide to ensure quality accommodations, transportation, and activities. All providers are vetted for safety and customer satisfaction.",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  return (
    <section className="pt-16 px-1 md:px-4">
      <div className="max-w-5xl mx-auto bg-no-repeat object-fit">
        <div className="text-center">
          <h6 className="text-base font-semibold text-blue-500 mb-4">
            We are here to answer your questions
          </h6>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>

        <div
          className="rounded-xl p-6 mb-7 lg:mb-12 pt-6 lg:pt-16 bg-no-repeat object-cover"
          style={{ backgroundImage: `url(/images/accordion_background.png)` }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-7 lg:gap-10"
          >
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex justify-between items-start w-full text-left font-medium text-gray-900 hover:text-blue-600 focus:outline-none py-3 lg:py-5 px-4 lg:px-7 bg-white shadow-md">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                      {faq.icon}
                    </span>
                    <span className="text-left">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-slate-50 shadow-md shadow-amber-200 p-5 rounded-md">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

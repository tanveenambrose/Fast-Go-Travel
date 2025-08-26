// components/WhyTravel.tsx
import Image from "next/image";

const features = [
  {
    icon: "/icons/security.png", // replace with your icon path
    title: "Security Assurance",
    desc: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "/icons/customer.png",
    title: "Customer Support",
    desc: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "/icons/policies.png",
    title: "Transparent Policies",
    desc: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "/icons/affiliations.png",
    title: "Reputable Affiliations",
    desc: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
];

export default function WhyTravel() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
          Why Travel With Us?
        </h2>
        <p className="text-gray-600/60 mt-4 mb-6 md:mb-12 text-base md:text-lg font">
          The best booking platform you can trust
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-[#f6f6f6] hover:bg-[#e9f4ff] shadow-[#e9f4ff] transition-colors duration-300 rounded-2xl shadow-sm p-6 hover:shadow-lg  ${
                index % 2 != 0 ? "md:mt-20" : "md:mb-20"
              }`}
            >
              <div className="flex justify-center">
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

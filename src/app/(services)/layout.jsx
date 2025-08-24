import ServiceBanner from "./components/ServiceBanner";

const ServicesLayout = ({ children }) => {
  return (
    <>
      <ServiceBanner />
      {children}
    </>
  );
};

export default ServicesLayout;

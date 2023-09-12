import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CarouselSlider from "../../Components/OwlCarusal/OwlCarousel";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Contact
          </h1>
          <Breadcrumb text="Contact" />
        </div>
      </div>
      <div className="lg:mb-[700px]">
        <ContactInfo />
      </div>
      <CarouselSlider />
    </>
  );
};

export default Contact;

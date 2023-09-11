import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import OurOffer from "../../Components/Our_Offer/OurOffer";
import OurProcess from "../../Components/Our_Process/OurProcess";
import CarouselSlider from "../../Components/OwlCarusal/OwlCarousel";

const Service = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Services
          </h1>
          <Breadcrumb text="Service" />
        </div>
      </div>
      {/* Our Process section */}
      <OurProcess />
      {/* What we Offer */}
      <OurOffer />
      {/* Carousal */}
      <CarouselSlider />
    </>
  );
};

export default Service;

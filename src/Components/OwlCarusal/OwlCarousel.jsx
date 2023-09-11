// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// const OwlCarousel = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow x-scroll">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 2</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 3</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 4</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 5</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 6</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 7</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 8</SwiperSlide>
//         <SwiperSlide className="w-10 h-10 border">Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default OwlCarousel;

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src="/photo/b1.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/photo/b2.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/photo/b3.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/photo/b4.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/photo/b5.png" onDragStart={handleDragStart} role="presentation" />,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const CarouselSlider = () => {
  return (
    <div className="Container py-20">
      <AliceCarousel responsive={responsive} mouseTracking items={items} />
    </div>
  );
};

export default CarouselSlider;

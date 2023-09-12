import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    className="grid items-center justify-center"
    src="/photo/b1.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b2.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b3.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b4.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b5.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b1.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b2.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b3.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b4.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="grid items-center justify-center"
    src="/photo/b5.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const CarouselSlider = () => {
  return (
    <div className="Container py-20 ">
      <div className="px-20">
        <AliceCarousel responsive={responsive} mouseTracking items={items} />
      </div>
    </div>
  );
};

export default CarouselSlider;

import SectionTitle from "../SectionTitle/SectionTitle";

const WeAreWorking = () => {
  return (
    <div className="bg-[#fafafa]  pb-5 py-5  lg:py-16 p-3 md:p-5 text-center">
      <div className="Container">
        {/* section heading  */}
        <div className="flex items-center flex-col space-y-4">
          <SectionTitle text="We Are Working" isBoth={true} />
          <h1 className="text-2xl md:text-4xl lg:text-[40px] text-subTitle-0 font-bold lg:leading-[1.2]">
            27000+ Oh The World Most <br /> Successful Companies With Trust
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WeAreWorking;

import SectionTitle from "../SectionTitle/SectionTitle";

const OurProcess = () => {
  return (
    <div className="container py-5 lg:py-16 p-3 md:p-5 text-center bg-[url('/photo/service-shape-bg.png')] bg-no-repeat bg-center">
      <div className="flex items-center flex-col space-y-4 ">
        <SectionTitle text="Our Process" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold">
          How IT Works
        </h1>
        <p className=" text-[#646464] text-center w-[]">
          Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt ut
          labore <br /> pendisse ultrices gravidaisus commodo viva aliqua
        </p>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-[185px] p-3 pt-10">
        <div className="w-[400px]">
          <h2 className="bg-[url('/photo/Saas-Landing.png')] bg-no-repeat bg-center text-white text-4xl p-10">
            01
          </h2>
          <h2 className="text-3xl font-semibold">Info Collection</h2>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

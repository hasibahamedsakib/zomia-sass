const TeamMember = () => {
  return (
    <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 pt-10 lg:pt-20 gap-6">
      {/* card one */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3">
        <img src="/photo/t1.jpg" className="w-full" alt="" />

        <div className="space-y-3 pt-2 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>
      {/* card two */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3">
        <img src="/photo/t2.jpg" className="w-full" alt="" />

        <div className="space-y-3 pt-2 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>

      {/* card three */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3">
        <img src="/photo/t3.jpg" className="w-full" alt="" />

        <div className="space-y-3 pt-2 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

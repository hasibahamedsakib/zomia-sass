const SignupForm = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Create Your Account</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="
                     h-10 rounded-lg w-full border-2 border-purple-0 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="outline-none h-10 rounded-lg w-full border-2 border-purple-0 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>

                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=" h-10 rounded-lg w-full border-2 border-purple-0 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                <div className="">
                  <button className="btn btn-secondary w-full">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

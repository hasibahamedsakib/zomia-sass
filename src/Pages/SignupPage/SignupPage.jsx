import SignupForm from "./SignupForm";

const SignUpPage = () => {
  return (
    <div>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Sign Up
          </h1>
        </div>
      </div>
      <SignupForm />
    </div>
  );
};

export default SignUpPage;

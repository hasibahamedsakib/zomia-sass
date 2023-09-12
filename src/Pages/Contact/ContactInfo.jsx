import { BiTimer } from "react-icons/bi";
import { SlEnvolopeLetter, SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";

const ContactInfo = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1633418400558!5m2!1sen!2sbd"
        height={450}
        allowFullScreen=""
        loading="lazy"
        className="w-full"
      ></iframe>
      {/* contact info */}
      <div className="Container lg:relative">
        <div className=" py-10 px-3 md:p-10 lg:p-20 bg-white  shadow-3xl rounded-lg lg:absolute lg:-top-40 left-0 right-0">
          <div className="grid grid-cols-6 gap-6 text-white ">
            {/* col-1 */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-6">
              {/* sidebar*/}
              <div className="w-full py-8 px-6  shadow-hblg space-y-4 rounded-md bg-[#7b1bd7]">
                <div>
                  <div className="my-3 lg:py-6 space-y-3 lg:space-y-5">
                    <div className="flex items-center space-x-4">
                      <div className=" p-3 rounded-full">
                        <SlLocationPin className="text-white w-6 h-6 lg:h-10 lg:w-10" />{" "}
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold">Our Location</h1>
                        <p className="text-[15px]">29 Street, Melbourne City</p>
                        <p className="text-[15px]">Victoria, Australia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="  p-3 rounded-full">
                        <SlEnvolopeLetter className="text-white w-6 h-6 lg:h-10 lg:w-10" />{" "}
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold">Quick Contact</h1>
                        <p className="text-[15px]">Example@gmail.com</p>
                        <p className="text-[15px]">example1@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="  p-3 rounded-full">
                        <LuPhoneCall className="text-white w-6 h-6 lg:h-10 lg:w-10" />{" "}
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold">Call us Now</h1>
                        <p className="text-[15px]">Office: +1 226-507-0468</p>
                        <p className="text-[15px]">+012 (345) 678 99</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="  p-3 rounded-full">
                        <BiTimer className="text-white w-6 h-6 lg:h-10 lg:w-10" />{" "}
                      </div>
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold">Opening Hours</h1>
                        <p className="text-[15px]">From Monday – Friday.</p>
                        <p className="text-[15px]">8 am to 7 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col-2 */}
            <div className="col-span-6 md:col-span-3 lg:col-span-4 space-y-4">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-subTitle-0 mb-2">
                Get in Touch
              </h4>
              <form className=" ">
                <div className="items-center gap-3 lg:gap-5  grid grid-cols-1 md:grid-cols-2">
                  <input
                    placeholder="Name"
                    type="text"
                    className=" px-5 py-[5px] border-none w-full bg-[#eeecfe] h-14 text-base rounded-md text-[#333] focus:outline-none placeholder:text-[#333]"
                  />
                  <input
                    placeholder="Email"
                    type="text"
                    className=" px-5 py-[5px] border-none w-full bg-[#eeecfe] h-14 text-base rounded-md text-[#333] focus:outline-none placeholder:text-[#333]"
                  />
                  <input
                    placeholder="Phone"
                    type="text"
                    className=" px-5 py-[5px] border-none w-full bg-[#eeecfe] h-14 text-base rounded-md text-[#333] focus:outline-none placeholder:text-[#333]"
                  />
                  <input
                    placeholder="Subject"
                    type="text"
                    className=" px-5 py-[5px] border-none w-full bg-[#eeecfe] h-14 text-base rounded-md text-[#333] focus:outline-none placeholder:text-[#333]"
                  />
                </div>
                <textarea
                  className="px-5 mt-3 md:mt-4 lg:mt-6 py-[5px] border-none w-full bg-[#eeecfe] rounded-md text-[#333] focus:outline-none placeholder:text-[#333] resize-none"
                  name=""
                  id=""
                  cols="26"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <button className="mt-4 btn btn-secondary rounded-none w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

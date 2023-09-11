import { Accordion } from "flowbite-react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const FaqContent = () => {
  return (
    <div className="Container  lg:py-16 p-3 md:p-5">
      {/* section heading  */}
      <div className="flex items-center flex-col space-y-4 ">
        <SectionTitle text="HAVE ANY QUESTIONS" isBoth={true} />
        <h1 className="text-2xl md:text-4xl lg:text-[40px] text-subTitle-0 font-bold">
          Freequently Asked Questions
        </h1>
        <p className=" text-Gray-0 text-center ">
          Web-enabled deliverables without enterprise strategic theme areas our
          land <br /> backward-compatible process improvements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-6 items-center">
        <div>
          <Accordion className="space-y-2">
            {/* accordion-1 */}
            <Accordion.Panel>
              <Accordion.Title className="shadow-3xl hover:underline font-bold hover:text-purple-0 underline-offset-2 text-subTitle-0">
                Better Websites Emails Guideline
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-Gray-0">
                  <p>
                    Consectetur adipiscing elit sed eiusmod tempor indu labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida commodo viverra maecenas
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            {/* Accordion-2 */}
            <Accordion.Panel>
              <Accordion.Title className="shadow-3xl hover:underline font-bold hover:text-purple-0 underline-offset-2 text-subTitle-0">
                Protect Your API Production With Next
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Consectetur adipiscing elit sed eiusmod tempor indu labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida commodo viverra maecenas.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Accordion-3 */}
            <Accordion.Panel>
              <Accordion.Title className="shadow-3xl hover:underline font-bold hover:text-purple-0 underline-offset-2 text-subTitle-0">
                Time Desktop Wallpapers Edition
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Consectetur adipiscing elit sed eiusmod tempor indu labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida commodo viverra maecenas
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Accordion-4 */}
            <Accordion.Panel>
              <Accordion.Title className="shadow-3xl hover:underline font-bold hover:text-purple-0 underline-offset-2 text-subTitle-0">
                Time Desktop Wallpapers Edition
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Consectetur adipiscing elit sed eiusmod tempor indu labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida commodo viverra maecenas.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Accordion-4 */}
            <Accordion.Panel>
              <Accordion.Title className="shadow-3xl hover:underline font-bold hover:text-purple-0 underline-offset-2 text-subTitle-0">
                Time Desktop Wallpapers Edition
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Consectetur adipiscing elit sed eiusmod tempor indu labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida commodo viverra maecenas.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="p-6">
          <img
            src="/photo/img8.png"
            className="object-cover animation-bounce"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FaqContent;

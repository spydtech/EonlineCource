import React from "react";
import CountingAnimation from "./CountingAnimation";
const Counter = () => {
  return (
    <div className="">
      <div className=" lg:h-[200px] flex justify-center items-center lg:flex-row flex-col w-full gap-8 text-white ">
        <div className="relative md:w-[300px] md:h-[120px] bg-[#522d5b] ">
          <div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
            <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
              <div>
                <CountingAnimation start={0} end={30} K duration={3000} />
              </div>
              <div class="text-yellow-500">+</div>
            </div>
            <div class="text-300 text-uppercase">Student Joined</div>
          </div>
          <div className="absolute m-[-20px] w-[40px] h-[40px] transform rotate-45 bg-black"></div>
        </div>
        <div className="relative md:w-[300px] md:h-[120px] bg-[#522d5b] ">
          <div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
            <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
              <div>
                <CountingAnimation start={0} end={2000} K duration={3000} />
              </div>
              <div class="text-yellow-500">+</div>
            </div>
            <div class="text-300 text-uppercase">Courses</div>
          </div>
          <div className="absolute m-[-20px] w-[40px] h-[40px] transform rotate-45 bg-black"></div>
        </div>
        <div className="relative md:w-[300px] md:h-[120px] bg-[#522d5b] ">
          <div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
            <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
              <div>
                <CountingAnimation start={0} end={1000} K duration={3000} />
              </div>
              <div class="text-yellow-500">+</div>
            </div>
            <div class="text-300 text-uppercase">Top Instructors</div>
          </div>
          <div className="absolute m-[-20px] w-[40px] h-[40px] transform rotate-45 bg-black"></div>
        </div>

        <div className="relative md:w-[300px] md:h-[120px] bg-[#522d5b] ">
          <div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
            <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
              <div>
                <CountingAnimation start={0} end={15000} K duration={3000} />
              </div>
              <div class="text-yellow-500">+</div>
            </div>
            <div class="text-300 text-uppercase">Resources & Videos</div>
          </div>
          <div className="absolute m-[-20px] w-[40px] h-[40px] transform rotate-45 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

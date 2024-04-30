import React from "react";
import img1 from "../../../../assets/imgstudents.png";
import img2 from "../../../../assets/img2students.png";
import img3 from "../../../../assets/img3students.png";
const ImageHomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4   ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 h-auto relative bottom-10 ">
          <div className="max-w-full  rounded overflow-y-visible  flex flex-col  ">
            <div className="mx-auto  flex-1  relative top-24">
              <img className="w-auto h-60" src={img1} alt="student" />
            </div>
            <div className="px-6  flex-1  bg-gray-200  ">
              <br></br>
              <div className="font-bold text-3xl mb-2 text-center pt-10">
                it's popular
              </div>
              <p className="text-gray-700 text-base">
                <p className="font-bold">
                  Technical skills are in high demand.
                </p>
                Over 60% of new jobs worldwide will require tech skills
              </p>
            </div>
          </div>
          {/* two start */}
          <div className="max-w-full rounded overflow-y-visible  flex flex-col ">
            <div className="mx-auto  flex-1  relative top-24">
              <img className="w-auto h-60  " src={img2} alt="student" />
            </div>
            <div className="px-6 pt-10 pb-6  flex-1 bg-gray-200 h-60">
              <br></br>
              <div className="font-bold text-3xl mb-2 text-center">
                it's promising
              </div>
              <p className="text-gray-700 text-base">
                Unlock your earning potential Entry-level programmers in the
                U.S. earn on
                <p className="font-bold">average over $78,000 in salary</p>
              </p>
            </div>
          </div>
          {/* two end */}
          <div className="max-w-full rounded overflow-y-visible  flex flex-col ">
            <div className="mx-auto  flex-1  relative top-24">
              <img className="w-auto h-60  " src={img3} alt="student" />
            </div>
            <div className="px-6 pt-10  pb-6  flex-1 bg-gray-200 h-60">
              <br></br>
              <div className="font-bold text-3xl mb-2 text-center">
                it's fun
              </div>
              <p className="text-gray-700 text-base">
                Imagine combining your passion and skill with your creativity,
                and
                <p className="font-bold">making something new everyday.</p>
              </p>
            </div>
          </div>
          {/* 3 end */}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center my-8">
        <button className="bg-blue-500 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          I want to Code
        </button>
      </div>
    </div>
  );
};

export default ImageHomePage;

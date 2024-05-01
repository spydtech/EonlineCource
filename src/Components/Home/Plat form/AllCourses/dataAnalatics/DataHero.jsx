import React from "react";
import { IoMdShare } from "react-icons/io";

function DataHero() {
  return (
    // // <div className=" pt-5 flex items-center justify-center  bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
    // //   <div className=" flex flex-row items-center justify-center">
    // //     <div className="flex flex-col md:flex-row w-[50%]">
    //       <div className="w-full md:w-3/5 bg-white rounded-r-3xl p-8 z-10">
    //         <div className="flex flex-col md:flex-row items-center mb-4">
    //           <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4 mb-2 md:mb-0">
    //             Industry
    //           </button>
    //           <button className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mr-4 mb-2 md:mb-0">
    //             Digital Marketing
    //           </button>
    //           <IoMdShare className="text-4xl mb-2 md:mb-0" />
    //         </div>
    //         <h1 className="text-3xl font-bold mb-4">
    //           <span className="text-blue-500">EonlineCource</span>{" "}
    //           <span className="text-purple-700">Advanced Certificate</span>{" "}
    //           <span className="text-pink-500">in</span>{" "}
    //           <span className="text-orange-700">Digital Marketing</span>{" "}
    //           <span className="text-blue-500">and</span>{" "}
    //           <span className="text-purple-700">Communication</span>
    //         </h1>
    //         <p className="mb-8 text-lg">
    //           Digital marketing encompasses a spectrum of online strategies
    //           aimed at promoting products or services. It leverages various
    //           channels such as social media, email, search engines, and websites
    //           to reach and engage with target audiences. Its agility allows for
    //           real-time adjustments based on data analytics, optimizing
    //           campaigns for better results. Through targeted messaging and
    //           precise audience segmentation, digital marketing facilitates
    //           personalized interactions, enhancing customer experience and
    //           driving conversion rates. Its dynamic nature continuously evolves
    //           alongside technological advancements, shaping the landscape of
    //           modern marketing strategies.
    //         </p>
    //         <div className="flex flex-col md:flex-row mb-8">
    //           <div className="mr-8">
    //             <h2 className="text-blue-500 font-semibold">Type</h2>
    //             <p>Certificate</p>
    //           </div>
    //           <div className="mr-8">
    //             <h2 className="text-purple-700 font-semibold">Start Date</h2>
    //           </div>
    //           <div>
    //             <h2 className="text-pink-500 font-semibold">Duration</h2>
    //           </div>
    //         </div>
    //         <div>
    //           <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4">
    //             Download Syllabus
    //           </button>
    //           <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4">
    //             Apply Now
    //           </button>
    //           <p className="text-sm text-gray-700">
    //             Hurry, many people have already enrolled this month.
    //           </p>
    //         </div>
    //       </div>
    // //     </div>
    // //     <div className="h-full bg-cover w-[50%]">
    // //       <img src="https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future.jpg" />
    // //     </div>
    // //   </div>
    // // </div>

    <>
      <div className="flex flex-row justify-center items-center">
        <div>
          <div className="rounded-r-3xl p-8 z-10 w-[700px]">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4 mb-2 md:mb-0">
              Explore Data Analytics
              </button>
              <button className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mr-4 mb-2 md:mb-0">
              Discover Data Analytics
              </button>
              <IoMdShare className="text-4xl mb-2 md:mb-0" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-blue-500">EonlineCourse</span>{" "}
              <span className="text-purple-700">Advanced Certificate</span>{" "}
              <span className="text-pink-500">in</span>{" "}
              <span className="text-orange-700">Data Analytics</span>{" "}
              <span className="text-blue-500">and</span>{" "}
              <span className="text-purple-700">Communication</span>
            </h1>
            <p className="mb-8 text-lg">
              Dive deep into data analytics, a multifaceted field encompassing
              data cleaning, visualization, statistical analysis, and predictive
              modeling. With a focus on practical skills and real-world
              applications, this course equips you with the tools to extract
              valuable insights from data, driving informed decision-making and
              strategic planning. Whether you're a novice or an experienced
              professional, this program empowers you to harness the power of
              data for business growth and innovation.
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4">
                Download Syllabus
              </button>
              <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4">
                Apply Now
              </button>
              <p className="text-sm text-gray-700">
                Enroll now and embark on a journey towards mastering data
                analytics.
              </p>
            </div>
          </div>
        </div>

        <div className=" h-full mb-8 rounded-r-3xl ">
          <img src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites/images/seo_content__1665728539142.png" />
        </div>
      </div>
    </>
  );
}

export default DataHero;

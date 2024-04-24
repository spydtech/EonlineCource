import React from "react";
import Navbar from "../../../Navbar";
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
const DataAnalytics = () => {
  return (
    <>
      <Navbar />
      <div className=" h-full w-full flex md:gap-36 md:flex-row flex-col">
        <div className="">
          <div className="font-semibold text-4xl md:pt-20 pt-12 font-2xl md:pl-12 pl-4 md:w-[700px]">
            Data Science Project: Unveiling Insights from Data
          </div>
          <div className="md:pl-12 pl-4 md:w-[700px] md:pt-6 pt-8">
            Data Science is a multidisciplinary field that utilizes various
            techniques, algorithms, and systems to extract knowledge and
            insights from structured and unstructured data. In a Data Science
            project, the aim is to analyze data to uncover patterns, make
            predictions, and derive valuable insights that can inform
            decision-making and drive innovation across industries.
          </div>
          <div className="md:pl-12 pl-4 md:w-[700px] md:pt-6 pt-8"> <strong>Unlock endless opportunities.</strong> 
    Whether you're aspiring to become a data analyst, machine learning
    engineer, or data scientist, proficiency in Data Science opens doors to
    diverse career paths across industries such as tech, finance, healthcare,
    and beyond.</div>
        </div>
        <div className="shadow-2xl bg-gray-200 md:w-[400px] md:mt-24 h-[360px] mt-8 pt-[36px] pl-4">
          <div>
            <div className="font-bold text-xl pb-2">Course</div>
            <p className="pb-2">Gain insight into a topic and learn the fundamentals</p>

            <hr />

            <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-4 pt-2">
                <div>4.8</div>
                <div className="text-blue-800">
                  <FaStar />
                </div>
              </div>
              <div className="pt-2">(1,381 reviews) | </div>
              <div className="flex flex-row items-center pt-2 gap-2">
                <div>93%</div>
                <div className="text-blue-800">
                  <FaThumbsUp />
                </div>
              </div>
            </div>

            <div className="pb-4 pt-4 ">
              <div className="font-bold text-lg">Beginner Level</div>
              <div className="text-sm">No prior experience required</div>
            </div>

            <div className="font-bold text-lg">15 Hours (approximately)</div>

            <div className="pb-4 pt-4 ">
              <div className="font-bold text-lg">Flexible schedule</div>
              <div className="text-sm">Learn at your own pace</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;

import React from "react";
import Navbar from "../../../../Navbar";
import AboutCourses from "./AboutCourses";

const ParticularFullStack = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Explore Full Stack Web Development
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold text-gradient">
            Master Full Stack Web Development
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Accelerate your tech skills with comprehensive courses designed to
            cover front-end and back-end development. Gain expertise in
            JavaScript frameworks, databases, server-side scripting, and more.
            Prepare yourself for success as a full stack developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into full stack technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your full stack journey today.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Eroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="mr-32">
          <img
            src="https://www.cdmi.in/courses@2x/full-stack.webp"
            alt="Hero Student"
            className="h-[400px] w-full"
          />
        </div>
      </div>

      <AboutCourses />
    </>
  );
};

export default ParticularFullStack;

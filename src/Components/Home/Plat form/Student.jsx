import React from "react";
import Navbar from "../../Navbar";
import HeroStudent from "../../../assets/student/student2.svg";
import StudentCourses from "./StudentCourses";
const Student = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Kickstart Your Journey
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold text-gradient">
            Master Tech Fundamentals
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Accelerate your tech skills with hands-on courses designed for
            students. Gain expertise in programming, data analysis,
            cybersecurity, and more. Prepare yourself for success in the digital
            world.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into essential technologies.
            Develop practical skills and stand out in a competitive job market.
            Start your tech journey today.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Find Your Course
          </button>
        </div>
        <div className="    mr-32 ">
          <img src={HeroStudent} alt="Hero Student" />
        </div>
      </div>
      <StudentCourses />
    </>
  );
};

export default Student;

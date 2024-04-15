import React from "react";
const BenefitItem = ({ text }) => (
  <div className="flex justify-center items-center">
    <div className="py-4 mt-8 w-[80%] text-white bg-[#262D3D] shadow-2xl hover:scale-105 transition-all duration-500 px-4 rounded-lg">
      <p className="text-center">{text}</p>
    </div>
  </div>
);

const Benefits = () => {
  const benefits = [
    "Access to High-Quality Courses from Top Universities and Institutions",
    "Learn from Industry Experts and Leaders in Various Fields",
    "Wide Range of Specializations and Topics to Choose From",
    "Flexible Learning Schedule - Study at Your Own Pace",
    "Hands-On Assignments and Projects to Apply Your Knowledge",
    "Earn Certificates and Credentials Recognized by Employers",
    "Join a Global Community of Learners and Professionals",
    "Continuous Skill Development and Career Advancement",
    "Affordable Pricing Options and Financial Aid Available",
  ];
  return (
    <div className="bg-gray-200 pb-16">
      <div className="pt-8">
        <p className="text-center md:text-3xl font-bold text-black">
          Benefits of Taking E-education Courses
        </p>
        <p className="text-center text-black pt-4">
          Discover why millions of learners choose E-education Courses for their
          online education needs.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:px-10">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} text={benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

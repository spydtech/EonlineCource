import React, { useState } from "react";
const courses = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOrWvsTr6R8SjFPlTV83Udb14nucZTB2T-jIG3Jw93w&s",
   
    tagText: "Google",
    title: "Google Cloud",
    skills:
      "Skills you will gain: Google Cloud Platform, Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.8",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZt8R9OwFdQM1hx5wmttI7D5lswG42JvCJIutrLpy0w&s",
 
    tagText: "Google",
    title: "Google advanced data analytics",
    skills:
      "Skills you will gain: Google Cloud Platform, Advanced Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.5",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5YasjmuZEzg7Dk0-CmM78LBXTbGCNfSOWC9f5p-z3w&s",
    
    tagText: "MS Excel",
    title: "MS Excel",
    skills:
      "Skills you will gain: Spreadsheet, Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.0",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOrWvsTr6R8SjFPlTV83Udb14nucZTB2T-jIG3Jw93w&s",
   
    tagText: "Google",
    title: "Google Cloud",
    skills:
      "Skills you will gain: Google Cloud Platform, Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.8",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZt8R9OwFdQM1hx5wmttI7D5lswG42JvCJIutrLpy0w&s",
 
    tagText: "Google",
    title: "Google advanced data analytics",
    skills:
      "Skills you will gain: Google Cloud Platform, Advanced Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.5",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5YasjmuZEzg7Dk0-CmM78LBXTbGCNfSOWC9f5p-z3w&s",
    
    tagText: "MS Excel",
    title: "MS Excel",
    skills:
      "Skills you will gain: Spreadsheet, Advanced Data Analysis, SQL, Data Visualization, Data cleaning...etc",
    rating: "4.0",
    reviews: "34 reviews",
    button: "Start To Learn"
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
    {/* Image */}
    <img
      className="h-42 w-full object-cover object-end rounded-lg"
      src={course.imageSrc}
      alt="Course"
    />
    <div className="p-6">
      <div className="flex items-baseline gap-2">
        {/* Tag */}
      
        <span className="dark:text-gray-300">{course.tagText}</span>
      </div>
      <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
        {course.title}
      </h4>
      <div className="mt-1">
        <span>{course.skills}</span>
      </div>
      <div className="gap-2 flex items-center mt-2">
        {/* Star Rating */}
        <span>{course.rating}</span>
        <span className="text-teal-600 font-semibold">
          <i className="fas fa-star"></i>
        </span>
        <span className="ml-2 text-gray-600 text-sm">{course.reviews}</span>
      </div>
    </div>
    <div className="flex justify-start items-start pl-4 mb-2"><button className="border border-blue-800 p-2 font-bold rounded-lg hover:bg-blue-800 hover:text-white">{course.button}</button></div>
  </div>
);
const StartLearning = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses = showAllCourses ? courses : courses.slice(0, 3);
  return (
    <>
    
      <div className=" mt-4 px-16">
      <div class="w-full mt-28  pl-4">
        <span class="text-4xl font-bold text-[#023047]  border-b border-[#023047]">
          Start learning with courses &#8594;
        </span>
      </div>
        <h1 className="pt-10 text-xl  font-semibold pb-4 pl-4">
          Explore online courses from the world's top companies.
        </h1>
        <div className=" flex items-start justify-start">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {displayedCourses.map((course, index) => (
              <CourseCard key={index} course={course} className="border rounded-lg border-blue-800 shadow-xl "/>
            ))}
          </div>
        </div>
        <div class=" text-base font-semibold flex justify-center items-center mt-12 pb-8">
          <button
            className="border border-blue-800 text-blue-800 p-2 rounded-lg"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default StartLearning;
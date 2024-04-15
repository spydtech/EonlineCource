import React, { useState } from "react";
const courses = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi3ipD6eO2WqHb7mOvCHVvIblKkMR9Snt9TmTFAdpvw&s",
    tagText: "Web Development",
    title: "Web Development Bootcamp",
    rating: "4.9",
    reviews: "1200+ reviews",
    button: "Start Web Development Journey"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJP7J81ga4NqNKsdCUoNPjFKDDKTicHdSJVqjNF0zhfw&s",
    tagText: "Data Science",
    title: "Data Analysis",
    rating: "4.7",
    reviews: "800+ reviews",
    button: "Explore Data Science Career"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDgBa-7nZDeQAH1G3xvWZqfIUrBpFVztmuEqvB3EvTQ&s",
    tagText: "Finance",
    title: "Financial Planning and Investment Strategies",
    rating: "4.8",
    reviews: "1000+ reviews",
    button: "Start Finance Career"
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTUW8IUzYqWiuK0aMj1dKe7G30tPvnxjtgtJm5knVSA&s",
    tagText: "Business",
    title: "Entrepreneurship Essentials",
    rating: "4.6",
    reviews: "900+ reviews",
    button: "Launch Business Journey"
  },
  {
    imageSrc:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Digital-Marketing-is-Critical-to-Your-Organization-in-2017.jpg",
    tagText: "Digital Marketing",
    title: "Advanced Digital Marketing Techniques",
    rating: "4.5",
    reviews: "900+ reviews",
    button: "Start Digital Marketing Career"
  },
  {
    imageSrc:
      "https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png",
    tagText: "Data Science",
    title: "Machine Learning and AI",
    rating: "4.7",
    reviews: "800+ reviews",
    button: "Begin Data Science Career"
  },
];


const CourseCard = ({ course }) => (
  <>
  
  <div className="bg-white rounded-lg overflow-hidden border transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  hover:shadow-2xl">
   
     {/* Image */}
     <img
      className="h-40 w-full object-cover object-end rounded-lg"
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
 
    <div className="flex justify-start items-start pl-4 mb-2"><button className="border border-[#0F172A] p-2 font-bold rounded-lg bg-[#0F172A] hover:bg-white text-white hover:text-black">{course.button}</button></div>
  </div>
  </>
);
const StartLearning = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses = showAllCourses ? courses : courses.slice(0, 4);
  return (
    <>
    
      <div className=" mt-4">
      {/* <div class="w-full mt-28  pl-4">
        <span class="text-4xl font-bold text-[#023047]  border-b border-[#023047]">
          Start learning with courses &#8594;
        </span>
      </div> */}
        <h1 className="pt-10 text-xl font-semibold pb-4 pl-8 md:text-2xl">
        Earn Your Degree
        </h1>
        <div className=" flex items-center justify-center px-8">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-8 ">
            {displayedCourses.map((course, index) => (
              <CourseCard key={index} course={course} className="border rounded-lg border-[#0F172A] shadow-xl "/>
            ))}
          </div>
        </div>
        <div class=" text-base font-semibold flex justify-center items-center mt-12 pb-8">
          <button
            className="border border-[#0F172A] text-white p-2 rounded-lg bg-[#0F172A] hover:bg-white hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  hover:shadow-2xl shadow-lg shadow-[#0F172A]"
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
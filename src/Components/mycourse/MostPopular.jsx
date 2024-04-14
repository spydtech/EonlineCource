import React, {useState} from 'react'
const MostPopularcourses = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlqKH809ji1ZIH5HFvFDjisTzgcLuHrpPKEjnubgfPg&s",
      tagText: "Programming",
      title: "Full Stack Web Development",
      rating: "4.9",
      reviews: "1200+ reviews",
      button: "Enroll Now"
    },
    {
      imageSrc: "https://xiengineering.com/wp-content/uploads/2023/10/AdobeStock_519767884-1-scaled.jpeg",
      tagText: "Data Science",
      title: "Machine Learning Fundamentals",
      rating: "4.7",
      reviews: "800+ reviews",
      button: "Start Learning"
    },
    {
      imageSrc: "https://d163l8u5jh2dv2.cloudfront.net/wp-content/uploads/2018/04/financial-modeling-financial-analysis-e1702391958629.webp",
      tagText: "Finance",
      title: "Financial Modeling for Analysts",
      rating: "4.6",
      reviews: "600+ reviews",
      button: "Explore Course"
    },
    {
      imageSrc: "https://www.yellowslice.in/bed/wp-content/uploads/2022/03/User-Experience-Design-Essentials-in-2022-Banner.jpg",
      tagText: "Design",
      title: "UI/UX Design Essentials",
      rating: "4.8",
      reviews: "1000+ reviews",
      button: "Get Started"
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:1400/1*s_Jk5tm0l-r6gR1qFFw8IA.jpeg",
      tagText: "Marketing",
      title: "Digital Marketing Strategies",
      rating: "4.5",
      reviews: "900+ reviews",
      button: "Join Now"
    },
    {
      imageSrc: "https://www.iibs.edu.in/_files/upload/news/18_06_22_101848_Untitled_design-High-Quality_(25).jpg",
      tagText: "Business",
      title: "Entrepreneurship & Startup",
      rating: "4.9",
      reviews: "1500+ reviews",
      button: "Start Business Journey"
    }
  ];

  const MostPopularCard = ({ course }) => (
    <div className="bg-white rounded-lg overflow-hidden border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl">
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
        {/* Rating and Reviews */}
        <div className="gap-2 flex items-center mt-2">
          <span>{course.rating}</span>
          <span className="text-teal-600 font-semibold">
            <i className="fas fa-star"></i>
          </span>
          <span className="ml-2 text-gray-600 text-sm">{course.reviews}</span>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-start items-start pl-4 mb-2">
        <button className="border border-[#0F172A] p-2 font-bold rounded-lg bg-[#0F172A] hover:bg-white text-white hover:text-black">
          {course.button}
        </button>
      </div>
    </div>
  );
  
  const MostPopular = () => {
    const [showAllMostPopularcourses, setShowAllMostPopularcourses] = useState(false);
    const displayedMostPopularcourses = showAllMostPopularcourses ? MostPopularcourses : MostPopularcourses.slice(0, 4);
  
    return (
      <div className="mt-4">
        <div className="w-full pl-8">
          <span className="text-4xl font-bold text-[#023047] border-b border-[#023047]">
            Start learning with Most Popular courses &#8594;
          </span>
        </div>
        <h1 className="pt-10 text-xl font-semibold pb-4 pl-8 md:text-2xl">
          Most Popular courses
        </h1>
        <div className="flex items-center justify-center px-8">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
            {displayedMostPopularcourses.map((course, index) => (
              <MostPopularCard key={index} course={course} />
            ))}
          </div>
        </div>
        {/* Show More / Show Less Button */}
        <div className="text-base font-semibold flex justify-center items-center mt-12 pb-8">
          <button
            className="border border-[#0F172A] text-white p-2 rounded-lg bg-[#0F172A] hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl"
            onClick={() => setShowAllMostPopularcourses(!showAllMostPopularcourses)}
          >
            {showAllMostPopularcourses ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  };
  
  export default MostPopular;
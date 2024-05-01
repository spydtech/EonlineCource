import React, { useState } from "react";
import Navbar from "../../../Navbar";
import { Link } from "react-router-dom";
const FullStack = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const CourseCard = ({ id, title, description, image, link }) => { 
    return (
      <Link to={link}> 
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
          <img className="w-full" src={image} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </Link>
    );
  };
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn how to build web applications from front to back.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP7WwqRZMt45muqpTdBtWssi3TJHjGG4UkwvxBaIBRAV5naPe4-XBwl6tatEPaZWkDDk&usqp=CAU",
      link: "/fullStackWebDevelopment"
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description: "Master JavaScript for both front-end and back-end development.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpaPlcovcoH9QHUUJmlEgAPMw73NMmJAC4LcyZTNjmQ&s",
    },
    {
      id: 3,
      title: "MEAN Stack Development",
      description: "Explore MongoDB, Express.js, Angular, and Node.js for full-stack development.",
      image: "https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/blogs/Blog-133/mean-stack-image1.png",
    },
    
    {
      id: 5,
      title: "Full Stack Python",
      description: "Master Python for both front-end and back-end development.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwU-4XlioqzwP5cv2Ujy_MtoMNogfoYCw5W7rK1cGLyQ&s",
    },
    {
      id: 6,
      title: "Full Stack Java",
      description: "Explore Java for building full-stack applications.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
    },
    {
      id: 7,
      title: "Ruby on Rails Full Stack",
      description: "Learn Ruby on Rails for full-stack web development.",
      image: "https://www.edureka.co/blog/wp-content/uploads/2019/02/ruby-on-rails-developer-singapore-528x269.jpg",
    },
    {
      id: 8,
      title: "Full Stack PHP",
      description: "Master PHP for both front-end and back-end development.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfO_sKvmDyAYJCF5DJhVhvh2rE2o4FlKLasttqAy2XYw&s",
    },
    {
      id: 9,
      title: "Full Stack .NET",
      description: "Explore the .NET framework for full-stack development.",
      image: "https://www.radicaltechnologies.co.in/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-5.55.16-PM-1.jpeg",
    },
    {
      id: 10,
      title: "Full Stack DevOps",
      description: "Learn DevOps practices for full-stack development environments.",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
    },
  ];
  
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const CourseList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(searchQuery ? filteredCourses : courses).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    );
  };

  return (
    <>
    <Navbar />
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*e4HBnH84BpwLCFr78xvfjg.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Explore Full Stack Development Courses</h1>
      
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by course name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>
      <CourseList />
    </div>
    </>
  );
};

export default FullStack;

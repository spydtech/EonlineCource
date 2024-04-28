// Business.js
import React, { useState } from "react";
import Navbar from "../../../Navbar";
const Business = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const CourseCard = ({ title, description, image }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };

  const courses = [
    {
      id: 1,
      title: "Introduction to Business",
      description: "Learn the basics of business management.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 2,
      title: "Financial Accounting",
      description: "Explore fundamental principles of financial accounting.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 3,
      title: "Marketing Strategy",
      description: "Master the essentials of marketing strategy.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 4,
      title: "Business Ethics",
      description: "Learn about ethical considerations in business practices.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 5,
      title: "Operations Management",
      description:
        "Study the principles and practices of operations management.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 6,
      title: "Business Law",
      description: "Understand legal aspects relevant to business operations.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 7,
      title: "Entrepreneurship",
      description:
        "Explore the mindset and skills needed for entrepreneurship.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 8,
      title: "Business Communication",
      description:
        "Learn effective communication strategies for business settings.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 9,
      title: "Supply Chain Management",
      description: "Introduction to supply chain management concepts.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 10,
      title: "International Business",
      description:
        "Explore the complexities of conducting business on an international scale.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
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
        src="https://images.squarespace-cdn.com/content/v1/56ef2b8127d4bd622b7ea7c0/1458888781027-FTYJ41LPJTSRC7C1AGKY/BIZGIF01.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Business Courses</h1>
       
      {/* <h1 className="text-3xl font-bold mb-4">Business Courses</h1> */}
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

export default Business;

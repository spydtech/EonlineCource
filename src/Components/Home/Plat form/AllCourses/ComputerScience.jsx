import React, { useState } from "react";

const ComputerScience = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const CourseCard = ({ title, description, image }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
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
      title: "Introduction to Computer Science",
      description: "Learn the basics of computer science.",
      image:
        "https://media.istockphoto.com/id/1266799768/vector/virtual-meeting-illustration-with-diverse-students-female-tutor-laptop-smartphone-home.jpg?s=612x612&w=0&k=20&c=ZWXtQli2h-nEnP8N5K-7uNSfhRik5JCG3bxL3wgehG4=",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Explore fundamental data structures and algorithms.",
      image:
        "https://media.istockphoto.com/id/1388085270/vector/file-folder-documentation-library-personal-database-workplace-cabinet-organization.jpg?s=612x612&w=0&k=20&c=Y6Mr50hHezBNVcOpHwIvtzD5UW3c2bCU-tA4YzpJKF0=",
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      description: "Master the essentials of web development.",
      image:
        "https://media.istockphoto.com/id/1478046176/vector/developer.jpg?s=612x612&w=0&k=20&c=9yS76-cMLy2Z7BfKA6jgOes_dTAZhIImz4UL-zPyKe0=",
    },
    {
      id: 4,
      title: "Object-Oriented Programming in Java",
      description: "Learn Java programming using object-oriented principles.",
      image:
        "https://media.istockphoto.com/id/1203713779/vector/computer-engineer-write-code-programming-and-software-development-concept-programmer-hacker.jpg?s=612x612&w=0&k=20&c=gdxgR4wDGQcYF9ZFHmwpKn5S_8GjOR4O3WJOY3TiBko=",
    },
    {
      id: 5,
      title: "Database Management Systems",
      description: "Study the principles and practices of database management.",
      image:
        "https://media.istockphoto.com/id/1286643718/photo/business-analytics-and-data-management-system-giving-key-insights-for-corporate-strategy.jpg?s=612x612&w=0&k=20&c=H9GrpkPXB5-uFhgMB1beQisxLPDn584bSxbP9cs_uvY=",
    },
    {
      id: 6,
      title: "Computer Networks",
      description: "Understand the fundamentals of computer networking.",
      image:
        "https://media.istockphoto.com/id/1360633055/vector/digital-network-connection-illustration-internet-of-things-seo-online-education-platform.jpg?s=612x612&w=0&k=20&c=9Lm1coagArCxjA6xTkUSyk6ESCZfR1uadIe4bKvuSHE=",
    },
    {
      id: 7,
      title: "Operating Systems",
      description: "Explore the concepts and components of operating systems.",
      image:
        "https://media.istockphoto.com/id/1355611023/photo/software-update-or-operating-system-upgrade-to-keep-the-device-up-to-date-with-added.jpg?s=612x612&w=0&k=20&c=UTR03Z2hTBr_NvBhsjyCcbtMphiHjun6iKGfMa6WUxU=",
    },
    {
      id: 8,
      title: "Software Engineering",
      description:
        "Learn the principles and practices of software engineering.",
      image:
        "https://media.istockphoto.com/id/1128413234/vector/programmer-working-on-the-computer-back-view-programming-and-engineering-concept-vector.jpg?s=612x612&w=0&k=20&c=N9nGRvoktz4HvTyIQd3HHBZ9aUHk6JvTpbfp9SAiN4w=",
    },
    {
      id: 9,
      title: "Machine Learning Basics",
      description: "Introduction to machine learning concepts and algorithms.",
      image:
        "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
    },
    {
      id: 10,
      title: "Cybersecurity Fundamentals",
      description:
        "Study the basics of cybersecurity and information security.",
      image:
        "https://media.istockphoto.com/id/1483925212/vector/phone-security-concept.jpg?s=612x612&w=0&k=20&c=CNw8IGtCNZ_q28pE19mxovq1lfEbQ7IbxT-gva0dDNU=",
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Computer Science Courses</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by course name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default ComputerScience;

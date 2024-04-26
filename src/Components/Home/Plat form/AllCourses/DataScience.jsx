import React, { useState } from "react";

const DataScience = () => {
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
      title: "Introduction to Data Science",
      description: "Learn the basics of data science.",
      image:
        "https://media.istockphoto.com/id/1213835364/photo/istock-innovation-illustration-id1213835364?b=1&k=20&m=1213835364&s=170667a&w=0&h=I_p98FkshqCShcPJwAjsA3OpFoZ3fU97F2TcQZV5jXw=",
    },
    {
      id: 2,
      title: "Machine Learning Foundations",
      description: "Explore fundamental concepts of machine learning.",
      image:
        "https://media.istockphoto.com/id/1268351637/photo/machine-learning-for-data-mining-and-predictive-analytics-concept-id1268351637?b=1&k=20&m=1268351637&s=170667a&w=0&h=7pSoO0LMKV4Crjy8-LJ1qABM7Ttzs6yvGQj_zAzxkr0=",
    },
    {
      id: 3,
      title: "Data Visualization Techniques",
      description: "Master the essentials of data visualization.",
      image:
        "https://media.istockphoto.com/id/1283545241/photo/data-analytics-visualization-and-business-intelligence-concept-picture-id1283545241?b=1&k=20&m=1283545241&s=170667a&w=0&h=HrLskPvKV13wSC1rz-Y1vxY73qE9aRbXmHNkhlwHZcA=",
    },
    {
      id: 4,
      title: "Big Data Analytics",
      description: "Learn about handling and analyzing big data.",
      image:
        "https://media.istockphoto.com/id/1006923530/photo/istock-big-data-analytics-concept-picture-id1006923530?b=1&k=20&m=1006923530&s=170667a&w=0&h=W5X0elgQxkVGfF5_JarM63TReGTq_0szjryuksWVZjo=",
    },
    {
      id: 5,
      title: "Statistical Analysis with Python",
      description: "Study statistical analysis using Python programming.",
      image:
        "https://media.istockphoto.com/id/1121085161/photo/statistical-analysis-and-data-analytics-concept-picture-id1121085161?b=1&k=20&m=1121085161&s=170667a&w=0&h=-ZnEfy9XgM9hEfJNZnE-n2IhPEMIU6aCt-UskW09PvA=",
    },
    {
      id: 6,
      title: "Natural Language Processing",
      description: "Explore processing and analyzing natural language data.",
      image:
        "https://media.istockphoto.com/id/1263501231/photo/robot-with-text-bubble-in-the-form-of-a-human-brain-id1263501231?b=1&k=20&m=1263501231&s=170667a&w=0&h=3nX3mKkHZxGqKIFgY8i9oDg_FG0FJw5PBTTKWLZxyb8=",
    },
    {
      id: 7,
      title: "Deep Learning Fundamentals",
      description: "Understand the basics of deep learning algorithms.",
      image:
        "https://media.istockphoto.com/id/1250770521/photo/deep-learning-artificial-intelligence-concept-with-3d-rendering-id1250770521?b=1&k=20&m=1250770521&s=170667a&w=0&h=3ru5aIi41p-Pgib9_1dQ_-xyCh44wfyIjcWJDXl8q7A=",
    },
    {
      id: 8,
      title: "Data Mining Techniques",
      description: "Explore methods for extracting insights from data.",
      image:
        "https://media.istockphoto.com/id/1187484302/photo/business-data-analysis-and-mining-concept-picture-id1187484302?b=1&k=20&m=1187484302&s=170667a&w=0&h=YqEBhSlbLWz1mk_2Fv6w4BZ6w-kxU1XbSnG_R4ev3Qg=",
    },
    {
      id: 9,
      title: "Time Series Analysis",
      description: "Study techniques for analyzing time-series data.",
      image:
        "https://media.istockphoto.com/id/1226435889/photo/clock-face-and-rows-of-numbers-time-management-concept-picture-id1226435889?b=1&k=20&m=1226435889&s=170667a&w=0&h=M2uWJxM-43Zltv8oIqIfjKvLFD0fJO05QK0D69fFEM8=",
    },
    {
      id: 10,
      title: "Data Science Capstone Project",
      description: "Apply data science skills to solve a real-world problem.",
      image:
        "https://media.istockphoto.com/id/1225324309/photo/business-people-teamwork-coworker-working-in-office-creative-brainstorming-picture-id1225324309?b=1&k=20&m=1225324309&s=170667a&w=0&h=jJYewI4Hl4d7kOBmImqyy2z74-xgSmNwtqNXiZv4rMA=",
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
      <h1 className="text-3xl font-bold mb-4">Data Science Courses</h1>
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
  );
};

export default DataScience;

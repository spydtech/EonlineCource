import React, { useState } from "react";
import Navbar from "../../../Navbar";
const SocialScience = () => {
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
      title: "Introduction to Sociology",
      description: "Learn the basics of sociology.",
      image:
        "https://media.istockphoto.com/photos/social-science-concept-in-research-methods-picture-id1316410754?b=1&k=20&m=1316410754&s=170667a&w=0&h=zSboK9-ibGG6kp93KUEMyNXfE_CqLaq_qfEa2lknJZg=",
    },
    {
      id: 2,
      title: "Psychology Fundamentals",
      description: "Explore fundamental concepts in psychology.",
      image:
        "https://media.istockphoto.com/photos/close-up-view-of-doctor-making-notes-while-consulting-patient-picture-id1074952176?b=1&k=20&m=1074952176&s=170667a&w=0&h=LC21ieGszr4EnKRT51Sk4GFaTZByL7tRjIGxxWx9X8I=",
    },
    {
      id: 3,
      title: "Economics Principles",
      description: "Master the essentials of economics.",
      image:
        "https://media.istockphoto.com/photos/business-managing-concept-picture-id928251372?b=1&k=20&m=928251372&s=170667a&w=0&h=FZzGSwF3YJGn1NN0Zr5H1F-XnHnqqF49cCNXWbhsa2s=",
    },
    {
      id: 4,
      title: "Anthropology Studies",
      description: "Learn about human societies and cultures.",
      image:
        "https://media.istockphoto.com/photos/anthropology-student-conducting-research-in-laboratory-picture-id1213362811?b=1&k=20&m=1213362811&s=170667a&w=0&h=IE7gFySR12z5zS6e5P7ofJ1JK2M6qoZ6Xp4J_UZbKrE=",
    },
    {
      id: 5,
      title: "Political Science",
      description: "Study the theory and practice of politics.",
      image:
        "https://media.istockphoto.com/photos/group-of-political-scientists-working-at-round-table-discussion-in-picture-id1281902933?b=1&k=20&m=1281902933&s=170667a&w=0&h=oqL20r4LPZmXViyz8FqZz9dYP9PgfN81nW3Q70eQMHs=",
    },
    {
      id: 6,
      title: "Cultural Anthropology",
      description: "Explore the diversity of human cultures and societies.",
      image: "https://example.com/cultural_anthropology.jpg",
    },
    {
      id: 7,
      title: "Social Psychology",
      description:
        "Study how individual behavior is influenced by social interactions and contexts.",
      image: "https://example.com/social_psychology.jpg",
    },
    {
      id: 8,
      title: "Sociological Theory",
      description: "Examine the major theoretical perspectives in sociology.",
      image: "https://example.com/sociological_theory.jpg",
    },
    {
      id: 9,
      title: "Urban Sociology",
      description:
        "Investigate the social structure and dynamics of urban areas.",
      image: "https://example.com/urban_sociology.jpg",
    },
    {
      id: 10,
      title: "Gender Studies",
      description:
        "Analyze the social construction of gender and its impact on society.",
      image: "https://example.com/gender_studies.jpg",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20231227161609/Social-Science-MAin-Banner.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-4">Social Science Courses</h1> */}
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Social Science Courses</h1>

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
    </>
  );
};

export default SocialScience;

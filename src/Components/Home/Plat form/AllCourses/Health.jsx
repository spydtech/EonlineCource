import React, { useState } from "react";
import Navbar from "../../../Navbar";
const Health = () => {
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
      title: "Anatomy and Physiology",
      description: "Learn about the structure and function of the human body.",
      image:
        "https://media.istockphoto.com/id/1218616217/photo/human-body-anatomy-illustration-vector-id1218616217?b=1&k=20&m=1218616217&s=170667a&w=0&h=dVAspdhS69cC0xyOw66o7VwsMY4FGgtmmPnKtw8Uuxo=",
    },
    {
      id: 2,
      title: "Nutrition Basics",
      description: "Explore fundamental principles of nutrition and dietetics.",
      image:
        "https://media.istockphoto.com/id/1278292043/photo/dietary-health-and-nutrition-concept-picture-id1278292043?b=1&k=20&m=1278292043&s=170667a&w=0&h=XxMrxXmSHmk-NbZIgwXS8elI9GRDYZfYw8VYlvss2eI=",
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      description: "Learn about mental health disorders and coping strategies.",
      image:
        "https://media.istockphoto.com/id/1096547208/photo/group-therapy-session-with-psychologist-discussing-problems-picture-id1096547208?b=1&k=20&m=1096547208&s=170667a&w=0&h=ROpM2ilGzhKPXbw_jRHK4C4StIv21nYRyYy7vDY2f-4=",
    },
    {
      id: 4,
      title: "Fitness Training",
      description: "Explore various aspects of physical fitness and exercise.",
      image:
        "https://media.istockphoto.com/id/1001688576/photo/fitness-instructor-training-classes-together-picture-id1001688576?b=1&k=20&m=1001688576&s=170667a&w=0&h=CmTwWhg4T1wn_Be8zCFQcEToE5_Hpw-dw4zFSjXFwA0=",
    },
    {
      id: 5,
      title: "Healthcare Management",
      description:
        "Study the management and administration of healthcare systems.",
      image:
        "https://media.istockphoto.com/id/1287489466/photo/business-people-working-on-laptop-computer-at-office-business-team-picture-id1287489466?b=1&k=20&m=1287489466&s=170667a&w=0&h=5M5tQd90oRiShjKo-Of2oVZyvMKZmy9Sf4kcL2FouB4=",
    },
    {
      id: 6,
      title: "Public Health Fundamentals",
      description:
        "Understand basic concepts of public health and epidemiology.",
      image:
        "https://media.istockphoto.com/id/1156476848/photo/healthcare-professional-working-on-digital-tablet-picture-id1156476848?b=1&k=20&m=1156476848&s=170667a&w=0&h=OXlbYdS22V2l2xGp6SPcH_9kCYVMMNhZhQr9R3b6JOo=",
    },
    {
      id: 7,
      title: "Alternative Medicine",
      description:
        "Explore various alternative and complementary medicine practices.",
      image:
        "https://media.istockphoto.com/id/1276449333/photo/acupuncture-and-chinese-medicine-concept-with-copy-space-picture-id1276449333?b=1&k=20&m=1276449333&s=170667a&w=0&h=-J0J0VrVOMc9AcdiPqD0MVZpJl7ZtQVtjik9ZFEgum4=",
    },
    {
      id: 8,
      title: "Health Informatics",
      description: "Learn about the use of technology in healthcare.",
      image:
        "https://media.istockphoto.com/id/1273072301/photo/doctor-writing-medical-information-on-tablet-in-hospital-picture-id1273072301?b=1&k=20&m=1273072301&s=170667a&w=0&h=dReOQ1iHQg8Ani9b92f00aOpbDNGA9Bd6TzQ_sEbAb8=",
    },
    {
      id: 9,
      title: "Global Health Issues",
      description: "Explore health challenges and solutions on a global scale.",
      image:
        "https://media.istockphoto.com/id/1279488632/photo/global-health-and-medical-concept-id1279488632?b=1&k=20&m=1279488632&s=170667a&w=0&h=9LuEM7pE90_5hUyZ-2MjC0lz2XnK7ujv8g81isIXxvM=",
    },
    {
      id: 10,
      title: "Healthcare Ethics",
      description: "Study ethical issues in healthcare and medical research.",
      image:
        "https://media.istockphoto.com/id/1096547132/photo/doctor-talking-to-patient-at-hospital-picture-id1096547132?b=1&k=20&m=1096547132&s=170667a&w=0&h=Mp5weV-v1M_7JN7JxM1OMeIw14WMyN9riiyG4v-nhe0=",
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
        src="https://images.axios.com/CmKuLx5r7rtik7bObXzbK5WDdOw=/0x0:1920x1080/1920x1080/filters:no_upscale()/2018/08/06/1533591029310.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Health Courses</h1>

      {/* <h1 className="text-3xl font-bold mb-4"></h1> */}
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

export default Health;

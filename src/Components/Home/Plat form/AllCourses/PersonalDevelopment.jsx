import React, { useState } from "react";
import Navbar from "../../../Navbar";
const PersonalityDevelopment = () => {
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
      title: "Public Speaking",
      description: "Develop effective communication and presentation skills.",
      image:
        "https://media.istockphoto.com/id/1205705609/photo/group-of-people-speaking-on-stage-in-front-of-abstract-screen-picture-id1205705609?b=1&k=20&m=1205705609&s=170667a&w=0&h=Xl2Z6Hwdls4kg3_jOhNJ3ugn1rlqy97CUPnzth7UOuI=",
    },
    {
      id: 2,
      title: "Leadership Development",
      description:
        "Learn the principles and practices of effective leadership.",
      image:
        "https://media.istockphoto.com/id/1134676729/photo/business-leader-leading-meeting-in-boardroom-picture-id1134676729?b=1&k=20&m=1134676729&s=170667a&w=0&h=jUEbjt_3cL8TbKjyZ_HNYPXm_tHL7yxuvkJtkDRFZy8=",
    },
    {
      id: 3,
      title: "Emotional Intelligence",
      description: "Develop self-awareness and manage emotions effectively.",
      image:
        "https://media.istockphoto.com/id/950686076/photo/calm-man-balance-on-rope-and-sky-background-picture-id950686076?b=1&k=20&m=950686076&s=170667a&w=0&h=YeeGKrATKWrW7Vf9f0E9FDwJ6AzoxNxF7P1aa1uF8Gk=",
    },
    {
      id: 4,
      title: "Time Management",
      description:
        "Learn strategies for prioritizing tasks and maximizing productivity.",
      image:
        "https://media.istockphoto.com/id/1286443646/photo/businessman-working-on-laptop-computer-picture-id1286443646?b=1&k=20&m=1286443646&s=170667a&w=0&h=u5YrPpCwBmRgP-2UEjQzBD1u3Th1oGjpmn3Wb6lKGzo=",
    },
    {
      id: 5,
      title: "Assertiveness Training",
      description:
        "Develop confidence and assertiveness in communication and interactions.",
      image:
        "https://media.istockphoto.com/id/1206336661/photo/mixed-group-of-people-speaking-on-business-meeting-picture-id1206336661?b=1&k=20&m=1206336661&s=170667a&w=0&h=fKIcK3JWMUjTbNNhsZSKZG-vJt5p_Pp2mAWLPDM1GqE=",
    },
    {
      id: 6,
      title: "Stress Management",
      description:
        "Learn techniques for coping with stress and maintaining well-being.",
      image:
        "https://media.istockphoto.com/id/1252885015/photo/happy-businesswoman-breathing-deep-fresh-air-standing-near-window-picture-id1252885015?b=1&k=20&m=1252885015&s=170667a&w=0&h=fe7Ib6A3tFDozO7q9QIftVLv_cWALfYRPUXcdwvYQ9o=",
    },
    {
      id: 7,
      title: "Confidence Building",
      description: "Develop self-confidence and overcome self-doubt.",
      image:
        "https://media.istockphoto.com/id/500394533/photo/young-man-standing-on-mountains-and-looking-forward-picture-id500394533?b=1&k=20&m=500394533&s=170667a&w=0&h=mdD0f1QZu9HPh2gecE5c39Y9DQeLGrKFzDCczS1v1yM=",
    },
    {
      id: 8,
      title: "Interpersonal Skills",
      description:
        "Develop effective communication and relationship-building skills.",
      image:
        "https://media.istockphoto.com/id/1225226191/photo/group-of-business-people-working-on-new-project-in-modern-office-picture-id1225226191?b=1&k=20&m=1225226191&s=170667a&w=0&h=ss0DwRyM37z8oHzqPh8VHk0eREU78cQzix8yq9DQQg4=",
    },
    {
      id: 9,
      title: "Goal Setting",
      description:
        "Learn strategies for setting and achieving personal and professional goals.",
      image:
        "https://media.istockphoto.com/id/1206107076/photo/young-woman-planning-business-project-working-on-laptop-computer-in-picture-id1206107076?b=1&k=20&m=1206107076&s=170667a&w=0&h=38krh-z6h3_VpOM9QXanbBPLpRR28_yC6jB49Iz0akI=",
    },
    {
      id: 10,
      title: "Personal Branding",
      description: "Develop and market your unique personal brand.",
      image:
        "https://media.istockphoto.com/id/1003882598/photo/branding-strategy-corporate-concept-young-businessman-choosing-logo-picture-id1003882598?b=1&k=20&m=1003882598&s=170667a&w=0&h=z2N7tKxNAmcUNz7MB4aG8o_2Fgq4awSw4Cmj3xg7iRI=",
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
        src="https://www.careerguide.com/career/wp-content/uploads/2021/05/33da8758da5ed6e097c8dc0dee917595.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Personality Development Courses</h1>

      {/* <h1 className="text-3xl font-bold mb-4">
        Personality Development Courses
      </h1> */}
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

export default PersonalityDevelopment;

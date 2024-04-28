import React, { useState } from "react";
import Navbar from "../../../Navbar";
const ArtsAndHumanities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const CourseCard = ({ title, description, image }) => {
    return (
      <>
   
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      </>
    );
  };

  const courses = [
    {
      id: 1,
      title: "Art History",
      description: "Explore the history of art from different periods.",
      image:
        "https://media.istockphoto.com/id/115075933/photo/ancient-romans.jpg?s=612x612&w=0&k=20&c=wbs06RQVQD9xPXTpN2kVXpixTT-UoVz8uoRAPwzl0b8=",
    },
    {
      id: 2,
      title: "Literature",
      description: "Study classic and contemporary works of literature.",
      image:
        "https://media.istockphoto.com/id/1398483813/vector/colorful-vector-background-made-from-bengali-alphabets-scripts-letters-or-characters-in-flat.jpg?s=612x612&w=0&k=20&c=dRwt9B1oh8mdA1fRCSmW1BcF2WsJ-2OSTQJYPlGdYUc=",
    },
    {
      id: 3,
      title: "Music Theory",
      description: "Learn the fundamentals of music theory and composition.",
      image:
        "https://media.istockphoto.com/id/537320606/photo/woman-studying-a-musical-score.jpg?s=612x612&w=0&k=20&c=g_El3_4IrRNJgkbZYnUyzieAU7GJdxwT30xMjV81HDE=",
    },
    {
      id: 4,
      title: "Philosophy",
      description: "Explore philosophical ideas and theories.",
      image:
        "https://media.istockphoto.com/id/959577452/photo/ancient-marble-statue-of-the-great-greek-philosopher-socrates-on-background-the-blue-sky.jpg?s=612x612&w=0&k=20&c=S9Gaippo31VKjxW6uHZTlRr_t4W2OtU_OAjcBPyfm14=",
    },
    {
      id: 5,
      title: "Cultural Studies",
      description: "Examine cultural phenomena and their impact on society.",
      image:
        "https://media.istockphoto.com/id/492755576/photo/om-shanti.jpg?s=612x612&w=0&k=20&c=_AOFcRcnPrm42prZ8vPrdtXQRYlycMXSK4ucjzja05Y=",
    },
    {
      id: 6,
      title: "Creative Writing",
      description:
        "Develop your skills in writing fiction, poetry, and nonfiction.",
      image:
        "https://media.istockphoto.com/id/1141968788/vector/concept-of-literary-art-with-letters-coming-out-of-a-pencil.jpg?s=612x612&w=0&k=20&c=30p9CxNFBNH-A7Xt-or1Nbz9RVfaqrLnRJFza9k16V4=",
    },
    {
      id: 7,
      title: "Dance",
      description: "Explore various dance styles and techniques.",
      image:
        "https://media.istockphoto.com/id/525917843/vector/indian-dance-at-sunset.jpg?s=612x612&w=0&k=20&c=0p2a4FVcajzitgbGu4CjFIH6vmOfTJ15NwkCYX9E4bY=",
    },
    {
      id: 8,
      title: "Film Studies",
      description: "Analyze films from different genres and eras.",
      image:
        "https://media.istockphoto.com/id/1403336149/vector/set-of-cinema-icons-vector-illustration.jpg?s=612x612&w=0&k=20&c=4WcscU2-L2sGXgc6uYer3HN5XzbLApbXgLjik_D-ZVc=",
    },
    {
      id: 9,
      title: "Languages",
      description: "Learn new languages and improve your language skills.",
      image:
        "https://media.istockphoto.com/id/1405587374/vector/social-network-group-of-people-discussion.jpg?s=612x612&w=0&k=20&c=Vw4-HSBY-e4WbBL0m1IaZO0MxrycJtzMxQzCuB98GRw=",
    },
    {
      id: 10,
      title: "Visual Arts",
      description:
        "Explore various forms of visual art, including painting, sculpture, and photography.",
      image:
        "https://media.istockphoto.com/id/577949148/photo/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett.jpg?s=612x612&w=0&k=20&c=8fuPBz7S5wGDOMix0t0ubL0578WpIslf8INTDYBQU4Y=",
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
        src="https://cdnsm5-ss11.sharpschool.com/UserFiles/Servers/Server_79269/Image/Academics%20&%20Programs/arts_humanities.png"
        // src="https://media.wired.com/photos/59265a0eaf95806129f4f24b/master/w_2560%2Cc_limit/ComputerSci-512286518.gif"
        className=" object-cover  w-full md:h-[450px]"
        alt="Background Image"
      />
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">Arts and Humanities Courses</h1>

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

export default ArtsAndHumanities;

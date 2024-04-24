import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IoLogoElectron, IoBriefcase, IoCodeSlash, IoMedkit, IoPeople, IoBrush, IoShapes } from 'react-icons/io5';
const StudentCourses = () => {
    const courseData = [
        {
          icon: <IoLogoElectron /> ,
          title: "Data Science",
          description: "Explore the world of data analysis and machine learning.",
          totle: "425 courses",
        },
        {
            icon: <IoBriefcase />,
            title: "Business",
            description: "Learn key business strategies and management principles.",
            total: "4244 courses",
          },
          {
            icon: <IoCodeSlash />,
            title: "Computer Science",
            description: "Master programming and software development skills.",
            total: "628 courses",
          },
        {
         icon: <IoMedkit />,
          title: "Health",
          description: "Explore health sciences and medical technologies.",
          totle: "471 courses",
        },
        {
          icon: <IoPeople />,
          title: "Social Science",
          description: "Study human behavior and societal trends.",
          totle: "555 courses",
        },
        {
         icon: <IoBrush />,
          title: "Personal Development",
          description: "Improve personal skills and professional growth.",
          totle: "425 courses",
        },
        {
          icon: <IoShapes />,
          title: "Arts and Humanities",
          description: "Explore creativity, culture, and historical studies.",
          totle: "338 courses",
        },
      ];

  return (
    <>
    <div>
            <div>Explore Your Courses</div>
        </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full items-center justify-center from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      {courseData.map((course, index) => (
        <TiltCard key={index}   title={course.title} description={course.description} icon={course.icon}/>
      ))}
    </div>
    </>
  );
};

const TiltCard = ({ title, description, icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[300px] w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 mb-5"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        
         <div className="w-20 h-20 bg-blue-800 rounded-full flex justify-center items-center ">
            <h1 className="text-white text-4xl">{icon}</h1>
        </div>
        <h3 className="py-2 font-extrabold font-xl text-gradient">{title}</h3>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center px-4"
        >
          {description}
        </p>
       
      </div>
    </motion.div>
  );
};

export default StudentCourses;

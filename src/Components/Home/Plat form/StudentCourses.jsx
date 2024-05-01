import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BiBarChartSquare } from 'react-icons/bi';
import { IoLogoElectron, IoPhonePortrait, IoCodeWorking , IoFlask, IoGameController, IoLockClosed, IoAnalyticsSharp, IoCloudSharp, IoCodeSlash, IoShapes, IoPeople, IoShieldCheckmark, IoArrowUndoCircleSharp, IoBookSharp, IoConstructSharp, IoWifiSharp, IoRocketSharp, IoHardwareChipSharp, IoRoseSharp } from 'react-icons/io5';
const StudentCourses = () => {
  const courseData = [
    {
      title: "Full Stack Web Development",
      icon: <IoLogoElectron />,
      description: "Learn to build dynamic websites and web applications with the Full Stack Web Development course. Covering both front-end and back-end development, this course will teach you everything you need to know to become a proficient web developer. Taught by Rob Percival on Udemy.",
      link: "/fullStack"
    },
    {
      title: "Data Analytics",
      icon: <BiBarChartSquare />,
      description: "Master data analytics essentials: cleaning, visualization, stats, modeling. From beginners to pros, unlock data's power for informed decisions and business success.",
      link: "/dataAnalatics"
    },
    
    {
      title: "Data Structures and Algorithms",
      icon: <IoFlask />,
      description: "Master the fundamental concepts of data structures and algorithms with the Data Structures and Algorithms course. Offered by Princeton University on Coursera, this course provides a comprehensive understanding of how to design and analyze algorithms.",
      link: "link-to-the-course"
    },
    {
      title: "Machine Learning",
      icon: <IoAnalyticsSharp />,
      description: "Explore the exciting field of Machine Learning with this course led by Andrew Ng on Coursera. From basic concepts to advanced techniques, you'll learn how to develop machine learning models and apply them to real-world problems.",
      link: "link-to-the-course"
    },
    {
      title: "Game Development",
      icon: <IoGameController />,
      description: "Create captivating 2D games with the Game Development course. Taught by Ben Tristem on Udemy, this course covers everything from game design principles to implementing gameplay mechanics using C# and Unity.",
      link: "link-to-the-course"
    },
    {
      title: "Cybersecurity Fundamentals",
      icon: <IoLockClosed />,
      description: "Gain a solid understanding of cybersecurity fundamentals with this course on Coursera by NYU. You'll learn about various security concepts, threats, and best practices to protect digital assets.",
      link: "link-to-the-course"
    },
    {
      title: "Ethical Hacking",
      icon: <IoShieldCheckmark />,
      description: "Become an ethical hacker with the Ethical Hacking course on Udemy by Ermin Kreponic. Learn how to identify vulnerabilities, exploit security weaknesses, and strengthen systems against cyber attacks.",
      link: "link-to-the-course"
    },
    {
      title: "Network Security",
      icon: <IoWifiSharp />,
      description: "Discover the principles of network security with the Network Security Fundamentals course on Pluralsight. This course covers topics such as encryption, firewalls, and intrusion detection systems.",
      link: "link-to-the-course"
    },
    {
      title: "Certifications",
      icon: <IoArrowUndoCircleSharp />,
      description: "Prepare for cybersecurity certifications including CompTIA Security+, Certified Ethical Hacker (CEH), and Certified Information Systems Security Professional (CISSP). These certifications validate your knowledge and expertise in the field of cybersecurity.",
      link: "link-to-the-course"
    },
    {
      title: "Data Analysis with Python",
      icon: <IoCodeSlash />,
      description: "Learn data analysis with Python through the Python for Data Science and Machine Learning Bootcamp on Udemy by Jose Portilla. This course covers essential Python libraries for data manipulation, visualization, and machine learning.",
      link: "link-to-the-course"
    },
    {
      title: "Data Visualization",
      icon: <IoCodeWorking />,
      description: "Master the art of data visualization with the Data Visualization with Python course on Coursera by University of Michigan. Visualize data effectively using Python libraries like Matplotlib and Seaborn.",
      link: "link-to-the-course"
    },
    {
      title: "Big Data",
      icon: <IoConstructSharp />,
      description: "Dive into the world of big data with the Big Data Specialization on Coursera by University of California, San Diego. Learn about big data technologies, platforms, and analytics techniques to derive valuable insights from large datasets.",
      link: "link-to-the-course"
    },
    {
      title: "Data Engineering",
      icon: <IoHardwareChipSharp />,
      description: "Become a skilled data engineer with the Data Engineering, Big Data, and Machine Learning on GCP course on Coursera by Google Cloud. Learn how to design and implement scalable data processing systems on Google Cloud Platform.",
      link: "link-to-the-course"
    },
    {
      title: "AWS",
      icon: <IoCloudSharp />,
      description: "Prepare for the AWS Certified Solutions Architect – Associate certification with the AWS Certified Solutions Architect – Associate course on A Cloud Guru. Gain expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      link: "link-to-the-course"
    },
    {
      title: "Microsoft Azure",
      icon: <IoCloudSharp />,
      description: "Get started with Microsoft Azure with the Microsoft Certified: Azure Fundamentals course on Pluralsight. Learn about Azure services, deployment models, and management tools to build and manage cloud solutions.",
      link: "link-to-the-course"
    },
    {
      title: "Google Cloud",
      icon: <IoCloudSharp />,
      description: "Explore the core infrastructure services of Google Cloud Platform with the Google Cloud Platform Fundamentals: Core Infrastructure course on E-education. Learn about compute, storage, networking, and security services on Google Cloud.",
      link: "link-to-the-course"
    },
    {
      title: "Cisco CCNA",
      icon: <IoWifiSharp />,
      description: "Prepare for the Cisco CCNA 200-301 exam with the Cisco CCNA 200-301 – The Complete Guide to Getting Certified course on Udemy by Neil Anderson. Gain the knowledge and skills required to install, configure, operate, and troubleshoot network devices.",
      link: "link-to-the-course"
    },
    {
      title: "CompTIA A+",
      icon: <IoConstructSharp />,
      description: "Get certified with the CompTIA A+ 2019 Certification 1001. The Total Course on Udemy by Mike Meyers. This course covers essential topics such as hardware, networking, mobile devices, and troubleshooting.",
      link: "link-to-the-course"
    },
    {
      title: "Linux Administration",
      icon: <IoConstructSharp />,
      description: "Master Linux administration with the Linux Administration Bootcamp: Go from Beginner to Advanced course on Udemy by Jason Cannon. Learn essential Linux skills, including system administration, shell scripting, and networking.",
      link: "link-to-the-course"
    },
   
  ];
  return (
    <>
    <div >
    <div className="text-4xl font-bold text-center mb-8 text-gray-800 underline">Explore Your Courses</div>
   

    </div>
   

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full from-indigo-500 to-violet-500 py-12 text-slate-900  place-items-center">
      {courseData.map((course, index) => (
        <TiltCard  key={index} title={course.title} description={course.description} icon={course.icon} link={course.link} />
      ))}
   
    </div>
  </>
  );
};

const TiltCard = ({ title, description, icon, link }) => { // Accept link prop
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
    <Link to={link}> {/* Wrap the card with Link */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[400px] w-72 gap-0 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 mb-5 "
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
    </Link>
  );
};

export default StudentCourses;

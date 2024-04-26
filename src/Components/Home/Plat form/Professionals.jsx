import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar";
const Professionals = () => {
  return (
    <>
    <Navbar />
      <div className="container">
      <section className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Elevate Your Skills
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-gradient">
          Explore New Horizons
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
          Broaden your expertise with advanced courses and hands-on projects.
          Stay ahead in the ever-evolving tech landscape.
        </p>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
          Our courses are designed to empower tech professionals with
          specialized knowledge and practical skills. Dive deep into emerging
          technologies and master industry-relevant tools.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
      </div>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.shiksha.com/mediadata/images/articles/1576227666phpqUHpt1.jpeg",
  },
  {
    id: 3,
    src: "https://s39613.pcdn.co/wp-content/uploads/2020/12/Teaching-Technology-Courses-to-Online-College-Students.jpg",
  },
  {
    id: 4,
    src: "https://elearningindustry.com/wp-content/uploads/2022/09/Shutterstock_1639424710.jpg",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQkHYqcUR4Wekv2r3-067Nf70Vmdj_jlwZs-AgafUBTQCUWxStBODDfj-FcfOiSQXrGA&usqp=CAU",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cG5Zy8R25mpBWz98vZ9AFKNallo4KhgAHnKs50ny2bRYeaGpqa91K3tvYK5LBL8hFLc&usqp=CAU",
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHesMz3qjo5crLrI3lkp14qy07089L2JLfqvT3WtABblRfsjPb0r789PZcpjDCxPJ_N4&usqp=CAU",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHA_RKH1ILSgoT6Q3owqkXTT5PakoR6VXq0RJbJmOgxYtSmXfT-n1P8dgdxe9y29ZVnA&usqp=CAU",
  },
  {
    id: 9,
    src: "https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg",
  },
  {
    id: 10,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyfnbD4qtXUy7rgq6wH2etlz9Jso3DBxrVxJuVk2BIWYDbPOnQTsK97NHC2Jztyr2Ca4&usqp=CAU",
  },
  {
    id: 11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOMn7FKT9M20lLxZ4Q1V-KjL-8ILyJ7v68BVMjHmQALriNipbDZGOBpqhQTAtsig4P00&usqp=CAU",
  },
  {
    id: 12,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx9YhZk799H6IQX8I3roQtsh8Wdzr0C5Q23E9Z-PEog&s",
  },
  {
    id: 13,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2UYSFfcfEVdRJjj6KGImZeAUgwTqf23MNuHSYEQCpw&s",
  },
  {
    id: 14,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefeZWNqGQ5Df56H81h0DwrEHa-AOtJWVTQWOtWWY_7hfCotGOvtLTWucBT7lYb38yrDk&usqp=CAU",
  },
  {
    id: 15,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmF7ePM7HPu7yD9DY9H7Kbo3M6eDEv6rfJ1kYHQu2nGy1GYSt9-XwEClV6cQZKb436qto&usqp=CAU",
  },
  {
    id: 16,
    src: "https://img-b.udemycdn.com/course/750x422/4607780_3549.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Professionals;

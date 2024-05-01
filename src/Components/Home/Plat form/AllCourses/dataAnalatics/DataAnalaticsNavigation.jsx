import React, {useState, useEffect} from 'react'
import DataAnalaticsKeyHighights from './DataAnalaticsKeyHighights'
const DataAnalaticsNavigation = () => {
  const sections = [
    "Introduction",
    "Key Highlights",
    "Career Outcomes",
    "About the Program",
    "Certificate",
    "Syllabus",
  ];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sectionId = sections[currentSection];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [currentSection, sections]);

  const handleNextSection = (index) => {
    if (index === "next") {
      setCurrentSection((prev) =>
        prev === sections.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSection(index);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between  px-6 py-4">
        <ul className="flex space-x-4">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                className={`text-black hover:text-violet-800 transition duration-300 ${
                  currentSection === index
                    ? "text-red-700 hover:text-red-700 underline underline-offset-8"
                    : ""
                } px-4 py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
          <button
            className="text-black text-2xl hover:text-violet-700 transition duration-300 hidden sm:inline-block"
            onClick={() => handleNextSection("next")}
          >
            &gt;
            {/* arrow */}
          </button>
        </ul>
        {/* <div className="flex space-x-8  ">
          <button className="bg-red-600 text-white p-2 rounded">
            Download
          </button>
          <button className="bg-red-600 text-white p-2 rounded">
            Download
          </button>
        </div> */}
      </nav>
      {/* Conditionally render KeyHighlights based on currentSection */}
      {currentSection === 1 && <DataAnalaticsKeyHighights />}
    </>
  );
};

export default DataAnalaticsNavigation
import React, { useState } from "react";
function DataAnalaticsKeyHighights() {
    const [selectedItem, setSelectedItem] = useState(null);
  
    const data = [
      { label: "Key Highlights" },
      { label: "Top Skills" },
      { label: "Job Opportunities" },
      { label: "Who Is This Program For?" },
      { label: "Learn To Leverage ChatGpt" },
    ];
  
    const handleClick = (index) => {
      setSelectedItem(index);
    };
  
    const renderContent = () => {
      switch (selectedItem) {
        case 0:
          return (
            <>
           
              <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-pink-600 py-4">Key HighLights</p>
               <li>Advanced modules with Generative AI fusion</li>
                <li> E-Education certificate via upGrad collaboration</li>
                <li>
                  Access to live training sessions by Meta Blueprint trainers
                </li>
                <li>15+ Case Studies,Live projects</li>
                <li>Earn E-Eduction Executive Alumni Status</li>
                <li>90+ Tool Video Library</li>
                <li>Industry mentor-led fortnightly coaching</li>
                <li>Tailored resume feedback</li>
                <li>Mock Interview by managers</li>
                <li>Explore ChatGPT in digital marketing tutorials</li>
           
              </ul>
            </>
          );
        case 1:
          return (
            <>
             
              <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-pink-600 py-4">
                The Curriculum covers high-demand,industry-relavent skills
              </p>
                <li>Generative AI in digital marketing</li>
                <li>SEO</li>
                <li>Search and Display advertising</li>
                <li>Social and Display advertising</li>
                <li>Content Marketing</li>
                <li>Branding</li>
                <li>Web Analytics</li>
              </ul>
            </>
          );
        case 2:
          return (
            <>
              {" "}
              <p className="text-2xl font-medium  text-pink-600">
                Promising job opportunities are available post successful
                completion
              </p>
              <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
                <li>Digital Marketing Manager</li>
                <li>SEM Manager</li>
                <li>SEO Manager</li>
                <li>Social Media and Content Manager</li>
                <li>Associate</li>
                <li>Consultant</li>
                <li>Business Analyst</li>
                <li>(Sr.)Associate-Digital Marketing</li>
              </ul>
            </>
          );
        case 3:
          return (
            <>
              <p className="text-2xl font-medium  text-pink-600">
                For the Enthusiatic Learners
              </p>
              <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
                <li>List of target audience goes here...</li>
                <li>
                  Explore 2 tracks & 5 specializations for diverse learning.
                </li>
                <li>Experience seamless integration with Gen AI modules.</li>
                <li>
                  Attain E-Education Executive Alumni Status for exclusive
                  benefits.
                </li>
                <li>Access EMI at RS. 2,879/month for greater flexibility.</li>
                <li>
                  A voucher worth $50 for Meta's "Digital Marketing Associate"
                  certificate exam, free of cost.
                </li>
              </ul>
            </>
          );
        case 4:
          return (
            <>
              {" "}
              <p className="text-2xl font-medium  text-pink-600">
                Learn To Leverage ChatGPT in Digital Marketing
              </p>
              <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
                <li>
                  Utilise ChatGPT to assist in creative unique content,plan
                  strategies,build,calenders,and more
                </li>
                <li>Generative SEO-optimised content with chatGPT</li>
                <li>
                  Gain insights into your social media analytics by using chatGPT
                </li>
              </ul>
            </>
          );
        default:
          return null;
      }
    };
  
    return (
      <>
        <div
          id="main"
          className=" px-20 bg-gradient-to-r  from-violet-300 to-white via-white"
        >
          <div id="subdiv1" className="pt-4">
            <div id="h1" className="">
              <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-pink-900">
                E-Education Course Highlights
              </p>
            </div>
            <div
              id="h2"
              className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96  h-auto"
            >
              <p className="text-5xl font-bold ">What does this</p>
              <p className="text-5xl font-bold text-yellow-700 inline">
                Course have to offer?
              </p>
            </div>
          </div>
          <div
            id="subdiv2"
            className="justify-between grid  grid-cols-1 lg:md:grid-cols-2"
          >
            {/* content start*/}
            <div id="content1" className="">
              {data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`hover:text-violet-700 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 h-16 w-96 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden shadow-lg shadow-gray-400 transition-transform duration-300 transform hover:scale-105 ${
                    selectedItem === index
                      ? "bg-cyan-600  text-white hover:text-white border-none"
                      : ""
                  }`}
                >
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <div
              id="content2"
              className="md:lg:w-auto md:lg:h-auto w-[400px] h-auto pt-4 pl-4 text-xl"
            >
              {renderContent()}
            </div>
            {/* content end */}
          </div>
        </div>
      </>
    );
  }
  
  export default DataAnalaticsKeyHighights;
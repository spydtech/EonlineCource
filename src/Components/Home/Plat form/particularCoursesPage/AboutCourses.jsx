import React, { useState, useEffect } from "react";
import About from "./About";
const AboutCourses = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    useEffect(() => {
      // Initialize the first tab
      showTab("tab1");
    }, []);
  
    function showTab(tabId) {
      // Update active tab
      setActiveTab(tabId);
    }
  
  return (
    <>
     <div class="w-full px-16  ">
        {/* <span class="text-5xl font-bold text-[#0284c7]  border-b border-[#023047]">
          Start a new career with E-education &#8594;
        </span> */}
      </div>
      <div className="w-full mt-10 px-16">
        {/* Tab Buttons */}
        <div className="p-2 rounded-t-lg overflow-x-auto">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => showTab("tab1")}
            >
              About
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => showTab("tab2")}
            >
            Outcomes
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab3" ? "active" : ""
              }`}
              onClick={() => showTab("tab3")}
            >
              Courses
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-100 rounded-lg hover:bg-blue-100 focus:outline-none tab-button ${
                activeTab === "tab4" ? "active" : ""
              }`}
              onClick={() => showTab("tab4")}
            >
              Testimonials
            </button>
          
          </div>
        </div>

        {/* Tab Content */}
        <div className="border-2 rounded-lg border-blue-100  pb-5">
          <div
            id="tab1"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab1" ? "" : "hidden"
            }`}
          >
           <About />
          </div>
          <div
            id="tab2"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab2" ? "" : "hidden"
            }`}
          >
            {/* <DigitalMarketing /> */}
          </div>
          <div
            id="tab3"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab3" ? "" : "hidden"
            }`}
          >
            {/* <ItSupport /> */}
          </div>
          <div
            id="tab4"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab4" ? "" : "hidden"
            }`}
          >
            {/* <Cybersecurity /> */}
          </div>
          <div
            id="tab5"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab5" ? "" : "hidden"
            }`}
          >
            {/* <FrontEnd /> */}
          </div>
          <div
            id="tab6"
            className={`p-4 tab-content bg-white  rounded-lg ${
              activeTab === "tab6" ? "" : "hidden"
            }`}
          >
            {/* <UiUx /> */}
          </div>
          {/* <div class=" text-base font-semibold leading-7 text-center justify-center  ">
            <p>
              <a
                href="/Certificates"
                class="text-sky-500  transition-all duration-300 group-hover:text-white "
              >
                Explore all Certificates &rarr;
              </a>
            </p>
          </div> */}
        </div>

        {/* <EducationCarousel /> */}
      </div>
    </>
  )
}

export default AboutCourses
import React from "react";
import "tailwindcss/tailwind.css"; // Make sure you import Tailwind CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function DigitalMarketing() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Digital Marketer</h2>
        <p>Define and develop digital strategies to deliver business growth through online channels</p>
        <div className="pt-5">
          <h1 className="text-xl font-semibold">Median Salary</h1>
          <div className="pt-5">
          <a className="bg-gray-200 rounded-sm text-start   md:px-[50%]  px-[10%] py-2">
              <span className="-ml-[9%] md:ml-[-49%] md:text-lg text-sm">All occupations</span>
            </a>
            <span className="p-2">$37,960*</span>
          </div>
          <div className="pt-5 pb-10">
          <a className="bg-blue-600 rounded-sm text-start text-white px-[20%]  md:px-[70%] py-2">
              <span className="md:-ml-[69%] -ml-[19%] md:text-lg text-sm">Digital Marketer</span>
            </a>
            <span className="p-2">$61,300**</span>
          </div>
          <hr />
        </div>

        <p className="pt-5">Job openings: 82,489**</p>
        <p>Projected 10 year growth: +13%***</p>

        <h1 className="pt-10 text-xl  font-semibold">
          Recommended Professional Certificate
        </h1>
        <div className=" min-h-screen flex items-start justify-start space-x-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl ">
              {/* Image */}
              <img
                className="h-48 w-full object-cover object-end"
                src="https://i0.wp.com/www.yellowfinbi.com/assets/files/2019/05/planning-4077086_1280.jpg?fit=1200%2C628&ssl=1"
                alt="Home in Countryside"
              />
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  {/* Tag */}
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    class="w-6 h-6"
                    alt=""
                  />
                  <span class="dark:text-gray-300 ">Google</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  Google Digital Marketer
                </h4>
                <div className="mt-1">
                  <span>
                    Skills you will gain: Spreadsheet, Data Analysis, SQL, Data
                    Visualization, Data cleaning...etc
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  {/* Star Rating */}
                  <span>4.8</span>
                  <span className="text-teal-600 font-semibold">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl ">
              {/* Image */}
              <img
                className="h-48 w-full object-cover object-end"
                src="https://www.springboard.com/library/static/c8a8b68015e12fea64edae0ab4e9dd71/1f368/shutterstock_1814645042.jpg"
                alt="Home in Countryside"
              />
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  {/* Tag */}
                  <img
                    src="https://www.svgrepo.com/show/330669/ibm.svg"
                    class="w-6 h-6"
                    alt=""
                  />
                  <span class="dark:text-gray-300 ">IBM</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  IBM Digital Marketer
                </h4>
                <div className="mt-1">
                  <span>
                    Skills you will gain: Spreadsheet, Data Analysis, SQL, Data
                    Visualization, Data cleaning...etc
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  {/* Star Rating */}
                  <span>4.8</span>
                  <span className="text-teal-600 font-semibold">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl ">
              {/* Image */}
              <img
                className="h-48 w-full object-cover object-end"
                src="https://www.springboard.com/library/static/c8a8b68015e12fea64edae0ab4e9dd71/1f368/shutterstock_1814645042.jpg"
                alt="Home in Countryside"
              />
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  {/* Tag */}
                  <img
                    src="https://www.svgrepo.com/show/330669/ibm.svg"
                    class="w-6 h-6"
                    alt=""
                  />
                  <span class="dark:text-gray-300 ">IBM</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  IBM Digital Marketer
                </h4>
                <div className="mt-1">
                  <span>
                    Skills you will gain: Spreadsheet, Data Analysis, SQL, Data
                    Visualization, Data cleaning...etc
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  {/* Star Rating */}
                  <span>4.8</span>
                  <span className="text-teal-600 font-semibold">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default DigitalMarketing;

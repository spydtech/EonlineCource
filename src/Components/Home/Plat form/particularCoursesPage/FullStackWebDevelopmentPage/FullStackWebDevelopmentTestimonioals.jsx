import React from "react";

const FullStackWebDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="text-3xl font-bold lg:w-2/2 mb-3">
          Why people choose E-education for their career
          </h3>
          <p className="text-base text-gray-600">
          As e-education continues to evolve and expand, its transformative impact on the future of learning and career development remains undeniable. By embracing the flexibility, accessibility, and opportunities offered by online education, individuals can unlock their full potential and pursue rewarding career paths with confidence and resilience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* featured card */}
          <div className="w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex
                justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300 border border-gray-50
                "
              >
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpTjnUJj1dJB_HUNWfRCCGXtq4FzAW5r4ZgSr7qH0lw&s"
                    alt=""
                    className="rounded-full h-48 w-48"
                  />
                </div>
                <div>Felipe M.</div>
                <h5 className=" text-gray-800 px-5 text-center mt-5">
                  "To be able to take courses at my own pace and rhythm has been
                  an amazing experience. I can learn whenever it fits my
                  schedule and mood."
                </h5>
              </div>
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex flex-col
                justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-16 border border-gray-50
                "
              >
                <img
                  src="https://i.pinimg.com/564x/ea/87/25/ea8725efe43fe165f4bf3c868c4cbc04.jpg"
                  alt=""
                  className="rounded-full h-52 w-52"
                />
                {/* <img src="https://st2.depositphotos.com/35018808/44240/v/450/depositphotos_442402190-stock-illustration-illustration-little-girl-working-computer.jpg"  alt=""/> */}
                <div>Jennifer J.</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "I directly applied the concepts and skills I learned from my
                  courses to an exciting new project at work."
                </h5>
              </div>
              <div
                className=" rounded-[35px] h-96 shadow-2xl p-8 flex flex-col border border-gray-50
                justify-center items-center hover:-translate-y-4 transition-all duration-300
                "
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGcoTCCFcticUpLWBjZc0QCFBtzaq3242yoBsvlWewrnr0e9DJeU6XUWGnKSA279dzz0&usqp=CAU"
                  alt=""
                  className="rounded-full h-48 w-48"
                />

                <div>Spana S.</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "Learning isn't just about being better at your job: it's so
                  much more than that. Coursera allows me to learn without
                  limits."
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackWebDevelopmentTestimonioals;

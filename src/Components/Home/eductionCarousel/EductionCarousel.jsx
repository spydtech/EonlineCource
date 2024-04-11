import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const courses = [
  {
    imageSrc:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg",
    tagText: "Cybersecurity",
    title: "Cybersecurity",
    skills:
      "Computer security, cybersecurity, digital security or information technology security is the protection of computer systems and networks. ",
    rating: "4.8",
    reviews: "34 reviews",
    button: "Start To Learn",
  },
  {
    imageSrc:
      "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960",
    tagText: "BlockChain",
    title: "BlockChain",
    skills:
      "Blockchain Technology. Blockchain is an emerging technology for recording information in a way so that it is impossible to manipulate it. ",
    reviews: "34 reviews",
    button: "Start To Learn",
  },
  {
    imageSrc:
      "https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161759/EC_Artificial_Intelligence_750.jpg",
    tagText: "Artificial intelligence",
    title: "Artificial intelligence",
    skills:
      "Artificial intelligence, in its broadest sense, is intelligence exhibited by machines, particularly computer systems and networks. ",
    rating: "4.0",
    reviews: "34 reviews",
    button: "Start To Learn",
  },
];

export default function EducationCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="my-8">
        <div className=" text-xl lg:text-4xl font-semibold pb-4">
          Get a head start on a degree today
        </div>
        <div className="text-lg lg:text-xl ">
          With these programs, you can build valuable skills, earn career
          credentials, and make progress toward a degree before you even enroll.
        </div>
      </div>
      <div className="glide-01 relative w-full mb-12">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap relative flex  w-full overflow-hidden p-0">
            {courses.map((course, index) => (
              <li key={index} className="hover:shadow-2xl border rounded-lg">
                <div className="flex flex-col gap-8 items-center">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="rounded-lg w-full"
                  />
                  <div className="flex flex-col text-gray-600 text-lg text-start p-4">
                    <div className="font-bold">{course.title}</div>
                    <div>{course.skills}</div>
                  </div>
                  <div>Eroll Now</div>
                </div>
              </li>
            ))}
           
          </ul>
        </div>
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

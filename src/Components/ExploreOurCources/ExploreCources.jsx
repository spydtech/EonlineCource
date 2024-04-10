
import React from "react";

const ExplorCouces = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UWky_Q26s8mob8oTWgxi7-gB5pMD3DDciFZHC8RO4Q&s",
    title: "Data Science",
    totle: "425 courses",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg",
    title: "Business",
    totle: "4244 courses",
  },
  {
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds",
    title: "Computer Science",
    totle: "628 courses ",
  },
  {
    image:
      "https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg",
    title: "Health",
    totle: "471 courses",
  },
  {
    image:
      "https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg",
    title: "SOcial Science",
    totle: "555 courses",
  },
  {
    image:
      "https://industrywired.com/wp-content/uploads/2021/02/Smart-Tech.jpg",
    title: "Personal Development",
    totle: "425 courses",
  },
  {
    image:
      "https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future-2400x1374.jpg",
    title: "Arts and Humanities",
    totle: "338 courses",
  },

];

const ExploreCources = () => {
  return (
    <div className="bg-gray-100 p-8 mb-16 ">
    <div className=" font-bold text-5xl">Explore Courses</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  py-8">
        {ExplorCouces.map((course, index) => (
          <div
            key={index}
            className=" hover:shadow-2xl border h-[85px] rounded-lg"
          >
           <div className="flex justify-start items-start flex-row gap-8">
           <div>
              {" "}
              <img
                src={course.image}
                alt={course.title}
                className="md:w-32 h-[85px] rounded-lg w-28 "
              />
            </div>
            <div className="flex justify-center items-start flex-col pt-3 font-semibold text-gray-600 text-sm">
              {" "}
              <div>{course.title}</div>
              <div>{course.totle}</div>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCources;

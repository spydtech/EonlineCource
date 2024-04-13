// import React from 'react';
// import anime from 'animejs/lib/anime.es.js';

// const WaterDropGrid = () => {
//   return (
//     <div className="relative bg-slate-900 px-12 py-12">
//       <DotGrid />
//     </div>
//   );
// };

// const GRID_WIDTH = 20;
// const GRID_HEIGHT = 15;

// const DotGrid = () => {
//   const handleDotClick = (e) => {
//     anime({
//       targets: '.dot-point',
//       scale: [
//         { value: 1.35, easing: 'easeOutSine', duration: 250 },
//         { value: 1, easing: 'easeInOutQuad', duration: 500 },
//       ],
//       translateY: [
//         { value: -15, easing: 'easeOutSine', duration: 250 },
//         { value: 0, easing: 'easeInOutQuad', duration: 500 },
//       ],
//       opacity: [
//         { value: 1, easing: 'easeOutSine', duration: 250 },
//         { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
//       ],
//       delay: anime.stagger(100, {
//         grid: [GRID_WIDTH, GRID_HEIGHT],
//         from: e.target.dataset.index,
//       }),
//     });
//   };

//   const dots = [];
//   let index = 0;

//   for (let i = 0; i < GRID_WIDTH; i++) {
//     for (let j = 0; j < GRID_HEIGHT; j++) {
//       dots.push(
//         <div
//           className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
//           data-index={index}
//           key={`${i}-${j}`}
//         >
//           <div
//             className="dot-point absolute h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
//             style={{
//               top: `${j * 30}px`, // Adjust vertical position based on grid
//               right: `${i * 30}px`, // Adjust horizontal position based on grid
//             }}
//             data-index={index}
//           />
//         </div>
//       );
//       index++;
//     }
//   }

//   return (
//     <div className="text-white flex flex-col justify-center items-center">
//       <div className="text-center mb-8">
//         <div className="text-8xl">Unlock Your Potential</div>
//         <div className="">
//           Welcome to our platform where you can unlock your potential through engaging courses tailored for personal and professional growth. Access your courses conveniently on our user-friendly dashboard, allowing you to learn at your own pace and on your schedule.
//         </div>
//       </div>
//       <div
//         onClick={handleDotClick}
//         style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
//         className="grid grid-cols-${GRID_WIDTH}"
//       >
//         {dots}
//       </div>
//     </div>
//   );
// };

// export default WaterDropGrid;
import anime from "animejs/lib/anime.es.js";
const WaterDropGrid = () => {
    return (
      <div className="relative grid place-content-center bg-slate-900 px-8 py-12">
        <DotGrid />
      </div>
    );
  };
  
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;
  
  const DotGrid = () => {
    const handleDotClick = (e) => {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -15, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: e.target.dataset.index,
        }),
      });
    };
  
    const dots = [];
    let index = 0;
  
    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(
          <div
            className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
            data-index={index}
            key={`${i}-${j}`}
          >
            <div
              className="dot-point  h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
              data-index={index}
            />
          </div>
        );
        index++;
      }
    }
  
    return (
      <div className="text-white flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:mb-[40px]">
          <div className="lg:text-8xl md:text-4xl text-xl">Unlock Your Potential</div>
          <div className="mt-4 md:pr-8">
            {" "}
            Welcome to our platform where you can unlock your potential through
            engaging courses tailored for personal and professional growth. Access
            your courses conveniently on our user-friendly dashboard, allowing you
            to learn at your own pace and on your schedule.{" "}
          </div>
          <button className="border border-blue-800 hover:bg-white hover:text-black font-bold p-2 rounded-lg bg-blue-800 text-white mt-4">Join Now</button>
        </div>
        <div
          onClick={handleDotClick}
          style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
          className="grid "
        >
          {dots}
        </div>

      </div>
    );
  };
  
  export default WaterDropGrid;
  
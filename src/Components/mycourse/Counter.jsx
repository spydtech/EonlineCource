import React from 'react'
import CountingAnimation from './CountingAnimation'
const Counter = () => {
  return (
   <div className=''>
     <div className=' h-[200px] flex justify-center items-center lg:flex-row flex-col w-full lg:gap-36 gap:8'>

   
<div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
  <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
    <div>
      <CountingAnimation start={0} end={30}K duration={3000} />
    </div>
    <div class="text-yellow-500">+</div>
  </div>
  <div class="text-300 text-uppercase mt-[11px]">Student Joined</div>
</div>
<div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
  <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
    <CountingAnimation start={0} end={2000} duration={3000} />
    <span class="text-teal-500">+</span>
  </div>
  <div class="text-300 text-uppercase mt-[11px]">Courses</div>
</div>
<div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
  <div class="text-4xl font-bold flex justify-center items-center flex-row  ">
    <div>
      <CountingAnimation start={0} end={1000} duration={3000} />
    </div>
    <div class="text-pink-500">+</div>
  </div>
  <div class="text-300 text-uppercase mt-[11px]">Top Instructors</div>
</div>
<div class="p-4 border-r   flex flex-col items-center justify-center  dark:bg-gray-800">
  <div class="text-4xl font-bold flex justify-center items-center flex-row ">
    <div>
      {" "}
      <CountingAnimation start={0} end={15000} duration={1000} />
    </div>
    <div class="text-violet-500">+</div>
  </div>
  <div class="text-300 text-uppercase mt-[11px]">Resources & Videos</div>
</div>
</div>
   </div>
  )
}

export default Counter
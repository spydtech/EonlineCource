import React from 'react'
import Marquee from './Marquee/Marquee';

function Main() {
  return (
    <>
    <div>
{/* <Navbar /> */}
<section  class="sm:mt-6 lg:mt-8 mt-12  mx-auto px-4 sm:px-6 lg:px-8">

<div
    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Learn Without limits</span>
            <span class="block text-[#0077b6] xl:inline">  online courses</span>
        </h1>
        <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.
        </p>
        {/* <!-- Button Section --> */}
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
                <a href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                </a>
            </div>
        </div>
        {/* <!-- End of Button Section --> */}
    </div>

    {/* <!--   Image Section     --> */}
    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://miro.medium.com/v2/resize:fit:660/1*NRk6YQMA_w-wWcc6JYe7yA.png" alt="" />
    </div>
    {/* <!--   End of Image Section     --> */}
</div>

</section>


    </div>

    
    <Marquee />
    </>
  )
}

export default Main
import React from 'react'
import Navbar from '../../Navbar'
import Professional from './Professional'
import Footer from '../footer/Footer'

function Certificates() {
  return (
    <div>

        
<Navbar />
<div className='bg-blue-200'>
<nav class="flex p-10 " aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Professional Certificates</a>
      </div>
    </li>
    
  </ol>
</nav>

<div
    class="px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800">
    <div class="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1
            class="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
            Professional Certificates
        </h1>
        <p class="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
        Get job-ready for an in-demand career</p>
        <div class="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
            <a href="#"
                class="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-[#1053F3] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"><span>Get
                    started
                </span>
            </a>
            <a href="#"
                class="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"><span>Learn
                    more
                </span>
            </a>
        </div>
    </div>
    <div class="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img class="rounded-3xl w-full"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="" />
    </div>
</div>

</div>

<div class="flex justify-start items-center h-screen">
    <div class="w-2/3">
        {/* <!-- Card 1 --> */}
        <div class="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/" alt="Map 1" class="w-32 h-32 object-cover rounded-t-lg mr-4" />
            <div>
                <div class="flex items-center mb-2">
                    
                    <h2 class="text-xl font-semibold">Data Analyst Professional Certificate
                    </h2>
                </div>
                <p>6 months at 10 hours per week</p>
                <p>prepare an a entry-level job as Data Analyst</p>
                <h1 className='text-blue-500 font-bold  hover:underline cursor-pointer'>click on go for Certificate</h1>
            </div>
            
        </div>
        
        {/* <!-- Card 2 --> */}
        <div class="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/938339513171730971/F265E84437CB35A797541C00EC20DF42A419129B/" alt="Map 2" class="w-32 h-32 object-cover rounded-t-lg mr-4" />
            <div>
                <div class="flex items-center mb-2">
                   
                    <h2 class="text-xl font-semibold">Digital Marketing</h2>
                </div>
                <p>5 to 6 months 6-10 hours</p>
                <p>Prepare for an entry-level job as a social media marketer.</p>
                <h1 className='text-blue-500 font-bold  hover:underline cursor-pointer'>click on go for Certificate</h1>
            
            </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-white shadow-lg rounded-lg p-4 flex">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/771724021898742152/3FAE420233A940A966B41CD934A52DFBE1ED9E08/" alt="Map 3" class="w-32 h-32 object-cover rounded-t-lg mr-4" />
            <div>
                <div class="flex items-center mb-2">
                   
                    <h2 class="text-xl font-semibold">IT Support Specialist</h2>
                </div>
                <p>Prepare for an entry-level job as an IT support specialist.</p>
                <p>6 months at 10 hours</p>
                <h1 className='text-blue-500 font-bold  hover:underline cursor-pointer'>click on go for Certificate</h1>
            
            </div>
        </div>
    </div>
</div>
<Professional />
<Footer />

    </div>
  )
}

export default Certificates
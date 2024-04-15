import React from 'react'

function Calendar () {
  return (
    <div>
        <div className="bg-white md:-mt-5 border md:ml-[-5%]  rounded-lg shadow relative mx-auto w-full md:h-[17rem] h-full sm:w-[40rem] md:w-[50rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[50rem]">
        <h2 className="text-lg font-bold text-gray-800 p-10">Calendar Sync</h2>
        <p className='px-10'>Automatically sync all the deadlines and other related items from all active courses to your calendar.</p>
      <h2 className='px-10 pt-2 font-semibold '>Add to my calendar</h2>
      <div className='px-10 md:space-x-10 md:pb-0 pb-5  space-y-2 md:space-y-0 text-sm pt-2 flex flex-col md:flex-row'>
        <a className='border border-2 p-2 border-blue-600 rounded hover:bg-blue-100 cursor-pointer'>Google Calendar</a>
        <a className='border border-2 p-2 border-blue-600 rounded hover:bg-blue-100 cursor-pointer'>Apple Calendar</a>
        <a className='border border-2 p-2 border-blue-600 rounded hover:bg-blue-100 cursor-pointer'>Other Calendar</a>
      </div>
      </div>
   </div>
  )
}

export default Calendar 
import React from 'react'

function Notes() {
  return (
    <div>
        <div className="bg-white p-10  md:-mt-5 border md:ml-[-5%]  rounded-lg shadow relative mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[50rem]">
        <h2 className="text-lg font-bold text-gray-800">Notes & Highlights</h2>
          <div className="py-10 flex">
            <h1 className='text-sm font-bold'>Notes & Highlights</h1>
            <div className='flex space-x-2  md:ml-52'  >
            <p>Do not allow</p>
            
            <label class="relative mb-5 cursor-pointer ">
      <input type="checkbox" value="" class="peer sr-only" />
      <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
</label>

<p>Allow</p>
            </div>
           
          </div>
         <div>
         <p className='text-sm pb-5'>Your highlighting and note-taking activity can be used in combination with that of other learners in the course to determine the most highlighted phrases.
             No personal information is displayed to other learners.</p>
             <hr className="py-5 " />
             <a className='p-2 px-6 rounded hover:bg-blue-200 border border-2 text-blue-500 border-blue-500'>Save</a>
         </div>
       
      </div>
    </div>
  )
}

export default Notes
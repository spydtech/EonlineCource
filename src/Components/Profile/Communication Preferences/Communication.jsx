import React from 'react'

function Communication () {
  return (
    <div>
        <div className="bg-white p-10  md:-mt-5 border md:ml-[-5%]  rounded-lg shadow relative mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[50rem]">
        <h2 className="text-lg font-bold text-gray-800">Communication Preferences</h2>

        <div className='py-10 '>
        <label class="inline-flex items-center hover:text-blue-300 cursor-pointer" for="CheckBox">
          <input id="CheckBox" type="checkbox" class="w-6 h-6 grey-100 hover:text-blue-300 cursor-pointe"  />
          <span class="ml-2 text-sm md:text-lg ">Opt-out of all Coursera emails (Optional)</span>
        </label>
    </div>


        <hr />

        <h1 className='pt-10 font-semibold'>Communication from Coursera
</h1>
<h2 className='py-2 font-semibold'>I want to receive the following:</h2>

        <div class="flex flex-col gap-2">
    
    <div>
        <label class="inline-flex items-center" for="CheckBox">
          <input id="CheckBox" type="checkbox" class="md:w-6 md:h-6 w-7 h-7 grey-100" checked />
          <span class="ml-2 text-sm md:text-lg text-gray-400">Weekly personalized course recommendations</span>
        </label>
    </div>
    <div>
        <label class="inline-flex items-center" for="CheckBox">
          <input id="CheckBox" type="checkbox" class="md:w-8 md:h-8 w-14 h-14 grey-100" checked />
          <span class="ml-2 text-sm md:text-lg text-gray-400">Weekly notifications about promotions, new courses and programs, and special events</span>
        </label>
    </div>
    <div>
        <label class="inline-flex items-center" for="CheckBox">
          <input id="CheckBox" type="checkbox" class="md:w-6 md:h-6 w-10 h-10 grey-100" Unchecked />
          <span class="ml-2 text-sm md:text-lg text-gray-400">Information on online Master’s and Bachelor’s Degree programs</span>
        </label>
    </div>
    <div>
        <label class="inline-flex items-center" for="CheckBox">
          <input id="CheckBox" type="checkbox" class="md:w-8 md:h-8 w-14 h-14 grey-100" checked />
          <span class="ml-2 text-sm md:text-lg text-gray-400">Surveys and invitations to help us improve Coursera content and your experience</span>
        </label>
    </div>
</div>  
      </div>
    </div>
  )
}

export default Communication 
import React from 'react'
import IMG from "../../../assets/Platform/student.png"
import IMG1 from "../../../assets/E- education logo .png"
import Certified from './Certified'

function Platform() {
  return (
    <div className='bg-blue-200'>
      <Certified />
      <div className='ml-96 h-92 w-96 -mb-16'>
      <img
      src={IMG1}
      className=' '
      />
      </div>
     
        <h1 className="text-7xl  text-center p-[5%] font-anton ">The perfect platform to boost your technical skills</h1>
        <div className='flex gap-[20%] p-20'>
            <div className='text-center'>
                <img src={IMG} className='h-[360px] w-[360px]' />
                <h2 className='text-5xl font-bold'>Students</h2>
                <p className='text-gray-500 text-xl'>
                Prepping for the big test or want to ace your first interview?
                 Use Sololearn's real-world practice to reinforce what you've learned and get you 
                 ready for that big moment.
                </p>
            </div>
            <div className='text-center'>
                <img  src='https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png' />
                <h2 className='text-5xl font-bold'>Professionals</h2>
                <p className='text-gray-500 text-xl'>
                You can learn something totally new to advance your career. 
                Or maybe you just want to knock off the rust.
                 Try Sololearn to get access to a variety of courses, from machine learning to web development.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Platform
import React from 'react'
import Testimonials from "./Testimonials";
import { newdata } from "./data";
const FinalTestimonials = () => {
  return (
    <div className="bg-[rgb(229,229,231)] h-[100vh]">
    <div>
      <Testimonials data={newdata} />
    </div>
  </div>
  )
}
 

export default FinalTestimonials

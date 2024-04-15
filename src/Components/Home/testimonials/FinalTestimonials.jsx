import React, {useState, useEffect} from 'react'
import Testimonials from './Testimonials'
const FinalTestimonials = () => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async() =>{
    try{
      const res = await fetch('https://akash-akp.github.io/api-test/testimonialReview.js');
      const d = await res.json();
      setData(d);
      console.log(data);
    }catch(error){
      console.log("api error")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  });
  return (
    <div className="bg-[rgb(229,229,231)] h-[100vh]">
    <div>
      {
        !loading?(<Testimonials data={data.testimonials} />):(<div></div>)
      }
      
    </div>
  </div>
  )
}

export default FinalTestimonials
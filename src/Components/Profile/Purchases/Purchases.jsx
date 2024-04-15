import React from 'react'
import Footer1 from '../../Home/footer/Footer1'
import Navbar from '../../Navbar'
import PaymentHistory from './PaymentHistory'

function Purchases() {
  return (
    <div>
        <Navbar />
        <div className='p-10'>
        <h1 className='text-2xl font-semibold'>Purchases</h1>
        <p>Need more help? Check out our <span className="text-blue-500 hover:underline cursor-pointer ">help center</span> and<span className="text-blue-500 hover:underline cursor-pointer ">refund policies.</span> </p>
        </div>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 p-10">
    <ul class="flex flex-wrap -mb-px pb-10">
        <li class="mr-2">
            <a href="#"
                class="inline-block text-blue-500 p-4 border-b-4 border-blue-500 hr-line border-transparent rounded hover:bg-blue-200  ">
                    
                Payment History
            </a>
           
            <a href="/Settings"
                class="inline-block ml-[50rem]  text-blue-500 p-4 border-b-2 border-transparent rounded-t-lg hover:underline ">
                Update Payment method
            </a>
            <hr />
        </li>
        
    </ul>

    <PaymentHistory />

</div>
       
        <Footer1 />
    </div>
  )
}

export default Purchases
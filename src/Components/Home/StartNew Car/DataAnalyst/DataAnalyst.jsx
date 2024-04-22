import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Make sure you import Tailwind CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import axios from 'axios'
import { NavLink } from "react-router-dom";



function DataAnalyst() {
  // const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificateData = [
    {
      id: 1,
      title: "Google Data Analytics",
      image: "https://i0.wp.com/www.yellowfinbi.com/assets/files/2019/05/planning-4077086_1280.jpg?fit=1200%2C628&ssl=1",
      logo: "https://www.svgrepo.com/show/355037/google.svg",
      company: "Google",
      skills: ["Spreadsheet", "Data Analysis", "SQL", "Data Visualization"],
      rating: 4.8,
      reviews: 34,
      price: 102
    },
    {
      id: 2,
      title: "IBM Data Analytics",
      image: "https://www.springboard.com/library/static/c8a8b68015e12fea64edae0ab4e9dd71/1f368/shutterstock_1814645042.jpg",
      logo: "https://www.svgrepo.com/show/330669/ibm.svg",
      company: "IBM",
      skills: ["Spreadsheet", "Data Analysis", "SQL", "Data Visualization"],
      rating: 4.5,
      reviews: 28,
      price: 110
    },
  ]

  const [orderID, setOrderID] = useState(null);



  const handlePayment = (cert) => {
    const amountInPaise = cert.price * 100; // Convert price to paise (1 INR = 100 paise)
    if (amountInPaise < 100) {
      alert('Invalid amount. Minimum amount should be 1 rupee.');
      return;
    }

    axios.post('http://localhost:8082/create-order', {
      amount: amountInPaise, // Send the amount in paise to the backend
      currency: 'INR',
      name: 'E_ONLINE_EDU',
      description: 'Test Transaction',
      email: "info@spydtech.com",
      contact: "6305207832"
    }).then((response) => {
      setOrderID(response.data.order_id); // Set the order ID received from backend
      const options = {
        key: "rzp_test_pGk4bGkuLgOxKA",
        key_secret: "yaZyNbbTW7aUjSeXuK0JM6sV",
        amount: amountInPaise,
        currency: "INR",
        name: "E_ONLINE_EDU",
        description: "for testing purpose",
        order_id: response.data.order_id, // Pass the order ID to Razorpay
        handler: function (response) {
          alert(response.razorpay_payment_id)
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "SPY D TECHNOLOGY",
          email: "info@spydtech.com",
          contact: "6305207832"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        },
      };
      var pay = new window.Razorpay(options);
      pay.open()
    }).catch((error) => {
      console.error('Error creating order:', error);
    });
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-2">Data Analyst</h2>
      <p>Collect, organize, and transform data to make informed decisions</p>
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Median Salary</h1>
        <div className="pt-5">
        <a className="bg-gray-200 rounded-sm text-start md:px-[50%]  px-[10%] py-2">
              <span className="-ml-[9%] md:ml-[-49%] md:text-lg text-sm"> All occupations</span>
            </a>
          <span className="p-2">$37,960*</span>
        </div>
        <div className="pt-5 pb-10">
        <a className="bg-blue-600 rounded-sm text-start text-white  md:px-[70%] px-[25%] py-2">
              <span className="md:-ml-[68%] -ml-[24%] md:text-lg text-sm">Data Analyst</span>
            </a>
          <span className="p-2">$90,500**</span>
        </div>
        <hr />
      </div>

      <p className="pt-5">Job openings: 82,489**</p>
      <p>Projected 10 year growth: +13%***</p>

      <h1 className="pt-10 text-xl  font-semibold">
        Recommended Professional Certificate
      </h1>
      <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {certificateData.map((cert) => (
          <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="h-48 w-full object-cover" src={cert.image} alt={cert.title} />
            <div className="p-6">
              <div className="flex items-baseline gap-2">
                <img src={cert.logo} className="w-6 h-6" alt={cert.company} />
                <span className="text-gray-700">{cert.company}</span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{cert.title}</h4>
              <div className="mt-1">
                <span>{cert.skills}</span>
              </div>
              <div className="mt-2 flex items-center">
                <span>{cert.rating}</span>
                <span className="text-teal-600 font-semibold">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-gray-600 text-sm">{cert.reviews} reviews</span>
              </div>
              <div className="mt-4 flex justify-end">
                <button onClick={() => handlePayment(cert)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Enroll Now Rs:₹{cert.price}
                </button>
              </div>
            </div>
          </div>

        ))}


      </div>

      
    </div>
  );
}

export default DataAnalyst;

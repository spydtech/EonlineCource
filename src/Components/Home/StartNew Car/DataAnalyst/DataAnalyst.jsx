import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Make sure you import Tailwind CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome



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

  const handlePayment = (cert) => {
    const amountInPaise = cert.price * 100; // Convert price to paise (1 INR = 100 paise)
    if (amountInPaise < 100) {
      alert('Invalid amount. Minimum amount should be 1 rupee.');
      return;
    }
    var options = {
      key: "rzp_live_S2N6IhuEdjaL7s",
      key_secret: "5MZ8EirthXhbDcbyNyKVSJX5",
      amount: amountInPaise,
      currency: "INR",
      name: "E_ONLINE_EDU",
      descrption: "for testing purpose",
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
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-2">Data Analyst</h2>
      <p>Collect, organize, and transform data to make informed decisions</p>
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Median Salary</h1>
        <div className="pt-5">
          <a className="bg-gray-200 rounded-sm text-start   px-[50%] py-2">
            <span className="-ml-[49%]">All occupations</span>
          </a>
          <span className="p-2">$37,960*</span>
        </div>
        <div className="pt-5 pb-10">
          <a className="bg-blue-600 rounded-sm text-start text-white   px-[70%] py-2">
            <span className="-ml-[68%]">All occupations</span>
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
                  Purchase Rs:₹{cert.price}
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

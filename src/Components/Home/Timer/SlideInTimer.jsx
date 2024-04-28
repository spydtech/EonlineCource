import React, { useState, useEffect } from "react";

const SlideInTimer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsVisible(false);
    }
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center   justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 border-4 border-red-500 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">15% Discount on Coupon</h2>
            <p className="font-bold"> Enroll Now <span className="text-4xl font-anton border-2 border-red-400">E-education</span> </p>
            <p className="text-4xl font-bold">
             {minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideInTimer;

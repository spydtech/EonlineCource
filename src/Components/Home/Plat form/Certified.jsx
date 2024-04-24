import React from 'react';
import IMG1 from "../../../assets/E- education logo .png"
import IMG from "../../../assets/Platform/Ai.jpg"

function Certified() {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    // Function to handle card expansion
    function expandCard(index) {
        setExpandedIndex(null); // Always set expandedIndex to null to prevent expansion
    }

    // Array of image URLs
    const imageUrls = [
        'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=900&t=st=1713961784~exp=1713962384~hmac=ba35fdc8d0076de391a716b7a76db506a6839de855831224f772a72219b090f4',
        IMG1,
        'https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg?t=st=1713962130~exp=1713965730~hmac=600d7237b20381ddf4d92976d01b70f22b14a98e973b825ccff76341d3853b6f&w=740'
    ];

    return (
        <div>
            <div className="flex gap-10 justify-center bg-white ">
                {[1, 2, 3].map(index => (
                    <div key={index} className={`relative flex border-2 border-[#0ea5e9] flex-col rounded-xl   bg-clip-border text-gray-700 shadow-md transition-all w-80 hover:scale-110`}>
                        <div className="relative mx-4 -mt-10 h-44 overflow-hidden  bg-gray-200 rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
                            {/* Dummy image */}
                            <img src={imageUrls[index - 1]} alt={`Card ${index}`} className="w-full h-full " />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-lora text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {index === 1 && 'Get Start Learning with E-education'}
                                {index === 2 && 'Improve Your Skills with E-education'}
                                {index === 3 && 'Get Certified'}
                            </h5>
                            
                        </div>
                        <div className="p-6 pt-0">
                            <button onClick={() => expandCard(index)} data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    /* Add any custom styles here */
                `}
            </style>
        </div>
    );
}

export default Certified;

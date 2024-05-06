import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../State/Auth/Action';
import { updateAccount } from '../../../State/Auth/Action';


function Account() {
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();



  useEffect(() => {
    if (auth.user) {
      const { firstName, lastName, email, mobileNumber, location } = auth.user;
      const fullName = `${firstName} ${lastName}`;
      setFormData({
        fullName,
        emailAddress: email,
        mobileNumber: mobileNumber || '',
        location: location || '',
      });
    }
  }, [auth]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jwt) {
      dispatch(updateAccount(jwt, formData));
    } else {
      console.error('JWT token not found.');
      // Handle error (e.g., redirect to login page)
    }
  };

  return (

    <div>
      <div className="bg-white md:-mt-5 border md:ml-[-5%]  rounded-lg shadow relative mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[50rem]">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Account</h3>
          <div>
            {editMode ? (
              <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 ml-2" onClick={handleSubmit}>
                Save
              </button>
            ) : (
              <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => setEditMode(true)}>
                Edit
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-gray-900 block mb-2">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName || ''} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required disabled={!editMode} />
              </div>
              <div>
                <label htmlFor="emailAddress" className="text-sm font-medium text-gray-900 block mb-2">Email address</label>
                <input type="email" name="emailAddress" id="emailAddress" value={formData.emailAddress || ''} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required disabled={!editMode} />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-900 block mb-2">Mobile Number</label>
                <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber || ''} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required disabled={!editMode} />
              </div>
              <div>
                <label htmlFor="location" className="text-sm font-medium text-gray-900 block mb-2">Location</label>
                <input type="text" name="location" id="location" value={formData.location || ''} onChange={handleInputChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required disabled={!editMode} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;

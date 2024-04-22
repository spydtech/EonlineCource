import Navbar from "../Navbar";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import Footer from "../Home/footer/Footer";

function Profile({ usernameFirstLetter }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Define function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Define function to handle image removal
  const handleImageRemove = () => {
    setImageUrl("");
  };
  const handleSave = () => {
    // Add logic to save profile changes here
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const profiles = [
    {
      id: 1,
      Email: "Jane Doe",
      role: "ShareLink Profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia Maiores et perferendis eaque.",
      imageUrl:
        "https://gumlet-blog-content.gumlet.io/learn/content/images/2022/07/Elearning_platform.jpg?w=3840&q=70",
    },
    // Add more dummy data objects as needed
  ];

  return (
    <>
      <Navbar usernameFirstLetter={usernameFirstLetter} />
      {/* left cards */}

      {/* Map over the profiles and render each profile card */}
      <div className="flex flex-col md:flex-row bg-blue-100">
        <div>
          {profiles.map((profile) => (
            <div key={profile.id} className="flex">
              <div className="p-12 ">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="py-5 p-10 px-20 bg-white border-2 rounded text-center text-gray-500 max-w-xl">
                    <div className="flex space-x-2 -mr-4 ">
                      <h1 className="text-xl">Personal Details</h1>
                      <div>
                        <CiEdit
                          className="text-2xl cursor-pointer"
                          onClick={() => setIsPopupOpen(true)}
                        />
                      </div>
                      {isPopupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white p-8 rounded-lg">
                            <a
                              onClick={() => setIsPopupOpen(false)}
                              className=" text-sm font-bold justify-end  ml-[80%] hover:underline hover:text-blue-600"
                            >
                              Close X
                            </a>
                            <h1 className="text-2xl font-bold mb-4">
                              Edit Profile
                            </h1>
                            {/* Upload Image */}
                            <div className="mb-4  space-x-10 flex">
                              <div>
                                <button
                                  onClick={() =>
                                    document.getElementById("fileInput").click()
                                  }
                                  className="p-2 text-white border rounded bg-blue-500 px-4"
                                >
                                  Change Photo
                                </button>
                                <input
                                  type="file"
                                  id="fileInput"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  style={{ display: "none" }}
                                />
                              </div>

                              {/* Remove Image */}
                              {profile.imageUrl && (
                                <div className="mb-4">
                                  <button
                                    onClick={handleImageRemove}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                  >
                                    Remove image
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* First Name */}
                            <div className="mb-4 flex gap-2">
                              <label htmlFor="firstName" className="block mb-2">
                                First Name & Lastname:
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                value={profile.Email}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border rounded-lg p-2"
                              />
                            </div>
                            {/* Last Name */}

                            {/* Gender */}
                            <div className="mb-4 flex space-x-[7.5rem]">
                              <label htmlFor="gender" className="block mb-2">
                                Gender:
                              </label>
                              <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="border rounded-lg p-2 px-16"
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>

                            <button
                              onClick={handleSave}
                              className="bg-blue-500 text-start text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                              Save
                            </button>
                            {/* Close Button */}
                          </div>
                        </div>
                      )}
                    </div>

                    <img
                      className="w-32 h-32 rounded-full mx-auto border-2 hover:border-gray-900"
                      src={imageUrl || profile.imageUrl}
                      alt=""
                    />
                    {/* Image Upload Button (Hidden by default) */}
                    <input
                      type="file"
                      name="profile"
                      id={`upload_profile_${profile.imageUrl}`}
                      hidden
                      required
                      className="absolute top-0 left-0 ml-10 w-32 h-32 opacity-0 cursor-pointer"
                    />
                    {/* Label to trigger file input */}
                    <label
                      htmlFor={`upload_profile_${profile.imageUrl}`}
                      className="absolute top-10 left-[45%] w-32 h-32"
                    >
                      <div className=" rounded-full  text-center mt-4">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 hide hover:"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <h1 className="text-center font-bold p-2">
                      {profile.Email}
                    </h1>
                    <button className="py-2 p-2 text-lg border-2 border-blue-600">
                      {profile.role}
                    </button>
                    <p className="mt-2 text-sm text-gray-900 p-2">
                      Update Profile visibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div class="  p-12 ">
            <div className="p-10 w-[20rem]  bg-white border-2">
              <p>
                Let recruiters know what role you’re looking for to make sure
                you find opportunities that are right for you.
              </p>
            </div>
          </div>
        </div>

        {/* right cards */}
        <div className="pt-10 pl-10">
          <h1 className="text-2xl font-bold py-2">Experience</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <a
                  href="#"
                  class="font-bold text-lg py-4 leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Browse your Projects
                </a>
                <h2 className="text-lg font-semibold">
                  Showcase your skills to recruiters with job-relevant projects
                </h2>
                <p>
                  Add projects here to demonstrate your technical expertise and
                  ability to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div class="p-5   border bg-white rounded text-gray-500">
              <div class="flex items-center">
                <div class="">
                  <a
                    href="#"
                    class="font-bold text-lg py-4 leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    Work history
                  </a>
                  <div className="flex flex-col md:flex-row gap-2 p-10 border bg-gray-100">
                    <h2 className=" font-semibold w-2/3">
                      Add your past work experience here. If you’re just
                      starting out, you can add internships or volunteer
                      experience instead.
                    </h2>
                    <button className="px-5 h-10 border-2 border-blue-700">
                      + Add Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold py-2">Education</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <a
                  href="#"
                  class="font-bold text-lg py-4 leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Credentials
                </a>
                <div className="py-2 gap-5 boder bg-gray-200 flex flex-col md:flex-row p-2">
                  <button className="px-5 h-10 border-2 border-blue-700">
                    + Add Education
                  </button>
                  <p className="font-bold hover:underline hover:text-blue-600 py-2">
                    Browse your Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;

import Navbar from "../Navbar";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import Footer from "../Home/footer/Footer";

function Profile({ item }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [iseducationopen, setIsEducationOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openEducationModel = () => {
    setIsEducationOpen(true);
  };
  const closeEducationModel = () => {
    setIsEducationOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
  const generateYearOptions = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const years = generateYearOptions(1990, new Date().getFullYear());

  const generateYearOptions2 = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const years2 = generateYearOptions2(1990, new Date().getFullYear());

  const profiles = [
    {
      id: 1,
      Email: "Emily Wilson",
      role: "Share Profile Link",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia Maiores et perferendis eaque.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
    },
  ];

  const [formData, setFormData] = useState({
    educationInstitute: "",
    degree: "",
    educationStartMonth: "",
    educationStartYear: "",
    graduationMonth: "",
    graduationYear: "",
    currentlyStudying: false,
  });

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("educationData", JSON.stringify(formData));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData1) => ({
      ...prevData1,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  

  return (
    <>
      <Navbar />
      {/* left cards */}

      {/* Map over the profiles and render each profile card */}
      <div className="flex flex-col md:flex-row bg-blue-100 justify-center items-center">
        <div>
          {profiles.map((profile) => (
            <div key={profile.id} className="flex">
              <div className="m-20 shadow-xl w-[300px] ">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="py-5 p-10 px-20 bg-white rounded text-center text-gray-500 max-w-2xl">
                    <div className="flex space-x-2 -mr-4 ">
                      <h1 className="text-sm w-full">Personal Details</h1>
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
                    <button className="py-1 p-2 text-sm border-2 border-blue-400 w-full">
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
          
        </div>

        {/* right cards */}
        <div className="pt-10 pl-10 pr-6 flex flex-col mb-8">
          <h1 className="text-2xl font-bold py-2">WorkSpace</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <a
                  href="#"
                  class=" font-bold text-lg leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
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

          <h1 className="text-2xl font-bold py-4">Education</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <div class="font-bold text-lg py-2 leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                  Credentials
                </div>
                <div className="mb-4">
                  Update your educational background to showcase where you are
                  currently studying or have recently graduated. Including this
                  information is essential for potential employers. Even if you
                  are still in school or haven't completed your studies, it's
                  beneficial to share your educational path. If you have
                  obtained a college degree, you can exclude your high school or
                  GED details. Remember, all fields are optional but can greatly
                  enhance your profile.
                </div>

                <div className="py-2 gap-5 boder bg-gray-200 flex flex-col md:flex-row p-2">
                  <button
                    onClick={openEducationModel}
                    className="px-5 h-10 border-2 border-blue-700"
                  >
                    + Add Education
                  </button>
                  {/* education open */}
                  {iseducationopen && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center mt-16 ">
                      <div className="relative w-auto max-w-lg mx-auto my-6 overflow-y-auto max-h-full">
                        <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full p-8">
                          <button
                            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                            onClick={closeEducationModel}
                          >
                            <svg
                              className="h-6 w-6 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {/* Modal content */}
                          <form
                            className="text-start"
                            onSubmit={handleEducationSubmit}
                          >
                            <h2 className="text-xl font-bold mb-4">
                              Education
                            </h2>
                            <p className="mb-4">
                              Add your educational background to let employers
                              know where you studied or are currently studying.
                              Even if you didn’t finish, it’s important to
                              include it here. And if you’ve earned a college
                              degree, you don’t need to add your high
                              school/GED. All fields are optional.
                            </p>
                            <div className="max-w-sm">
                              <label
                                htmlFor="educationInstitute"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                              >
                                Name of institution
                              </label>
                              <select
                                value={formData.educationInstitute}
                                onChange={handleInputChange}
                                id="educationInstitute"
                                name="educationInstitute"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="">Choose an institution</option>
                                <option value="Harvard University">
                                  Harvard University
                                </option>
                                <option value="Stanford University">
                                  Stanford University
                                </option>
                                <option value="Massachusetts Institute of Technology (MIT)">
                                  Massachusetts Institute of Technology (MIT)
                                </option>
                                <option value="University of Oxford">
                                  University of Oxford
                                </option>
                                <option value="University of Cambridge">
                                  University of Cambridge
                                </option>
                              </select>
                            </div>

                            <div className="max-w-sm">
                              <label
                                htmlFor="degree"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4"
                              >
                                Degree
                              </label>
                              <select
                                value={formData.degree}
                                onChange={handleInputChange}
                                name="degree"
                                id="degree"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="">Choose a degree</option>
                                <option value="Less than high school diploma">
                                  Less than high School diploma (or equivalent)
                                </option>
                                <option value="High school diploma">
                                  High school diploma (or equivalent)
                                </option>
                                <option value="Associate Degree">
                                  Associate Degree (e.g.,AA,AS)
                                </option>
                                <option value="Bachelor's degree">
                                  Bachelor's degree (e.g.,BA,BTECH)
                                </option>
                                <option value="Master's degree">
                                  Master's degree (e.g.,MA,MS,MEd,MSW,MBA)
                                </option>
                                <option value="Professional school degree ">
                                  Professional school degree
                                  (e.g.,MD,DDS,DVM,LLB,JD)
                                </option>
                                <option value="Doctorate degree ">
                                  Doctorate degree (e.g.,phD,EdD)
                                </option>
                              </select>
                            </div>
                            {/* start Month */}
                            <label
                              htmlFor="EducationStartDate"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4 "
                            >
                              Start date
                            </label>
                            <div className="flex justify-start items-start flex-rows gap-12">
                              <div className="max-w-sm">
                                <label
                                  htmlFor="educationStartMonth"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Month
                                </label>
                                <select
                                  value={formData.educationStartMonth}
                                  onChange={handleInputChange}
                                  name="educationStartMonth"
                                  id="educationStartMonth"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a month</option>
                                  <option value="January">January</option>
                                  <option value="February">February</option>
                                  <option value="March">March</option>
                                  <option value="April">April</option>
                                  <option value="May">May</option>
                                  <option value="June">June</option>
                                  <option value="July">July</option>
                                  <option value="August">August</option>
                                  <option value="September">September</option>
                                  <option value="October">October</option>
                                  <option value="November">November</option>
                                  <option value="December">December</option>
                                </select>
                              </div>
                              <div className="max-w-sm">
                                <label
                                  htmlFor="educationStartYear"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Year
                                </label>
                                <select
                                  value={formData.educationStartYear}
                                  onChange={handleInputChange}
                                  name="educationStartYear"
                                  id="educationStartYear"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a year</option>
                                  {/* List of year options */}
                                  {years2.map((year2) => (
                                    <option key={year2} value={year2}>
                                      {year2}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* End month  */}
                            <label
                              htmlFor="graduationDate"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4"
                            >
                              Graduation date or expected graduation date
                            </label>

                            <div className="flex justify-start items-start flex-rows gap-12">
                              <div className="max-w-sm">
                                <label
                                  htmlFor="graduationMonth"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Month
                                </label>
                                <select
                                  value={formData.graduationMonth}
                                  onChange={handleInputChange}
                                  name="graduationMonth"
                                  id="graduationMonth"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a month</option>
                                  <option value="January">January</option>
                                  <option value="February">February</option>
                                  <option value="March">March</option>
                                  <option value="April">April</option>
                                  <option value="May">May</option>
                                  <option value="June">June</option>
                                  <option value="July">July</option>
                                  <option value="August">August</option>
                                  <option value="September">September</option>
                                  <option value="October">October</option>
                                  <option value="November">November</option>
                                  <option value="December">December</option>
                                </select>
                              </div>
                              <div className="max-w-sm">
                                <label
                                  htmlFor="graduation-Year"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Year
                                </label>
                                <select
                                  value={formData.graduationYear}
                                  name="graduationYear"
                                  onChange={handleInputChange}
                                  id="graduationYear"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a year</option>
                                  {/* List of year options */}
                                  {years2.map((year2) => (
                                    <option key={year2} value={year2}>
                                      {year2}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* Currently work here */}

                            <div className="flex items-center py-4">
                              <input
                                value={formData.currentlyStudying}
                                onChange={handleInputChange}
                                name="currentlyStudying"
                                id="currentlyStudying"
                                type="checkbox"
                                // value="currently studying"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="currentlyStudying"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                I currently studying here
                              </label>
                            </div>

                            <div className="flex md:flex-row justify-start items-start mt-4 gap-8">
                              <div>
                                <button
                                  type="submit"
                                  className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border border-gray-400 hover:border-none font-bold py-2 px-4 rounded"
                                >
                                  Save
                                </button>
                              </div>
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  onClick={closeEducationModel}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* education close */}
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

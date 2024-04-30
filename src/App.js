import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";

import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Profile/Settings";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/Payment";
import MyCourse from "./Components/mycourse/MyCourse";
import DataAnalytics from "./Components/Profile/BrowseProject/dataAnalytics/DataAnalytics";
import Student from "./Components/Home/Plat form/Student";
import { useState, useEffect } from "react";
import Professional from "./Components/Home/Plat form/Professionals";

import ArtsandHumanities from './Components/Home/Plat form/AllCourses/ArtsandHumanities';
import Business from './Components/Home/Plat form/AllCourses/Business';
import ComputerScience from './Components/Home/Plat form/AllCourses/ComputerScience'
import FullStack from './Components/Home/Plat form/AllCourses/FullStack';
import ParticularFullStack from './Components/Home/Plat form/particularCoursesPage/ParticularFullStack';
import Health from './Components/Home/Plat form/AllCourses/Health';
import PersonalDevelopment from './Components/Home/Plat form/AllCourses/PersonalDevelopment';
import SocialScience from './Components/Home/Plat form/AllCourses/SocialScience'

function App() {
  const [usernameFirstLetter, setUsernameFirstLetter] = useState("");

  useEffect(() => {
    // Check if the username's first letter exists in local storage
    const storedFirstLetter = localStorage.getItem("usernameFirstLetter");
    if (storedFirstLetter) {
      setUsernameFirstLetter(storedFirstLetter);
    }
  }, []);

  useEffect(() => {
    // Update username's first letter in local storage when changed
    localStorage.setItem("usernameFirstLetter", usernameFirstLetter);
  }, [usernameFirstLetter]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/login" element={<Login />} />

          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Mycourse" element={<MyCourse />} />
          <Route path="/course/Data Science" element={<DataAnalytics />} />
          <Route path="/student" element={<Student />} />
          <Route path="/artsandHumanities" element={<ArtsandHumanities />} />
          <Route path="/business" element={<Business />} />
          <Route path="/computerscience" element={<ComputerScience />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/fullStack" element={<FullStack />} />
          <Route path="/fullStack/particularFullStack" element={<ParticularFullStack />} />
          <Route path="/health" element={<Health />} />
          <Route
            path="/personaldevelopment"
            element={<PersonalDevelopment />}
          />
          <Route path="/socialscience" element={<SocialScience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";

import Profile from "./Components/Profile/Profile"
import Settings from "./Components/Profile/Settings"
import ForgotPassword from "./Components/Login/ForgotPassword"
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/Payment";
import MyCourse from "./Components/mycourse/MyCourse";
import DataAnalytics from "./Components/Profile/BrowseProject/dataAnalytics/DataAnalytics";
import Student from "./Components/Home/Plat form/Student";
import { useState, useEffect } from "react";
import Professional from "./Components/Home/Plat form/Professionals";

function App() {
  const [usernameFirstLetter, setUsernameFirstLetter] = useState('');

  useEffect(() => {
    // Check if the username's first letter exists in local storage
    const storedFirstLetter = localStorage.getItem('usernameFirstLetter');
    if (storedFirstLetter) {
      setUsernameFirstLetter(storedFirstLetter);
    }
  }, []);

  useEffect(() => {
    // Update username's first letter in local storage when changed
    localStorage.setItem('usernameFirstLetter', usernameFirstLetter);
  }, [usernameFirstLetter]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home usernameFirstLetter={usernameFirstLetter} />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route
            path="/"
            element={<Login setUsernameFirstLetter={setUsernameFirstLetter} />}
          />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile usernameFirstLetter={usernameFirstLetter} />} />
          <Route path="/Settings" element={<Settings usernameFirstLetter={usernameFirstLetter} />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Mycourse" element={<MyCourse  usernameFirstLetter={usernameFirstLetter}/>} />
          <Route path="/course/Data Science" element={<DataAnalytics />} />


          <Route path="/student" element={<Student />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

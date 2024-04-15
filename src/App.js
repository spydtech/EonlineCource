import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";

import Profile from "./Components/Profile/Profile"
import Settings from "./Components/Profile/Settings"
import ForgotPassword from "./Components/Login/ForgotPassword"

import MyCourse from "./Components/mycourse/MyCourse";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />

          <Route path="/mycourse" element={<MyCourse />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

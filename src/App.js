import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";

import Profile from "./Components/Profile/Profile"
import Settings from "./Components/Profile/Settings"
import ForgotPassword from "./Components/Login/ForgotPassword"
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/Payment";

import MyCourse from "./Components/mycourse/MyCourse"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Mycourse" element={<MyCourse />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

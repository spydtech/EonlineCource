import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Navbar from './Components/Navbar';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";
// import { Dropdown } from "flowbite-react";
import Profile from "./Components/Profile"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Login" element={<Login />} />
         
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

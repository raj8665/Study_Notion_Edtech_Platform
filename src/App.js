import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import OpenRoute from "./components/core/Auth/OpenRoute";
function App() {
  return (
   <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/update-password/:id" element={<ResetPassword />} />

        <Route path="/verify-email" element={<VerifyOtp />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

          </Routes>
   </div>
  );
}

export default App;
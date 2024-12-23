import "./App.css";
import {Route,Routes,useNavigate} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./components/core/Dashboard/MyProfile";
import MyCourses from "./components/core/Dashboard/MyCourses/MyCourses";
import AddCourse from "./components/core/Dashboard/AddCourse/index";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard"
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute"
function App() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile)

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
        
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route path="dashboard/my-profile" element={<MyProfile />} />

        <Route path="dashboard/Settings" element={<Settings />} />

        {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

{user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
 
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/update-password/:id" element={<ResetPassword />} />

        <Route path="/verify-email" element={<VerifyOtp />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<Error />} />

          </Routes>
   </div>
  );
}

export default App;
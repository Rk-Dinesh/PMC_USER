import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./404";
import SignIn from "./pages/auth/SignIn";
import OTP from "./pages/auth/OTP";
import Dashboard from "./pages/dashboard/Dashboard";
import MyCourses from "./pages/courses/MyCourses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course" element={<MyCourses />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

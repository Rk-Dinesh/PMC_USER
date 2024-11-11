import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./404";
import SignIn from "./pages/auth/SignIn";
import OTP from "./pages/auth/OTP";
import Dashboard from "./pages/dashboard/Dashboard";
import MyCourses from "./pages/courses/MyCourses";
import GenerateCourse from "./pages/courses/GenerateCourse";
import HelpSupport from "./pages/help&support/HelpSupport";
import NewTicket from "./pages/help&support/NewTicket";
import FAQ from "./pages/faq/FAQ";
import Notification from "./pages/notification/Notification";
import TermsService from "./pages/terms/TermsService";
import PrivacyPolicy from "./pages/terms/PrivacyPolicy";
import Profile from "./pages/profile/Profile";

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
            <Route path="/create" element={<GenerateCourse />} />
            <Route path="/support" element={<HelpSupport />} />
            <Route path="/newticket" element={<NewTicket />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/notify" element={<Notification />} />
            <Route path="/terms" element={<TermsService />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/layout/Layout";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import OTP from "./pages/auth/OTP";
import NotFound from "./404";
import Content from "./pages/courses/Content";

// Lazy load the components
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const MyCourses = lazy(() => import("./pages/courses/MyCourses"));
const GenerateCourse = lazy(() => import("./pages/courses/GenerateCourse"));
const HelpSupport = lazy(() => import("./pages/help&support/HelpSupport"));
const NewTicket = lazy(() => import("./pages/help&support/NewTicket"));
const FAQ = lazy(() => import("./pages/faq/FAQ"));
const Notification = lazy(() => import("./pages/notification/Notification"));
const TermsService = lazy(() => import("./pages/terms/TermsService"));
const PrivacyPolicy = lazy(() => import("./pages/terms/PrivacyPolicy"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const ViewTicket = lazy(() => import("./pages/help&support/ViewTicket"));
const Certificate = lazy(() => import("./pages/certificate/Certificate"));
const ViewCertificate = lazy(() =>
  import("./pages/certificate/ViewCertificate")
);
const Subscription = lazy(() => import("./pages/subscription/Subscription"));
const Invoice = lazy(() => import("./pages/subscription/Invoice"));
const ListTopics = lazy(() => import("./pages/courses/ListTopics"));
const Pricing = lazy(() => import("./pages/subscription/Pricing"));
const Payment = lazy(() => import("./pages/subscription/Payment"));
const Success = lazy(() => import("./pages/subscription/Success"));
const Failed = lazy(() => import("./pages/subscription/Failed"));

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("LoggedIn") === true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/content" element={<Content />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/course" element={<MyCourses />} />
                      <Route path="/create" element={<GenerateCourse />} />
                      <Route path="/topics" element={<ListTopics />} />
                      <Route path="/support" element={<HelpSupport />} />
                      <Route path="/newticket" element={<NewTicket />} />
                      <Route path="/viewticket" element={<ViewTicket />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/notify" element={<Notification />} />
                      <Route path="/terms" element={<TermsService />} />
                      <Route path="/policy" element={<PrivacyPolicy />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/certificate" element={<Certificate />} />
                      <Route
                        path="/viewcertificate"
                        element={<ViewCertificate />}
                      />
                      <Route path="/subscription" element={<Subscription />} />
                      <Route path="/invoice" element={<Invoice />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/success" element={<Success />} />
                      <Route path="/failed" element={<Failed />} />
                    </Routes>
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

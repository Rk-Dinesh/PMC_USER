import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Headers from "./pages/layout/Headers";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<SignUp />} />
            <Route path="/dashboard1" element={<Headers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

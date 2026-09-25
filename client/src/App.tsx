import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/home" element={<Dashboard />}/>
          <Route path="/sign-up" element={<Register />}/>
          <Route path="/sign-in" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/verification" element={<Verification />}/>
          <Route path="/change-password" element={<ChangePassword />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

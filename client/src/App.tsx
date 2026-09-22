import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/sign-up" element={<Register />}/>
          <Route path="/sign-in" element={<Login />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

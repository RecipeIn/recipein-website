import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import Verification from "./pages/Verification";
import NewPass from "./pages/NewPass";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/verif" element={<Verification />} />
      <Route path="/newpass" element={<NewPass />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}

export default App;

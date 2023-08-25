import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Contactpage from "./pages/Contactpage";
import Termspage from "./pages/Termspage";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/terms" element={<Termspage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route>
          <Route path="/category" element={<Homepage />} />
          <Route path="/mainmenu" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

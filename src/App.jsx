import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Loginpage from "./auth/Loginpage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Contactpage from "./pages/Contactpage";
import Termspage from "./pages/Termspage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/terms" element={<Termspage />} />

        <Route>
          <Route path="/category" element={<Homepage />} />
          <Route path="/mainmenu" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

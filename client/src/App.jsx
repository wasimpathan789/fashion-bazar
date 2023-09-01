
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Contactpage from "./pages/Contactpage";
import Termspage from "./pages/Termspage";
import Login from "./features/auth/components/Login";
import SignUp from "./features/auth/components/SignUp";
import Cartpage from "./pages/Cartpage";
import New from "./pages/New";
import ProductDetailsPage from './pages/ProductDetailsPage'
// import ProductDetails from "./features/products/components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/cart" element={<Cartpage />} />
        {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
        <Route path="/productdetailspage" element={<ProductDetailsPage />} />

        <Route path="/b" element={<New />} />





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

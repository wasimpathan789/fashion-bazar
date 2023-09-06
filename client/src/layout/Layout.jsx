import Footer from "../features/common/Footer";
import Navbar from "../features/common/Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

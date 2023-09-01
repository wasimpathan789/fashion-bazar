import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer px-20 py-6">
      <div className="footer-top flex justify-between ">
        <div className="footer-top-left flex justify-between ">
          <div className="f-about-us">
            <h3>About Us</h3>
            <p className="gray text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolorum nobis quas repellendus, asperiores dolore magni suscipit?
            </p>
          </div>
          <div className="f-features">
            <h3>Shopping</h3>

            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                Mens Shopping
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                Womens Shopping
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/productdetailspage"} className="gray ">
                Kids Shopping
              </Link>
            </li>
          </div>
        </div>
        <div className="footer-top-right flex justify-evenly  ">
          <div className="f-features">
            <h3>Helpful </h3>

            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                Sale
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/contact"} className="gray ">
                Contact
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                Support
              </Link>
            </li>
          </div>
          <div className="f-features">
            <h3>Features</h3>

            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                About Us
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/terms"} className="gray ">
                Terms & Condition
              </Link>
            </li>
            <li className=" mt-4 ">
              <Link to={"/"} className="gray ">
                Best Links
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex justify-center items-center gap-4">
        <span className="primary text-2xl ">© </span>
        <p className="poppins ">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

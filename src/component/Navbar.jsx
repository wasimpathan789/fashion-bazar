import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsCart, BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPersonDress } from "react-icons/fa6";
// import { FaMobileRetro } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isCategoryOpen, setIsCategorOpen] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar-top flex justify-between items-center px-20 py-4 ">
        <div
          onClick={(e) => setIsSliderOpen(true)}
          className="hamburger pointer "
        >
          <HiOutlineMenuAlt1 size={30} />
        </div>
        <Link to={"/"} className="logo">
          <img src="" alt="" />
          <span className="text-4xl primary poppins  ">Fashion Bazar</span>
        </Link>
        <form action="" className="nav-form flex justify-center">
          <input
            type="text"
            placeholder="Search here"
            className="py-3 px-4 primary poppins  "
          />
          <button className="btn bg-primary poppins text-base ">Search</button>
        </form>
        <div className="user flex items-center">
          <Link className="wishlist">
            <AiOutlineHeart size={30} />
          </Link>
          <Link className="cart">
            <span className="flex justify-center items-center text-2xl bg-primary">
              0
            </span>
            <BsCart size={30} />
          </Link>
          <Link className="user-login">
            <AiOutlineUser size={30} />
          </Link>
        </div>
      </div>
      <div className="navbar-bottom flex justify-between items-center  bg-primary px-20 ">
        <div
          onClick={(e) => setIsCategorOpen(!isCategoryOpen)}
          className="nav-category flex justify-between items-center gap-8  px-4 py-3 "
        >
          <div className="flex items-center gap-4  ">
            <HiBars3CenterLeft size={30} />
            <span>All Categories</span>
          </div>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div
          className={
            isCategoryOpen
              ? " nav-category-list-active nav-category-list  bg-primary "
              : "nav-category-list flex flex-col   px-4 py-3 "
          }
        >
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
          <Link to={"/"}>
            <FaPersonDress /> <span>Mens</span>
          </Link>
        </div>
        <div className="nav-bottom-content flex gap-8 text-lg   ">
          <Link to={"/terms"}>Terms & Condition</Link>
          <Link to={"/contact"}>Contact Page</Link>
        </div>
      </div>

      {/* mobile version  */}
      <div
        className={
          isSliderOpen ? "nav-mobile-active  px-4 py-4 " : "nav-mobile"
        }
      >
        <div className="nav-mobile-icon flex justify-between">
          <div className="flex gap-4">
            <Link className="mobile-wishlist primary ">
              <AiOutlineHeart size={25} className="black " />
              <span>0</span>
            </Link>
            <Link className="mobile-user-login">
              <AiOutlineUser size={25} className=" black" />
            </Link>
          </div>
          <div>
            <div
              onClick={(e) => setIsSliderOpen(false)}
              className={
                isSliderOpen &&
                "close flex justify-center items-center bg-primary"
              }
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="nav-mobile-form flex items-center ">
          <input
            type="text"
            className=" px-4 text-lg "
            placeholder="Search here"
          />
          <button className=" px-4 flex justify-center items-center pointer bg-primary">
            <BsSearch size={20} />
          </button>
        </div>
        <div className="nav-mobile-category flex justify-start gap-4 mt-7 items-center">
          <Link>Caegories</Link>
          <span className="vertical "></span>
          <Link>Main Menu</Link>
        </div>
        <ul className="category-list  flex flex-col items-start gap-4">
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>{" "}
          <li className="flex justify-start items-center bg-primary  ">
            <Link className="flex items-center">
              <AiOutlineClose size={22} />
              <span className="  ml-4 ">Mobile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

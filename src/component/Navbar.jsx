import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex  ">
      <div className="log0">
        <img src="" alt="" />
        <span className="text-4xl ">Fashion Bazar</span>
      </div>
      <form action="">
        <input type="text" />
        <button className="btn ">Search</button>
      </form>
      <div className="user">
        <Link className="cart">
          <span>0</span>
          <BsCart size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

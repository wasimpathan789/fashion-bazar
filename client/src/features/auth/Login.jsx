import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("/");

  const loginHandler = (e) => {
    e.preventDefault();
    setUserName(""), setPassword(""), navigate("/");
  };
  return (
    <div className="login-container flex justify-center items-center w-full h-screen ">
      <div className="login-wrapper">
        <h1 className="text-center ">Hello Again !</h1>

        <form action="" onSubmit={loginHandler} className="mt-8 w-full">
          <div className="login-label flex flex-col poppins mt-4 ">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-2 py-2 text-lg px-3 poppins "
            />
          </div>
          <div className="login-label flex flex-col poppins mt-5">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 py-2 text-lg px-3 poppins "
            />
          </div>
          <div className="w-full flex justify-end mt-2 ">
            <span className="poppins primary ">forgott password ?</span>
          </div>

          <div className="w-full mt-5 ">
            <button
              type="submit"
              className="w-full bg-primary poppins pointer py-3  text-lg "
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <Link to={"/signup"}>Dont have an accoutn ? </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

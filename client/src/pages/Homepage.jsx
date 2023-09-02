import React, { useEffect, useState } from "react";

// pages 
import Layout from "../layout/Layout";
import Products from "../features/products/components/Products";
import Category from '../features/category/components/Category'

// icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import laptop from "../assets/laptop.jpg";

const Homepage = () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("https://potter-db-api.herokuapp.com/v1/movies")
      .then(res => res.json())
      .then(data => setUsers(data.data))


  }, [])
  return (
    <Layout>
      <div className="paddingClass ">
        {/* <Category /> */}
        {/* <div className="category ">
          <div className="category top flex justify-between items-center w-full ">
            <h1 className="font-semibold text-xl">Shop by categories</h1>
            <div className="flex gap-4 ">
              <BsArrowLeft />
              <BsArrowRight />
            </div>

          </div>
          <div className="category-bottpm flex ">
            <div className="flex">
              <img src={laptop} alt="" />
            </div>
            <div className="flex">
              <img src={laptop} alt="" />
            </div>
            <div className="flex">
              <img src={laptop} alt="" />
            </div>
          </div>
        </div> */}


        <Products />
        <div>
          <p>data</p>
          {
            users.map((el, id) => (
              <li>
                {el.title}
              </li>
            ))
          }

        </div>
      </div>
    </Layout>
  );
};

export default Homepage;

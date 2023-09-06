import React, { useEffect, useState } from "react";

// pages 
import Layout from "../layout/Layout";
import Products from "../features/products/components/Products";
// import Category from '../features/category/components/Category'

// icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import laptop from "../assets/laptop.jpg";
import AdminCreateProduct from "../features/admin/components/AdminCreateProduct";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [users, setUsers] = useState([])
  // const cat = useSelector((state) => state.adminCategory.data)
  const dispatch = useDispatch()


  useEffect(() => {
    // fetch("https://potter-db-api.herokuapp.com/v1/movies")
    //   .then(res => res.json())
    //   .then(data => setUsers(data.data))



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


        <div>
          hey
        </div>

        <Products />
      </div>
    </Layout>
  );
};

export default Homepage;

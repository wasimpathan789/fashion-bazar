import "./Products.css";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAll, selectAllProducts } from "./productSlice";
import Star from "../../component/Star";
import ProductCard from "../../component/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.data);
  const [users, setUsers] = useState([]);

  // const fetchUserData = () => {
  //   fetch("https://dummyjson.com/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  useEffect(() => {
    dispatch(fetchProductsAll());
    // fetchUserData();
  }, []);
  return (
    <div>
      <h1 className="heading poppins mb-4 ">Our Products</h1>

      <div>
        {allProducts.length > 0 && (
          <div className="products-cards py-4 ">
            {allProducts.map((user, id) => (
              <ProductCard
                image={user.image}
                price={user.price}
                title={user.title.slice(0, 50)}
                user={user}
                key={id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

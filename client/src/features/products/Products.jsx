import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAll, selectAllProducts } from "./productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.data);
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    dispatch(fetchProductsAll());
    fetchUserData();
  }, []);
  return (
    <div>
      <h5>List of products</h5>
      {/* {allProducts &&
        allProducts.map((product, id) => <p key={id}> {product.title}</p>)} */}

      <div>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;

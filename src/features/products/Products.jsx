import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAll } from "./productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProductsAll());
  }, []);
  return (
    <div>
      <h5>List of products</h5>
      {allProducts.map((el, id) => (
        <p key={id}> {el.title}</p>
      ))}

      {/* <button onClick={() => dispatch(fetchProductsAll())}>
        {" "}
        Get all data
      </button> */}
    </div>
  );
};

export default Products;

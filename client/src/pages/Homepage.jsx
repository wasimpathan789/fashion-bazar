import React from "react";
import Layout from "../layout/Layout";
import Products from "../features/products/components/Products";

const Homepage = () => {
  return (
    <Layout>
      <div className="paddingClass ">
        <Products />
      </div>
    </Layout>
  );
};

export default Homepage;

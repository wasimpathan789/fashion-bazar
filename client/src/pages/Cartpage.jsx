import React from "react";
import PageBanner from "../component/PageBanner";
import Layout from "../layout/Layout";
import Cart from "../features/cart/components/Cart";

const Cartpage = () => {
  return (
    <Layout>
      <PageBanner title={"Cart"} path={"cart"} />
      <div className="paddingClass ">
        <Cart />
      </div>
    </Layout>
  );
};

export default Cartpage;

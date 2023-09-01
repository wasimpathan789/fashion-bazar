import "./ProductDetailsPage.css";
import Layout from "../layout/Layout";
// import ProductDetails from "../features/products/components/ProductDetails";
import SingleProduct from "../features/products/components/SingleProduct";

const ProductDetailsPage = () => {
    return (
        <Layout>
            <div className="paddingClass py-8">
                {/* <h1>Product page</h1> */}
                {/* <ProductDetails /> */}
                <SingleProduct />
            </div>
        </Layout>
    );
};

export default ProductDetailsPage;

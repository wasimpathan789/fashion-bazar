import "./ProductDetailsPage.css";
import Layout from "../layout/Layout";
import ProductDetails from "../features/products/components/ProductDetails";

const ProductDetailsPage = () => {
    return (
        <Layout>
            <div className="paddingClass">
                <h1>Product page</h1>
                <ProductDetails />
            </div>
        </Layout>
    );
};

export default ProductDetailsPage;

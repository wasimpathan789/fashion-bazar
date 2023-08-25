import { useEffect, useState } from "react";
import "./ProductCard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

const ProductCard = ({ title, price, image, user }) => {
  const [filled, setFilled] = useState(false);
  const dispatch = useDispatch();
  // const productCartState = useSelector((state) => state.cart);

  useEffect(() => {
    // dispatch(addToCart(user));
  }, []);
  return (
    <div className="product-card">
      <div className="p-c-image w-full px-4 py-4 ">
        <img src={image} alt="" className=" h-full" />
      </div>
      <div className="product-card-body px-4 py-4 ">
        <h4 className="">{title}</h4>
        <p className="mt-4 ">
          {price} <span className="primary">{price}</span>
        </p>
        <span>rating</span>
        <div className="w-full flex items-center justify-center mt-6 pointer">
          <button
            onClick={(user) =>
              dispatch(
                addToCart({
                  title,
                  price,
                  image,
                })
              )
            }
            className="bg-primary w-full py-4 poppins text-md "
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="card-overlay" onClick={() => setFilled(!filled)}>
        {filled ? (
          <AiFillHeart size={30} fill="red" />
        ) : (
          <AiOutlineHeart size={30} fill="red" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

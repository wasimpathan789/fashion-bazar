import './ProductDetails.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import laptop from "../../../assets/laptop.jpg";
import game from "../../../assets/game.jpg";
import fan from '../../../assets/fan.jpg'
import headphone from "../../../assets/headphone.jpg";
import oneplus from "../../../assets/oneplus.jpg";

import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const productFetchById = useSelector((state) => state.a)
    const product = [
        {
            id: 1,
            title: "New Released Shirt",
            price: 3343,
            rating: {
                "rate": 4,
                "count": 120
            },
            colors: ["red", "black", "blue", "purple"],
            size: ["S", "M", "L", "XL"],

            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos magni quasi optio voluptates ducimus, laudantium velit? Consequatur fuga ex numquam, itaque ipsam temporibus iste at facilis veniam quia, nam corrupti dolore sapiente incidunt.",
            images: [laptop, game, oneplus, headphone, fan],
        },
    ];
    return (
        <div>
            {product.map((elem, id) => (
                <div key={id} className="pd-container flex gap-8  ">
                    <div className="pd-left">
                        <div className="pd-left-top">
                            <div className="pd-next-icon flex justify-center items-center pointer">
                                <MdKeyboardArrowLeft size={22} />
                            </div>

                            <img src={elem.images[0]} alt="" />
                            <div className="pd-prev-icon  flex justify-center items-center pointer">
                                <MdKeyboardArrowRight size={22} />
                            </div>
                        </div>
                        {/* for second map  */}

                        <div key={id} className="pd-left-bottom flex   ">
                            {elem.images.slice(0, 4).map((image, id) => (
                                <div className="pd-image-grid pointer">
                                    <img src={image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pd-right">
                        <h1 className="victor font-normal">{elem.title}</h1>
                        <div className="flex  mt-4 mb-4">
                            <AiFillStar color="#ffbb38" size={20} />
                            <AiFillStar color="#ffbb38" size={20} />
                            <AiFillStar color="#ffbb38" size={20} />
                            <AiFillStar color="#ffbb38" size={20} />
                        </div>

                        <h2 className="font-normal inter">
                            {elem.price} <LiaRupeeSignSolid size={20} />
                        </h2>
                        <div className="mt-6 ">
                            <div className="uppercase gray  mb-2">Select Color</div>

                            <div className="flex gap-4 ">
                                <div className="bg-primary px-2 py-1 w-fit ">Black</div>
                                <div className="bg-primary px-2 py-1 w-fit ">Black</div>
                                <div className="bg-primary px-2 py-1 w-fit ">Black</div>
                                <div className="bg-primary px-2 py-1 w-fit ">Black</div>
                            </div>
                        </div>
                        <div className="mt-6 ">
                            <div className="uppercase gray mb-2 ">Select Size</div>
                            <div className="flex gap-4 ">
                                <div className="bg-primary px-4 py-1 w-fit ">S</div>
                                <div className="bg-primary px-4 py-1 w-fit ">M</div>
                                <div className="bg-primary px-4 py-1 w-fit ">L</div>
                                <div className="bg-primary px-4 py-1 w-fit ">XL</div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className=" mb-2 uppercase  gray  ">Description</div>
                            <p>
                                {elem.description}
                            </p>
                        </div>
                        <div className="mt-4">
                            <button onClick={(e) => dispatch(addToCart(elem))} className="px-8 py-2 bg-primary text-lg pointer ">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductDetails

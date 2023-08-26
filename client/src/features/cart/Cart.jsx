import "./Cart.css";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import laptop from "../../assets/laptop.jpg";
import { FiTrash2 } from 'react-icons/fi'

const Cart = () => {
    const data = [
        {
            id: 1,
            productName: "Mens t-shirt",
            color: "red",
            size: "xl",
            price: "500",
            img: laptop
        },
        {
            id: 2,
            productName: "Mens t-shirt",
            color: "red",
            size: "xl",
            price: "500",
            img: laptop
        },
        {
            id: 3,
            productName: "Mens t-shirt",
            color: "red",
            size: "xl",
            price: "500",
            img: laptop
        },
        {
            id: 4,
            productName: "Mens t-shirt",
            color: "red",
            size: "xl",
            price: "500",
            img: laptop
        },
        {
            id: 5,
            productName: "Mens t-shirt",
            color: "red",
            size: "xl",
            price: "500",
            img: laptop
        },
    ];
    const [accordian, setAccordian] = useState(false);
    return (
        <div className="cart-container flex flex-col gap-4 ">
            {/*  product table  */}
            <div className="table">
                <div className="table-content table-bg flex  ">
                    <div className="first">Sr.  No.</div>
                    <div className="second flex justify-center items-center">  Product</div>
                    <div className="third">Size</div>
                    <div className="third">Color</div>
                    <div className="third">Price</div>
                    <div className="third">Quantity</div>
                    <div className="third">Price</div>

                </div>
                {data.map((el, id) => (
                    <div key={id} className="table-content flex  ">
                        <div className="first">{el.id}</div>
                        <div className="second second-img"> <img src={el.img} alt="" /> <span>{el.productName}</span></div>
                        <div className="third">{el.size}</div>
                        <div className="third">{el.color}</div>
                        <div className="third">{el.price}</div>
                        <div className="third">Quantity</div>
                        <div className="third pointer "><FiTrash2 size={22} /></div>

                    </div>
                ))}

            </div>

            {/* mobile table  */}
            <div className="m-table">
                {data.map((elem, id) => (
                    <div key={id} className="m-table-wrapper py-4 px-4 mt-4 ">
                        <div className="m-table-row flex items-center justify-between py-4 w-full ">
                            <p className="poppins text-lg">Sr. No.</p>
                            <span className="">{elem.id}</span>
                        </div>
                        <div className="m-table-row flex items-center justify-between py-4 w-full ">
                            <p className="poppins text-lg">Product</p>
                            <span className="">{elem.productName}</span>
                        </div>
                        <div className="m-table-row flex items-center justify-between w-full ">
                            <p className="poppins text-lg">Product Image</p>
                            <img src={elem.img} alt="" />
                        </div>
                        <div className="m-table-row flex items-center justify-between py-4 w-full ">
                            <p className="poppins text-lg">Price</p>
                            <span className="">{elem.price}</span>
                        </div>
                        <div className="m-table-row flex items-center justify-between py-4 w-full ">
                            <p className="poppins text-lg">Color</p>
                            <span className="">{elem.color}</span>
                        </div>
                        <div className="m-table-row flex items-center justify-between py-4 w-full ">
                            <p className="poppins text-lg">Quantity</p>
                            <span className="">{elem.color}</span>
                        </div>
                        <div className="m-table-row flex items-center justify-center py-4 w-full ">
                            {/* <p className="poppins text-lg">Remove</p> */}
                            <span className="pointer"><FiTrash2 size={22} /></span>
                        </div>


                    </div>
                ))}


            </div>

            <div className="cart-payment">
                <div className="subtotal flex items-center justify-between  ">
                    <p>Subtotal</p>
                    <span>5453</span>
                </div>
                <div className="shipping px-4 py-4 ">
                    <div className="flex justify-between mt-3 ">
                        <p>Subtotal</p>
                        <span>43434</span>
                    </div>
                    <div className="flex justify-between mt-3 ">
                        <p>Shippoing Charges</p>
                        <span>40</span>
                    </div>
                    <div className="flex justify-between mt-3 ">
                        <p>Total Discount</p>
                        <span>43434</span>
                    </div>
                    {/* <div className="shipping-address mt-4 ">
                        <div
                            onClick={(e) => setAccordian(!accordian)}
                            className={
                                accordian
                                    ? "flex items-center justify-between py-3 px-2 bg-primary"
                                    : "flex items-center justify-between py-3 px-2 "
                            }
                        >
                            <p>Address</p>
                            <span>
                                {accordian ? (
                                    <IoIosArrowUp size={20} />
                                ) : (
                                    <IoIosArrowDown size={20} />
                                )}
                            </span>
                        </div>
                        <ul
                            className={
                                accordian
                                    ? "  address-content-active  px-6 address-content"
                                    : "address-content"
                            }
                        >
                            <li className="flex items-center gap-4 ">
                                <input type="radio" name="" id="" />
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Ipsum, sapiente deleniti placeat rerum reprehenderit ad
                                    exercitationem magni cum dolore recusandae.
                                </p>
                            </li>
                            <li className="flex items-center gap-4 ">
                                <input type="radio" name="" id="" />
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Ipsum, sapiente deleniti placeat rerum reprehenderit ad
                                    exercitationem magni cum dolore recusandae.
                                </p>
                            </li>
                        </ul>
                    </div> */}
                    <div className="total flex justify-between items-center mt-4 ">
                        <p>Total</p>
                        <span>454353</span>
                    </div>
                    <div className=" proceed flex justify-center items-center w-full mt-4  ">
                        <button className="bg-primary py-2 px-4 poppins pointer ">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

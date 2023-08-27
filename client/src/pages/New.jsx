import React, { useEffect } from "react";
import laptop from "../assets/laptop.jpg";
import game from "../assets/game.jpg";
import fan from "../assets/fan.jpg";
import headphone from "../assets/headphone.jpg";
import oneplus from "../assets/oneplus.jpg";
import { useState } from "react";

const New = () => {
    const [api, setApi] = useState([])
    const data = [
        {
            id: 1,
            title: "mobile",
            images: [laptop, game, fan, oneplus, headphone],
        },
    ];

    const getData = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    useEffect(() => {
        getData()

    }, [])

    const [selectedImage, setSelectedImage] = useState("");
    return (
        <div>
            {/* {data.map((elem, id) => (
                <>
                    <div key={id} className="flex ">
                        {elem.images.map((item) => (
                            <div className="">
                                <img width={"100px"} onClick={() => {
                                    console.log(item.images);
                                    setSelectedImage(item.images);
                                }} src={item} alt="" />
                            </div>
                        ))}
                    </div>
                    <h2>Product-Detail</h2>
                    {selectedImage &&
                        <img
                            src={selectedImage}
                            width={"225px"}
                            height={"225px"} />
                    }
                </>
            ))} */}

            <h1>data</h1>
        </div>
    );
};

export default New;

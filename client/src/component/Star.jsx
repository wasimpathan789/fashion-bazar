import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const Star = ({ stars }) => {
  const [rating, setRating] = useState(0);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      //   <span key={index}>
      //     {stars >= number ? (
      //       <FaStar />
      //     ) : stars >= number ? (
      //       <FaStarHalfAlt />
      //     ) : (
      //       <AiOutlineStar />
      //     )}
      //   </span>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  });
  return <div></div>;
};

export default Star;

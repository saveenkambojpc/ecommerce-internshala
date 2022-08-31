import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../context/cart.context";
import { useProduct } from "../context/products.context";

const ProductItem = ({ product, handleAddToCart }) => {
  const { name, price, currency, id,thumbnail,delivery } = product;
  const { cart, handleCartToggler } = useCart();
  const ref = useRef();
  const [btnText, setBtnText] = useState("Add to Cart");
  const {isDelivered} = useProduct();

  console.log("Value of isDelvered", isDelivered)
  useEffect(() => {
    // Update the button value
    cart.forEach((e) => {
      if (e.id === id) {
        setBtnText("Remove");
      }
    });
  }, [id]);

  const updateButtonText = (id) => {
    if (btnText === "Add to Cart") {
      setBtnText("Remove");
    } else {
      setBtnText("Add to Cart");
    }
  };

  // Check when Delivered checkbox is ticked and we calculate the delivered items
  const renderDelivered = (delivery) =>{
    if(isDelivered && delivery){
      return true
    }
    return false
  }

  return (
    <div className={`p-2 m-3 md:mx-6 md:my-2 shadow-purple-200 transition-all   shadow-md min-h-full rounded-2xl ${renderDelivered(delivery) ? "grayscale" : "hover:scale-105"}`}>
      <img src={thumbnail} className="w-40" alt="" />
      <h4 className="font-semibold mt-2">{name}</h4>
      <h5 className="text-gray-500 text-sm mb-2">₹{price}</h5>
      <button
      disabled={renderDelivered(delivery)}
        ref={ref}
        className={`bg-purple-500 ${renderDelivered(delivery) || 'hover:bg-purple-700' } text-white font-bold py-2 px-4 rounded`}
        onClick={() => {
          handleCartToggler(id, ref);
          updateButtonText(id);
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ProductItem;

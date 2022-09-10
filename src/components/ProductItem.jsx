import React, { useEffect, useRef, useState } from "react";
import { set } from "rsuite/esm/utils/dateUtils";
import { useCart } from "../context/cart.context";
import { useProduct } from "../context/products.context";

const ProductItem = ({ product, handleAddToCart }) => {
  const { name, price, currency, id, thumbnail, delivery } = product;
  const { cart, handleCartToggler } = useCart();
  const ref = useRef();
  const { isDelivered } = useProduct();
  const [btnText,setBtnText] = useState('Add to Cart')


  useEffect(() => {
    cart.forEach(item =>{
      if(item.id === id){
        setBtnText('Remove')
      }
    })
  }, []);

  const updateButtonText = () => {
    setBtnText('Remove')
    if(btnText === 'Remove'){
      setBtnText("Add to Cart")
    }    

  };

  // Check when Delivered checkbox is ticked and we calculate the delivered items
  const renderDelivered = (delivery) => {
    if (isDelivered && delivery) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`flex h-56 justify-end flex-col p-3 m-2 md:mx-6 md:my-4 min-h-max mt-12 md:mt-16 border shadow-purple-200 transition-all items-center   shadow-md  rounded-2xl ${
        renderDelivered(delivery) ? "grayscale" : "hover:scale-105"
      } `}
    >
      <img src={thumbnail} className="w-28 md:w-32" alt="" />

      <h4 className="font-semibold mt-2">{name}</h4>
      <h5 className="text-gray-400 font-bold text-sm mb-2">₹{price}</h5>
      <button
        ref={ref}
        disabled={renderDelivered(delivery)}
        id={`toggleBtn-${id}`}
        className={`bg-purple-500 ${
          renderDelivered(delivery) || "hover:bg-purple-700"
        } text-white font-bold py-2 px-4 rounded`}
        onClick={() => {
          handleCartToggler(id);
          updateButtonText(id);
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ProductItem;

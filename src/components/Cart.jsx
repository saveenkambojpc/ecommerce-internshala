import React from "react";
import { useCart } from "../context/cart.context";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";

import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    calculateTotalPrice,
    calculateGrandTotalPrice,
  } = useCart();

  return (
    <div>
      {cart.length === 0 && (
        <div className="m-10 text-center">Cart Empty !</div>
      )}
      {cart.length !== 0 && (
        <div className="">
          <div className="">
            

            <div className="border-b">
              <div className="flex border-b mt-5 pb-2  text-xs font-semibold">
                <h4 className="w-1/2">Product</h4>
                <h4 className="w-1/6">Quantity</h4>
                <h4 className="w-1/6">Total Price</h4>
                <h4 className="w-1/6"></h4>
              </div>
              {cart &&
                cart.map((e) => (
                  <div key={e.id} className="flex items-center my-5">
                    <div className="w-1/2  flex items-center space-x-3">
                      <div className=" rounded-lg">
                        <img src={e.thumbnail} className=" w-16 " alt="" />
                      </div>
                      <h4 className="font-semibold">{e.name}</h4>
                    </div>
                    <div className="flex w-1/6 items-center space-x-2">
                      <AiOutlineMinusCircle
                        className="cursor-pointer"
                        onClick={() => decreaseQuantity(e.id)}
                      />
                      <h4 className="">{e.quantity}</h4>
                      <AiOutlinePlusCircle
                        className="cursor-pointer"
                        onClick={() => increaseQuantity(e.id)}
                      />
                    </div>

                    <h4 className="w-1/6">
                      ₹{calculateTotalPrice(e.price, e.quantity)}
                    </h4>

                    <button className="1/6">
                      <AiOutlineClose
                        onClick={() => removeProductFromCart(e.id)}
                        className="text-red-700 text-2xl"
                      />
                    </button>
                  </div>
                ))}
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { useCart } from "../context/cart.context";
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import { BsCreditCard } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa";

import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Checkout = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    calculateTotalPrice,
    calculateGrandTotalPrice,
  } = useCart();

  const [paymentMode, setPaymentMode] = useState("creditcard");

  const onChange = (e) => {
    setPaymentMode(e.target.value);
  };

  return (
    <>
      {cart.length === 0 && (
        <div className="m-10 text-center">Cart Empty !</div>
      )}
      {cart.length !== 0 && (
        <div className="flex w-full flex-wrap p-3 lg:px-36 lg:py-10">
          <div className="w-full lg:w-2/3 lg:px-10">
            <h2 className="text-2xl font-bold my-5 ">Shopping Cart</h2>

            <div className="border-b ">
              <div className="flex border-b mt-20 pb-2   text-xs font-semibold">
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

            <div className=" flex justify-between mt-10">
              <Link to="/category" className="flex items-center">
                <button className="bg-purple-100 flex space-x-1 items-center  py-2 px-4   rounded-lg text-purple-800 font-semibold">
                  <GrFormPrevious className="text-purple-800 text-2xl" />
                  <span>Continue Shopping</span>
                </button>
              </Link>
              <div className="flex flex-col space-y-3  w-1/2 p-2">
                <div className="flex justify-between w-full items-center">
                  <h3 className="text-xs text-slate-500 ">Subtotal</h3>
                  <h4 className="font-semibold">
                    {calculateGrandTotalPrice()}
                  </h4>
                </div>

                <div className="flex justify-between w-full items-center">
                  <h3 className="text-xs text-slate-500 ">Shipping</h3>
                  <h4 className="font-semibold">FREE</h4>
                </div>
                <hr />
                <div className="flex justify-between w-full items-center">
                  <h3 className="font-bold ">Total</h3>
                  <h4 className="font-bold">{calculateGrandTotalPrice()}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold">Payment Info.</h2>
            <div className="my-5">
              <h5 className="text-xs text-slate-400 font-semibold">
                Payment Method
              </h5>

              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <input
                    onChange={onChange}
                    id="default-radio-1"
                    type="radio"
                    value="creditcard"
                    name="default-radio"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm flex items-center font-medium text-gray-900 dark:text-gray-300"
                  >
                    <BsCreditCard className="inline " />
                    <span className="mx-2">Credit Cart</span>
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    onChange={onChange}
                    id="default-radio-1"
                    type="radio"
                    value="googlepay"
                    name="default-radio"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <FaGooglePay className="inline" />
                    <span className="mx-2">Google Pay</span>
                  </label>
                </div>
              </div>

              {/* Credit Card of Google Pay */}
              {paymentMode === "creditcard" && (
                <div id="creditCart">
                  <div className="mb-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xs  font-medium text-gray-500 dark:text-gray-300"
                    >
                      Name On Card :
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xs  font-medium text-gray-500 dark:text-gray-300"
                    >
                      Card Number :
                    </label>
                    <input
                      type="number"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 appearance-none"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xs  font-medium text-gray-500 dark:text-gray-300"
                    >
                      Expiration Date :
                    </label>
                    <input
                      type="date"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 appearance-none"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
              )}
              {paymentMode === "googlepay" && (
                <div id="googlePay">
                  <div className="mb-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xs  font-medium text-gray-500 dark:text-gray-300"
                    >
                      UPI Id :
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              )}
              <button
                type="button"
                className="text-white flex w-full justify-center my-5  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;

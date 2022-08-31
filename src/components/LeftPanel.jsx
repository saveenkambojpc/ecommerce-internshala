import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProduct } from "../context/products.context";
import categorys from "../data/categories.json";

const LeftPanel = () => {
  const { handleDeliveryBox } = useProduct();
  const {pathname} = useLocation()

  return (
    <div className="flex justify-evenly  bg-purple-50 md:absolute md:w-64 md:-translate-y-5 p-2 md:p-5  md:flex-col ">
      <div className=" flex  md:flex-col flex-col">
        <h4 className="text-xl font-semibold">Filter</h4>
        <div className="my-3 ">
          <div class="flex items-center  md:mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value="delivery"
              class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              onChange={handleDeliveryBox}
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Delivery
            </label>
          </div>

          <div class="flex items-center md:mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              disabled
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Expensive
            </label>
          </div>

          <div class="flex items-center md:mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              disabled
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Best Selling
            </label>
          </div>
        </div>
      </div>
      <div className="">
        <Link className="text-xl font-semibold" to="/category">Categories</Link>
        <div className=" flex flex-col ml-5 mt-2">
          {categorys &&
            categorys.map((e) => (
              <Link
                key={e.id}
                className={`my-1 md:my-2 font-semibold text-slate-500 ${pathname === `/category/${e.id}` ? "text-purple-700" : "" }`}
                to={`/category/${e.id}`}
              >
                {e.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;

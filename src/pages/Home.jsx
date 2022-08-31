import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";
import { useProduct } from "../context/products.context";
import cover from "../image/cover.png";

const Home = () => {
  return (
    <div>
      <div className="flex p-5  flex-wrap">
        <img src={cover} className="w-full lg:w-1/2 " alt="" />

        <div className="w-full lg:w-1/2 flex flex-col space-y-10 justify-center items-center px-10">
          <h2 className="text-6xl uppercase ">Professional Keyboard</h2>
          <div className="bg-purple-900 h-1 w-full"></div>
          <div className="self-start">
            <p>Built for Professional Creative</p>
            <p>Connect upto 3 devices</p>
            <p>Compact, carry anywhere</p>
          </div>
        </div>
      </div>
    

      <CategoryGrid />

      
    </div>
  );
};

export default Home;

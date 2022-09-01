import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import ProductItem from "./ProductItem";

import { getCategoryNameById } from "../misc/helper";

const ProductGrid = ({ products, id }) => {

  
  return (
    <>
      <LeftPanel />

      <div className=" md:ml-64 ">
        <h3 className="text-center uppercase text-4xl m-5">
          {getCategoryNameById(id)}
        </h3>

        <div className="flex items-center flex-wrap justify-evenly md:justify-center  mt-5">
          {products.map((e) => (
            <ProductItem key={e.id} product={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;

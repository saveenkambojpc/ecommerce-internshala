import React from "react";
import { Link } from "react-router-dom";
import randomColor from "randomcolor";
import { useProduct } from "../context/products.context";

const CategoryItem = ({ category, img }) => {
  const { id, name, description, thumbnail } = category;

  const products = useProduct();

  return (
    <Link
      to={`/category/${id}`}
      className="p-2 m-5 border w-80 md:w-96   rounded-md bg-white  flex flex-col"
    >
      <img src={img} className=" " alt="" />
      <div className=" text-slate-200 flex flex-col justify-end w-full">
        <h4 className="text-4xl text-red-700 font-bold   m-3">{name}</h4>
        <p className="text-slate-400 mx-3 w-full ">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;

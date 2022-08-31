import React from "react";
import categorys from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import keyboard from "../image/keyboard.jpg"
import headphone from "../image/headphone.jpg"
import { useLocation } from "react-router-dom";


const CategoryGrid = () => {
  const imgArr = [keyboard,headphone]
  return (
    <div className={`bg-purple-50 p-5 `}>
      <h3 className="text-center text-5xl uppercase my-10">Categories</h3>
      <div className="flex justify-center flex-wrap">
        {categorys &&
          categorys.map((e,i) => <CategoryItem img={imgArr[i]} key={e.id} category={e} />)}
      </div>
    </div>
  );
};

export default CategoryGrid;

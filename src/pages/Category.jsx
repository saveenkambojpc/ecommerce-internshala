import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryGrid from "../components/CategoryGrid";
import LeftPanel from "../components/LeftPanel";
import ProductGrid from "../components/ProductGrid";
import { useProduct } from "../context/products.context";

const Category = () => {
  const { id } = useParams();
  const {products} = useProduct();
  const [filteredProduct, setFilteredProduct] = useState([]);
  


  useEffect(() => {
    if (id) {
      const productMatchWithId = products.filter((e) => e.categoryId === id);
      setFilteredProduct(productMatchWithId);
    }
  }, [id]);

  return (
    <div className="relative">
    
      {!id && <CategoryGrid />}

      {/* Product Grid here */}
      {id && <ProductGrid id={id} products={filteredProduct} />}
    </div>
  );
};

export default Category;

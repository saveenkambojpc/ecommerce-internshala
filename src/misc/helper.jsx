import { useCallback, useState } from "react";

import categorys from "../data/categories.json";

export const getProductById = (products, id) => {
  const product = products.filter((e) => e.id === id)[0];
  return product;
};

export const getProductsByCategoryId = (products, catId) => {
  console.log(products, catId);

  return products.filter((e) => e.categoryId === catId);
};

export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}

export function getCategoryNameById(id) {
  let name = "";
  categorys.forEach((e) => {
    if (e.id === id) {
      name = e.name;
    }
  });
  return name;
}

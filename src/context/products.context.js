import products from "../data/products.json"
import { createContext, useContext, useState } from "react";
const productContext = createContext();

export const ProductProvider = ({ children }) => {
    const [isDelivered,setIsDelivered] = useState(false);
    const handleDeliveryBox = (e) => {
        setIsDelivered(e.target.checked);
    }
    const value = {
        products,
        handleDeliveryBox,
        isDelivered
    }
    return <productContext.Provider value={value}>
        {children}
    </productContext.Provider>
}

export const useProduct = () => useContext(productContext)
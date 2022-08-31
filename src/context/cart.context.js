import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getProductById, getProductsByCategoryId } from "../misc/helper";
import { useProduct } from "./products.context";


const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const {products} = useProduct();

    const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

    // copy from stackoverflow
    useEffect(() => {
        let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
        prev_items['quantity'] = 1;
        setCart(prev_items);
        setIsInitiallyFetched(true)
    }, [])

    useEffect(() => {
        if (isInitiallyFetched) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);




    const increaseQuantity = (id) => {
        const objIndex = cart.findIndex(obj => obj.id == id);

        setQuantity(quantity => cart[objIndex].quantity++)
    }

    const decreaseQuantity = (id) => {
        const objIndex = cart.findIndex(obj => obj.id == id);

        if (cart[objIndex].quantity > 1) {
            setQuantity(quantity => cart[objIndex].quantity--)
        }
    }

    const removeProductFromCart = (id) => {
        const product = getProductById(products, id);
        setCart(cart => cart.filter(e => e != product))
    }







    // Add or Remove Item from the Cart
    const handleCartToggler = (id) => {
        const product = getProductById(products, id);

        // Check if product already available if true then we remove it
        if (cart.includes(product)) {
            setCart(cart => cart.filter(e => e != product))
        }
        else {
            product['quantity'] = 1;
            setCart(cart => [...cart, product])
        }

    }

    const calculateTotalPrice = (price,qt) => {
        return price * qt;
    }

    const calculateGrandTotalPrice = () => {
        let amount = 0;
        cart.forEach(e => {
            amount += calculateTotalPrice(e.price,e.quantity)
        })
        return amount;
    }

    const getNumberOfItemInCart = () =>{

        return cart.length;
    }



    const value = {
        cart,
        handleCartToggler,
        increaseQuantity,
        decreaseQuantity,
        removeProductFromCart,
        calculateTotalPrice,
        calculateGrandTotalPrice,
        getNumberOfItemInCart

    }
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);
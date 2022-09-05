import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getProductById, getProductsByCategoryId } from "../misc/helper";
import { useProduct } from "./products.context";


const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const { products } = useProduct();

    const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

    // copy from stackoverflow
    useEffect(() => {
        let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
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
        console.log("You clicked on Remove Product from Cart Button")
        const product = getProductById(products, id);
        setCart(cart => cart.filter(e => e != product))
    }


    // Add or Remove Item from the Cart
    const handleCartToggler = (id) => {

        const product = getProductById(products, id);
        product['quantity'] = 1;

        // Check if product already available if true then we remove it
        let isPresent = false;
        cart.forEach(item => {
            if(item.id === product.id){
                isPresent = true;
            }
        })
        
        if (isPresent) {
            setCart(cart => cart.filter(item => item.id !== product.id))
        }
        else {
            setCart(cart => [...cart, product])
        }

    }

    const calculateTotalPrice = (price, qt) => {
        return price * qt;
    }

    const calculateGrandTotalPrice = () => {
        let amount = 0;
        cart.forEach(e => {
            amount += calculateTotalPrice(e.price, e.quantity)
        })
        return amount;
    }

    const getNumberOfItemInCart = () => {

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
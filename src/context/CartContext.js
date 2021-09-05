import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (prod) => {
        setCarrito([
            ...carrito,
            prod
        ])
    }

    const removeItem = (id) => {
        setCarrito( carrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(el => el.id === id)
    }

    return (
        <CartContext.Provider value={{carrito, isInCart, addItem, removeItem, cantidadCarrito, clear}}>
            {children}
        </CartContext.Provider>
    )
}
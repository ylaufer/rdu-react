import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext);

    return ( 
        <div>
            <Link to="/cart">
                <div className="cartWidget">
                    <FaShoppingCart />
                    <span>{cantidadCarrito()}</span>
                </div>
            </Link>
        </div>
    
       
   );
}
 
export default CartWidget;


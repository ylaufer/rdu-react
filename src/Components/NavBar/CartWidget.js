import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Badge } from 'react-bootstrap';

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext);

    return ( 
        <div>
            <Link className="cartWidget" to="/cart">
                <div>
                    <FaShoppingCart />
                    <Badge className="badge"> {cantidadCarrito()}</Badge>
                    
                
                </div>
            </Link>
        </div>
    
   );
}
 
export default CartWidget;


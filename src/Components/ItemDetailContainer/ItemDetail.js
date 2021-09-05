import React, { useContext, useState } from 'react';
import { Counter } from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({category, id, bodega, nombre, desc, img, precio, variedad, stock}) => {

    const {addItem, isInCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1)
    const handleAdd = () => {
        addItem({
            category, id, nombre, desc, img, precio, cantidad
        })
    }


    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <img src={img} alt={nombre}/>
                </div>
                <div className="col-4 mt-3 listado">
                    <h4 className="bodega">{bodega}</h4>
                    <h2 className="nombre">{nombre}</h2>
                    <h3 className="variedad">{variedad}</h3>
                    <hr/>
                    <p>{desc}</p>
                    <p className="precio">Precio: ${precio}</p>

                    <Counter 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        agregar={handleAdd} 
                        agregado={isInCart(id)}
                    />
                    <Link to={`/category/${category}`} className="btn-comprar mt-2">Volver a Categoría</Link>
                </div>
            </div>
        </div>
    </> 
    )
}

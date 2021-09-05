import React, { useContext, useState } from 'react';
import { Counter } from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({category, id, bodega, nombre, desc, img, precio, variedad, stock}) => {

    const {addItem, isInCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1)
    const handleAdd = () => {
        addItem({
            category, id, bodega, nombre, desc, img, precio, variedad, cantidad
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
                    <Link to={`/category/${category}`}className="btn-volver"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg> Volver a {category}</Link>
                    <hr></hr>
                    <h4 className="bodega mt-4">{bodega}</h4>
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
                    
                </div>
            </div>
        </div>
    </> 
    )
}

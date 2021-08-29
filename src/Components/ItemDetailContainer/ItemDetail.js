import React from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({category, bodega, nombre, desc, img, precio, variedad}) => {


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
                    <Link to={`/category/${category}`} className="btn-comprar mt-2">Volver a Categoría</Link>
                </div>
            </div>
        </div>
    </> 
    )
}

import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ( {img, nombre, variedad, precio, bodega, id} ) => {


    return (
        <div className="col-lg-3 col-xs-12 mb-4 px-1">
            <div className="card px-3">
                <img src={img} alt={nombre} width='40%'/>
                <h4 className="bodega">{bodega}</h4>
                <h2 className="nombre">{nombre}</h2>
                <h3 className="variedad">{variedad}</h3>
                <p className="precio">Precio: ${precio}</p>
                <Link to={`/detail/${id}`} className="btn-comprar w-100">Ver más...</Link>
            </div>
        </div>
    )
}

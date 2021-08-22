import React from 'react'

export const Item = ( {img, nombre, desc, variedad, precio, bodega} ) => {


    return (
        <div className="col-lg-3 col-xs-12 mb-4 px-1">
            <div className="card px-3">
                <img src={img} alt={nombre} width='40%'/>
                <h4 className="bodega">{bodega}</h4>
                <h2 className="nombre">{nombre}</h2>
                <h3 className="variedad">{variedad}</h3>
                <p className="precio">Precio: ${precio}</p>
                <button className="btn-comprar w-100">Comprar</button>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'
import BeatLoader from "react-spinners/BeatLoader";




export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const color = ("#cd903c");

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then( res => {
                setItem( res.find( prod => prod.id === parseInt(itemId)) )
            })
            .finally(()=> { setLoading(false)})

    }, [itemId])


    return (
        <div>
            {loading 
                ? <div className="sweet-loading d-flex justify-content-center mt-5" >
                    <BeatLoader color={color} loading={loading} size={15} />
                </div>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}

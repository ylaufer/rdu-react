import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import BeatLoader from "react-spinners/BeatLoader";
import { getFirestore } from '../../firebase/config';


export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const color = ("#cd903c");

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore();
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
            setItem( {...doc.data(), id: doc.id} )
            })
            .finally(()=> { setLoading(false)})


    }, [itemId, setLoading])


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

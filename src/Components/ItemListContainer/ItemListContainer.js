import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import { getFirestore } from '../../firebase/config'


export const ItemListContainer = () => {
    
      
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
      const { catId } = useParams();
      const color = ("#cd903c");

      useEffect( ()=> {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')

                if (catId) {
                    const arrayFiltrado = productos.where('category', '==', catId)
                    arrayFiltrado.get()
                        .then((response) => {
                            const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                            console.log(data)
                            setData(data)
                        })
                        .finally(()=> {
                            setLoading(false)
                        })
                } else {
                    productos.get()
                        .then((response) => {
                            const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                            console.log(data)
                            setData(data)
                        })
                        .finally(()=> {
                            setLoading(false)
                        })
                }

    }, [catId, setLoading])
  
  
      return (
          <>
              {loading 
               ? <div className="sweet-loading d-flex justify-content-center mt-5" >
                    <BeatLoader color={color} loading={loading} size={15} />
                 </div>
           
               : <>
               <h1 className="mt-3">{catId}</h1>
               <ItemList productos={data}/>    
               </>
              }
          </>
      )
  }
  
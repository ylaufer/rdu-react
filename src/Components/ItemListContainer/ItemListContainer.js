import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";


export const ItemListContainer = () => {
    
      
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
      const { catId } = useParams();
      const color = ("#cd903c");

      useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData(arrayFiltrado)
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])
  
  
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
  
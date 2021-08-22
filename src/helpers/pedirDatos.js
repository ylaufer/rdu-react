import { data } from "../data/data"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve(data)
            }, 2000)

    })
}

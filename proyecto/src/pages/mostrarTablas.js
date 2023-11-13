import { useEffect, useState } from "react"
import Tablas1 from "./tables/tablas1"

export default function Mostrartabla() {
    const [cadena, setCadena] = useState(sessionStorage.getItem("cadena"))
    const [data, setData] = useState([])
    useEffect(()=>{
        console.log("cadena", cadena)
    },[cadena])
    return (
        <>
            {cadena=="300,500,500,800,600"&&
                <Tablas1></Tablas1>
            }
            {cadena=="300,500,500,800,600"&&
                <>
                
                </>
            }
            {cadena=="300,500,500,800,600"&&
                <>
                
                </>
            }            
        </>
    )
}
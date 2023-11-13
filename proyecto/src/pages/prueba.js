import { useState } from "react";
import Arbol from "./arbol";


export default function prueba() {

    const [data, setData] = useState({
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {
                        name: 'D'
                    },
                    {
                        name: 'C',
                        children: [
                            {
                                name: 'E'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'D'
            }
        ],
    })
    
    return (<div>
        <Arbol data={data}/>
    </div>)
}
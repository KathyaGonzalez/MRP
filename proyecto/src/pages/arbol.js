import { useState } from "react";

export default function arbol() {
    const [nivel, setNivel] = useState(0)
    const [q, setQ] = useState(0)
    const [inv, setInv] = useState(0)
    const [ts, setTs] = useState(0)
    const [stock, setStock] = useState(0)
    const [mrp, setMRP] = useState("")
    const [matrixList, setMatrixList] = useState([])
    const [padre, setPadre] = useState(null)
    const [columnas, setColumnas] = useState(1)
    const [columnasHijo, setColumnasHijo] = useState(1) // indica la cantidad de columnas para los hijos
    const [demanda, setDemanda] = useState("")
    const crearNodo = (posicion, cantCol) => {
        let dmd = []
        let colT = cantCol + ts;
        if (padre == null || padre == "") {
            dmd = demanda.split(",")
            const dmd = dmd.map((str) => parseInt(str, 10));
            console.log(dmd, typeof dmd)
        } else {
            let fila = []
            for (let i = 0; i < colT; i++) {
                if (i < ts) {
                    fila.push(0)
                } else {
                    fila.push(columnasHijo[i-ts])
                }
            }
            dmd=fila;
        }


    }

    return (
        <>
            <div>
                <label>Nivel</label>
                <input onChange={(evt) => setNivel(parseInt(evt.target.value, 10))} value={nivel}></input>
            </div>

            <div>
                <label>Q</label>
                <input onChange={(evt) => setQ(parseInt(evt.target.value, 10))} value={q}></input>
            </div>

            <div>
                <label>Nivel</label>
                <input onChange={(evt) => setInv(parseInt(evt.target.value, 10))} value={inv}></input>
            </div>

            <div>
                <label>Q</label>
                <input onChange={(evt) => setTs(parseInt(evt.target.value, 10))} value={ts}></input>
            </div>

            <div>
                <label>Q</label>
                <input onChange={(evt) => setStock(parseInt(evt.target.value, 10))} value={stock}></input>
            </div>

            <div>
                <label>MRP</label>
                <input onChange={(evt) => setMRP(parseInt(evt.target.value, 10))} value={mrp}></input>
            </div>

            <div>
                <label>Padre</label>
                <input onChange={(evt) => setPadre(parseInt(evt.target.value, 10))} value={padre}></input>
            </div>
            <div>
                <label>Demanda</label>
                <input onChange={(evt) => setDemanda(parseInt(evt.target.value, 10))} value={demanda}></input>
            </div>

            <button onClick={() => crearNodo()}>Agregar Nodo</button>
        </>
    )
}
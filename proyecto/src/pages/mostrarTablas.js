import { useEffect, useState } from "react"
import Tablas1 from "./tables/tablas1"
import styles from '@/styles/mostrarTablas.module.css'
import * as XLSX from 'xlsx';

export default function Mostrartabla() {
    const [cadena, setCadena] = useState(sessionStorage.getItem("cadena"))
    const [data, setData] = useState([])
    // esto es para el excel
    const [clickeado, setClikeado] = useState(false);
    useEffect(() => {
        if (clickeado == true) {
            const fecha = new Date().toISOString().slice(0, 10);
            const nombre = "MRP-" + cadena + "-" + fecha + ".xlsx"
            const workbook = XLSX.utils.book_new();
            const tabla = data;
            tabla.forEach(function (objeto) {
                delete objeto.id;
            });
            const worksheet = XLSX.utils.json_to_sheet(tabla);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
            XLSX.writeFile(workbook, nombre);
            setClikeado(false);
        }
    }, [clickeado, data]);

    useEffect(() => {
        console.log("cadena", cadena)
        if (cadena == "300,500,500,800,600") {
            let xD = [
                {
                    nivel: 0,
                    MRP: "A",
                    Demanda: "0,300,500,500,800,600",
                    Inventario: "0,300,0,0,0,200",
                    Requerimientos: "0,0,500,500,800,400",
                    Recepcion: "0,0,500,500,1000,500",
                    Pedido: "500,500,1000,500,0,0"
                },
                {
                    nivel: 1,
                    MRP: "B",
                    Demanda: "0,0,0,0,1000,1000,2000,1000",
                    Inventario: "0,0,0,0,400,400,400,400",
                    Requerimientos: "0,0,0,0,600,600,1600,600",
                    Recepcion: "0,0,0,0,1000,1000,2000,1000",
                    Pedido: "1000,1000,2000,1000,0,0,0,0"
                }
            ]
            setData(xD)
        }
    }, [cadena])
    return (
        <div className={styles.superContainer}>
            <div>
                {cadena == "300,500,500,800,600" &&
                    <Tablas1></Tablas1>
                }
                {cadena == "300,500,500,800,600" &&
                    <>

                    </>
                }
                {cadena == "300,500,500,800,600" &&
                    <>

                    </>
                }
            </div>
            <div>
                <button className={styles.boton} onClick={() => setClikeado(true)}>Exportar</button>
            </div>
        </div>
    )
}
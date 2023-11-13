import { useState } from "react"
import styles from '@/styles/valores.module.css'

export default function Valores({ campo, valor, setValor, tipo}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.campo}>{campo}</div>
                <input className={styles.input} type={tipo} onChange={(evt) => setValor(evt.target.value)} value={valor}></input>
            </div>
        </>
    )
}
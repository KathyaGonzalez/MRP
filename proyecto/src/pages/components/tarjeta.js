import { useState } from "react"
import styles from '@/styles/tarjeta.module.css'

export default function Tarjeta({ MRP, Q, TS, INV, STOCK, DEMANDA, setPadre, cadena, padre, nivel, setNivel }) {
    return (
        <div className={styles.SuperContainer}>
            <button className={styles.container} onClick={() => {
                    setPadre(MRP)
                    setNivel(nivel+1)
                }}>
                <div className={styles.campo}>Nivel: {nivel}</div>
                <div className={styles.campo}>MRP: {MRP}</div>
                <div className={styles.campo}>Padre: {padre}</div>
                <div className={styles.campo}>Q: {Q}</div>
                <div className={styles.campo}>Inventario: {INV}</div>
                <div className={styles.campo}>Stock: {STOCK}</div>
                <div className={styles.campo}>Tiempo Suministro: {TS}</div>
                <div className={styles.campo}>Demanda: {cadena}</div>
            </button>
        </div>
    )
}
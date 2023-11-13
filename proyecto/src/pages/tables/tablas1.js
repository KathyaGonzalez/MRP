import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from '@/styles/Tabla.module.css'

export default function Tablas1() {
    return (
        <>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>0</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>A</div></div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 480 }} aria-label="caption table">
                        <TableHead className={styles.colorOne}>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        Semanas
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        1
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        4
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        6
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Demanda
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        600
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Inventario
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Requerimientos Netos
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        400
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Recepción
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Liberación de Ordenes
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>0</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>A</div></div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 480 }} aria-label="caption table">
                        <TableHead className={styles.colorOne}>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        Semanas
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        1
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        4
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        6
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Demanda
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        600
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Inventario
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Requerimientos Netos
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        400
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Recepción
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Liberación de Ordenes
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
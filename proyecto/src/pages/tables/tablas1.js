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
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>1</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>B</div></div>
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
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -1
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
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
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
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
                                        400
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        400
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        400
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
                                        Requerimientos Netos
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        600
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        600
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1600
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
                                        Recepción
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
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
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        1000
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
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>1</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>C</div></div>
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
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -1
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        1800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1800
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
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
                                    <div className={styles.celdaHead}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>2</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>D</div></div>
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
                                        -6
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        2000
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
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        400
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        0
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
                                        1200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3600
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
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
                                        1200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2400
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3600
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2400
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
                                        1200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2400
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3600
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2400
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
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>2</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>F</div></div>
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
                                        -10
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -9
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -8
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        8000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1500
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        4000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2500
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        7500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2500
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
                                    <div className={styles.celdaHead}>
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        7500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2500
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>3</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>C</div></div>
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
                                        -9
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -8
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -1
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        200
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        2800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        2800
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                                    <div className={styles.celdaHead}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>3</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>E</div></div>
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
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -4
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -3
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -2
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -1
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
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1300
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1300
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
                                        1700
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1700
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4700
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1700
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
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        3000
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>4</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>G</div></div>
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
                                        -15
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -14
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -13
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -12
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -11
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -10
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -9
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -8
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        18000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        0
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        18000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        18000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        9000
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
                                    <div className={styles.celdaHead}>
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        9000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        18000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        9000
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
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>4</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>F</div></div>
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
                                        -14
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -13
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -12
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -11
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -10
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -9
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -8
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        12000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        0
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        1500
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
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        Requerimientos Netos
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        4500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        11500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5000
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
                                    <div className={styles.celdaHead}>
                                        0
                                    </div>
                                </TableCell>
                                <TableCell>
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
                                        7500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        12500
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5000
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
                                    <div className={styles.celdaHead}>
                                        7500
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        5000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        12500
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        5000
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={styles.TTblas}>
                <div className={styles.containerDemanda}>
                    <div className={styles.demanda}>Nivel: <div className={styles.black}>4</div></div>
                    <div className={styles.demanda}>MRP: <div className={styles.black}>F</div></div>
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
                                        -8
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        -7
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -6
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -5
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaHead}>
                                        -4
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
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        12000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
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
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        800
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
                                        5200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        11200
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        5200
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
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        12000
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={styles.celdaRow}>
                                        6000
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
                                    <div className={styles.celdaHead}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaHead}>
                                        6000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        12000
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={styles.celdaRow}>
                                        6000
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
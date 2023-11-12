import { useState, useEffect } from 'react';
import styles from '@/styles/principal.module.css';

export default function PrincipalFrom() {
    // Estados para almacenar los datos del formulario
  const [base, setBase] = useState('');
  const [requerimiento, setRequerimiento] = useState('');

  //almacenar conjuntos
  const [datosAdd, setDatosAdd] = useState([]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación campos
    if (!base || !requerimiento) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const areDatosAddValid = datosAdd.some(data => !data.padre || !data.hijo || !data.multi);
    if (areDatosAddValid) {
      alert('Por favor, complete todos los campos en cada conjunto adicional');
      return;
    }

    console.log('Datos enviados:', { base, requerimiento, datosAdd });
    setBase('');
    setRequerimiento('');
    setDatosAdd([]);
  };

  const AgregarDatos = () => {
    const areDatosAddValid = datosAdd.some(data => !data.padre || !data.hijo || !data.multi);
    if (areDatosAddValid) {
      alert('Por favor, complete todos los campos en cada conjunto adicional');
      return;
    }

    setDatosAdd([...datosAdd, { padre: '', hijo: '', multi: '' }]);
  };
  // Obtener todas las opciones únicas de "Hijo"
  const opcionesHijoUnicas = Array.from(new Set(datosAdd.map(item => item.hijo)));

  return (
    <div className={styles.container}>
      <div className={styles.labeLayout}>
      <label className={styles.label}>MRP</label>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Base:</label>
            <input
              type="text"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={styles.field}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Requerimiento:</label>
            <input
              type="number"
              value={requerimiento}
              onChange={(e) => setRequerimiento(e.target.value)}
              className={styles.field}
            />
          </div>
        </div>

        {datosAdd.map((data, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Padre:</label>
              <select
                value={data.padre}
                onChange={(e) => {
                  const newData = [...datosAdd];
                  newData[index].padre = e.target.value;
                  setDatosAdd(newData);
                }}
                className={styles.field}
              >
                <option value="">Selec</option>
                {base && <option value={base}>{base}</option>}
                {opcionesHijoUnicas.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Nombre:</label>
              <input
                type="text"
                value={data.hijo}
                onChange={(e) => {
                  const newData = [...datosAdd];
                  newData[index].hijo = e.target.value;
                  setDatosAdd(newData);
                }}
                className={styles.field}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Multiplicador:</label>
              <input
                type="number"
                value={data.multi}
                onChange={(e) => {
                  const newData = [...datosAdd];
                  newData[index].multi = e.target.value;
                  setDatosAdd(newData);
                }}
                className={styles.field}
              />
            </div>
          </div>
        ))}

        <div className={styles.buttonContainer}>
          <button type="button" onClick={AgregarDatos} className={styles.button}>
            Agregar Nuevo Campo
          </button>
          <button type="submit" className={styles.button}>
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
}
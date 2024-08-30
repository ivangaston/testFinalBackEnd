import './accesorios.css';
import { useEffect, useState } from 'react';

function Accesorios() {
  const [accesorios, setAccesorios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setAccesorios(json);
        setLoading(false); // Desactivar el estado de carga cuando los datos son recibidos
      })
      .catch(err => {
        console.error('Error fetching data: ', err);
        setLoading(false); // Desactivar el estado de carga incluso si hay un error
      });
  }, []);

  if (loading) {
    return <p>Cargando accesorios...</p>; // Mostrar un mensaje de carga mientras los datos se obtienen
  }

  return (
    <div className='accesorios'>
      <h1>Accesorios</h1>
      <ul>
        {accesorios.map(accesorio => (
          <li key={accesorio.id}>
            <div className="descripcion">
              <h2>{accesorio.title}</h2>
              <p>Color: {accesorio.color || 'No especificado'}</p>
              <p>Modelo: {accesorio.model || 'No especificado'}</p>
              <p>ID: {accesorio.id}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accesorios;

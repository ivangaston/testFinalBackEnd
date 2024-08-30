import './styleUser.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cuenta() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirige al inicio si no hay usuario en localStorage
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='userStyle'>
      {user ? (
        <>
          <h2>Bienvenido, {user.email}!</h2>
          <p>Has iniciado sesion exitosamente.</p>
          <button onClick={handleLogout}>Cerrar Sesion</button>
        </>
      ) : (
        <p>Redirigiendo...</p>
      )}
    </div>
  );
}

export default Cuenta;

import './styleUser.css' ;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      // Almacenar los datos en localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));

      // Redirigir al login despues del registro
      navigate('/login');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className='userStyle'>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

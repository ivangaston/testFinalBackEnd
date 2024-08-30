import './styleUser.css' ;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesion exitoso');
        navigate('/cuenta'); // Redirige a la página de cuenta
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    } else {
      alert('No hay ninguna cuenta registrada con estos datos.');
    }
  };

  return (
    <div className='userStyle'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default Login;


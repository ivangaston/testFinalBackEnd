import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav>
      <ul>
        <li> <Link to='/'> Home</Link></li>
        <li> <Link to='#'> Productos</Link>
          <ul>
            <li> <Link to='/smartphones'> Smartphones</Link></li>
            <li> <Link to='/accesorios'> Accesorios</Link></li>
          </ul>
        </li>

        <li> <Link to='/servicios'> Servicios</Link></li>
      </ul>
    </nav >
  )
}
export default Nav;
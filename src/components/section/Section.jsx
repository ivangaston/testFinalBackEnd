import "./section.css";
import phones from '/images/foto1.jpg';
import Button from "../button/Button";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate


function Section() {

  const navigate = useNavigate(); // Hook para navegar a diferentes rutas

  const handlerClickBoton = () => {// Funcion para ir a la ruta /smartphones cuando se hace click
    navigate('/smartphones');
  };

  return (
    <div className="section">
      <section className="sectionOne">
        <h2>Ultimos Lanzamientos</h2>
        <p>Los smartphones de este 2024</p>
        <img src={phones} alt="phones" />

        {/* Dentro de los botones estan las props, las props fueron creadas en el componente Button.jsx */}
        {/* El botón "Ver mas" ahora navega a la pagina de smartphones */}

        <Button textoBoton='Ver mas' onClick={handlerClickBoton} />
        {/* <Button textoBoton='Comprar' colorBoton='blue' /> */}
      </section>

    </div>
  );
};

export default Section;

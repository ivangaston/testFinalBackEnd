import datosPhone from './DatosPhone';
import PhonesProps from './PhonesProps';
import './listadoPhone.css'


function ListaPhones() {
  return (
    <div className='listaPhone'>

      {datosPhone.map((phone, index) => (
        <PhonesProps
          key={index}
          nombre={phone.nombre}
          año={phone.año}
          modelo={phone.modelo}
          color={phone.color}
          imagen={phone.imagen}
        />
      ))}
      
    </div>
  );
}

export default ListaPhones;

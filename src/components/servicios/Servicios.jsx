import './servicios.css';

function Service() {

  return (
    <div className='serviciosStyle'>
      
      <div className="servicio">
        <h2 className='servicioTitulo'>Servicio Tecnico</h2>
        <p className='servicioPaf'> En caso de necesitar s.tecnico , comuniquese al numero : 12345601</p>
      </div>

      <div className="servicio">
        <h2 className='servicioTitulo'>Envios</h2>
        <p className='servicioPaf'>Para recibir su producto mande un mail a: edscd@dcdsc.com</p>
      </div>

    </div>
  )
}

export default Service;
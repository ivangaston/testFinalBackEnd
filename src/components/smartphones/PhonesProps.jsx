/* eslint-disable react/prop-types */

function PhonesProps(props) {
  return (
    <section>
      <p className="pTitulo">{props.nombre}</p>
      <p>{props.año}</p>
      <p>{props.modelo}</p>
      <p>{props.color}</p>
      <img src={props.imagen} alt="imagen"/>
    </section>
  );
}

export default PhonesProps;

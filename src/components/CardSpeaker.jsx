import React from "react";
import "../css/cardspeaker.css";
const CardSpeaker = (props) => {
  console.log(props.speaker.foto);
  const { foto, nombre, titulo, descripcion, rol, color } = props.speaker;
  return (
    <div className="col">
      <div className="card h-100">
        <div className="container-img-card">
          <img src={foto} className="card-img-top" alt={nombre} />
          <div className="overlay">
            <span>{nombre}</span>
          </div>
        </div>
        <div className="card-body">
          <span className={`badge my-2 rounded-pill text-bg-${color}`}>
            {rol}
          </span>
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSpeaker;

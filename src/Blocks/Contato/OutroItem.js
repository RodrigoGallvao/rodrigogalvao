import React from "react";
import './style.scss';

const OutroItem = ({ className, titulo, imagem, click }) => {
  return (
    <button onClick={click} className={className}>
      <img src={imagem} alt={`Em foco: ${titulo}.`}/>

      <div className="HoverFade">
        <span> {titulo} </span>
      </div>
    </button>
  );
};

export default OutroItem;
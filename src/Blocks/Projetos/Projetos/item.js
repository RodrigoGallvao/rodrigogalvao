import React from "react";

const Item = ({ className, handleClick, titulo, imagem }) => {
  return (
    <div className={className}>
      <img src={imagem} alt={`Projeto: ${titulo}.`}/>

      <button onClick={handleClick}>
        <div>
          <h5> {titulo} </h5>
          <span>
            <p> Visualizar </p>
          </span>
        </div>
      </button>
    </div>
  );
};

export default Item;

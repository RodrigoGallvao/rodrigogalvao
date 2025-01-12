import React from "react";

const Item = ({ className, handleClick, titulo }) => {
  return (
    <div className={className}>
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

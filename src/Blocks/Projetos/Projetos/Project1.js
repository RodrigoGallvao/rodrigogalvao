import React from "react";
import '../style.scss';
import { ReactComponent as Close } from '../../../Assets/Close.svg';

import RiveMorfeu from "./Morfeu";

const Example = ({ children, className, handleClose }) => {
  return (
    <div className={className}>
        <div className="Vertical-Content">
            <div className="Line">
                <h1> Rive Cat </h1>
                
                <button className="Close-Button" onClick={handleClose}>
                    <Close/>
                </button>
            </div>

            <div className="Window">
                <RiveMorfeu />
            </div>
            
            <div className="Block">
                <h2> Sobre o Rive App </h2>
                <h2> Making Off </h2>
            </div>
        </div>
    </div>
  );
};

export default Example;
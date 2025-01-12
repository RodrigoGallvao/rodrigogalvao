import React from "react";
import '../style.scss';
import { ReactComponent as Close } from '../../../Assets/Close.svg';

const Example = ({ children, className, handleClose }) => {
  return (
    <div className={className}>
        <div className="Side">
            <h1> Layout </h1>
        </div>
        <div className="Side">
            <button className="Close-Button" onClick={handleClose}>
                <Close/>
            </button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac accumsan mi. Donec quis ullamcorper ligula, mattis cursus felis. Donec commodo, dolor venenatis iaculis tempus, lorem urna dapibus nunc.</p>

            <a className="Default-Button">
                Visitar Website
            </a>                               
        </div>
    </div>
  );
};

export default Example;
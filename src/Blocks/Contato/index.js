import React, { forwardRef } from "react";
import './style.scss';

const Contato = forwardRef((props, ref) => {
    return (
        <div className="Contato" ref={ref}>

            <div className="contato-diagonal-box">
                <div className="half"/>
            </div>

            <div className="contatoContent">
                <div className="half">
                    <div>
                        <h1 className="title">
                            Contato
                        </h1>
                    </div>
                </div>

                <div className="otherHalf">
                    <div>
                        <h1 className="title">
                            Outros <br/> Interesses
                        </h1>

                        <div className="Galeria">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
});

export default Contato;
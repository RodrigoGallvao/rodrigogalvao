import React, { forwardRef } from "react";
import './style.scss';

import Mail from "../../Assets/Mail.png";
import MapMark from "../../Assets/MapMark.png";
import Phone from "../../Assets/Phone.png";

import LogoInvert from "../../Assets/LogoInvert.png";

const Contato = forwardRef((props, ref) => {
    return (
        <div className="Contato" ref={ref}>

            <div className="contato-diagonal-box">
                <div className="half"/>
            </div>

            <div className="contatoContent">
                <div className="half">
                    <div className="info">
                        <h1 className="title">
                            Contato
                        </h1>

                        <div>
                            <div className="item"> 
                                <img src={Phone} alt="Telefone de contato: (34) 99968-3135."/> 
                                <span>
                                    Telefone 
                                    <p> (34) 99968-3135 </p>
                                </span>
                            </div>
                            
                            <div className="item"> 
                                <img src={Mail} alt="Email de contato: rodrigogallvao@gmail.com."/> 
                                <span>
                                    E-Mail 
                                    <p> rodrigogallvao@gmail.com </p>
                                </span>
                            </div>
                            
                            <div className="item"> 
                                <img src={MapMark} alt="Região: Minas Gerais, Brasil."/> 
                                <span>
                                    Localização 
                                    <p> Minas Gerais, Brasil </p>
                                </span>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="item"> 
                                <img src={LogoInvert} alt="Logo."/>
                                <span>
                                    Rodrigo Galvão Barbosa
                                    <p> Desenvolvedor Front-End </p>
                                </span>                            
                            </div>                             
                        </div>
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
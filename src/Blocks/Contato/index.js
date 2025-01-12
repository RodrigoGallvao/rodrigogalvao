import React, { useRef, forwardRef } from "react";
import './style.scss';

import Mail from "../../Assets/Mail.png";
import MapMark from "../../Assets/MapMark.png";
import Phone from "../../Assets/Phone.png";

import LogoInvert from "../../Assets/LogoInvert.png";

const Contato = forwardRef(({ homeRef }, ref) => {
    const scrollToTop = () => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    
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
                                <a title='Entre em contato pelo Whatsapp' href="https://wa.me/5534999683135" target="_blank" rel="noreferrer">
                                    <img src={Phone} alt="Telefone de contato: (34) 99968-3135."/> 
                                </a>
                                <span>
                                    Telefone 
                                    <p> (34) 99968-3135 </p>
                                </span>
                            </div>
                            
                            <div className="item"> 
                                <a title='Entre em contato por e-mail' href="mailto:rodrigogallvao@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={Mail} alt="Email de contato: rodrigogallvao@gmail.com."/> 
                                </a>
                                <span>
                                    E-Mail 
                                    <p> rodrigogallvao@gmail.com </p>
                                </span>
                            </div>
                            
                            <div className="item">
                                <div>
                                    <img src={MapMark} alt="Região: Minas Gerais, Brasil."/> 
                                </div> 
                                <span>
                                    Localização 
                                    <p> Minas Gerais, Brasil </p>
                                </span>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="item">
                                <button title='▲' onClick={scrollToTop}>
                                    <img src={LogoInvert} alt="Logo."/>
                                </button> 
                                <span>
                                    Rodrigo Galvão Barbosa
                                    <p> Desenvolvedor Front-End </p>
                                </span>                            
                            </div>                             
                        </div>
                    </div>
                </div>

                <div className="Outros">
                    <div>
                        <h1 className="title">
                            Outros <br/> Interesses
                        </h1>

                        <div className="OutrosGaleria">
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
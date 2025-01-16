import React, { useState, useRef, forwardRef } from "react";
import './style.scss';

import Mail from "../../Assets/Mail.png";
import MapMark from "../../Assets/MapMark.png";
import Phone from "../../Assets/Phone.png";

import LogoInvert from "../../Assets/LogoInvert.png";

import OutroItem from "./OutroItem";
import Outros1 from "../../Assets/Outros/Outros1.png";
import Outros2 from "../../Assets/Outros/Outros2.png";
import Outros3 from "../../Assets/Outros/Outros3.png";
import Outros4 from "../../Assets/Outros/Outros4.png";
import Outros5 from "../../Assets/Outros/Outros5.png";
import Outros6 from "../../Assets/Outros/Outros6.png";
import Outros7 from "../../Assets/Outros/Outros7.png";
import Outros8 from "../../Assets/Outros/Outros8.png";
import Outros9 from "../../Assets/Outros/Outros9.png";
import Outros10 from "../../Assets/Outros/Outros10.png";
import Outros11 from "../../Assets/Outros/Outros11.png";
import Outros12 from "../../Assets/Outros/Outros12.png";
import Fullscreen from "../Fullscreen";

const Contato = forwardRef(({ homeRef }, ref) => {
    const scrollToTop = () => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [showGaleria, setShowGaleria] = useState(false);
    const [imgToShow, setImgToShow] = useState(0);
    
    return (
        <>
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
                                    <a title='Entre em contato por e-mail' href="mailto:rodrigogallvao@gmail.com">
                                        <img src={Mail} alt="Email de contato: rodrigogallvao@gmail.com."/> 
                                    </a>
                                    <span>
                                        E-Mail 
                                        <p> rodrigogallvao@gmail.com </p>
                                    </span>
                                </div>
                                
                                <div className="item">
                                    <a>
                                        <img src={MapMark} alt="Região: Minas Gerais, Brasil."/> 
                                    </a> 
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
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(0)}} titulo={"Social Media para Datas Comemorativas"} imagem={Outros1} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(1)}} titulo={"Mockup de Produto"} imagem={Outros3} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(2)}} titulo={"Posts"} imagem={Outros11} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(3)}} titulo={"Mockup de Produto"} imagem={Outros5} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(4)}} titulo={"Posts"} imagem={Outros10} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(5)}} titulo={"Mockup de Uniformes"} imagem={Outros7} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(6)}} titulo={"Logomarca"} imagem={Outros9} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(7)}} titulo={"Design para Impressos"} imagem={Outros6} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(8)}} titulo={"Posts"} imagem={Outros12} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(9)}} titulo={"Avatares e Monogramas"} imagem={Outros4} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(10)}} titulo={"Mockup com Logomarca"} imagem={Outros2} />
                                <OutroItem click={() => {setShowGaleria(true); setImgToShow(11)}} titulo={"Design de Merchandise"} imagem={Outros8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { showGaleria &&
                <Fullscreen click={() => setShowGaleria(false)} img={imgToShow} />
            }
        </>
    );
});

export default Contato;
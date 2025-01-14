import React, { useState, forwardRef } from "react";
import './style.scss';

import Item from "./Projetos/item";
import Base from "./Projetos/base";
import Example from "./Projetos/example";
import Project1 from "./Projetos/Project1";

import Thumb from "../../Assets/Thumbs/ThumbSize.png";
import RivecatThumb from "../../Assets/Thumbs/RiveCat-Thumb.png";

const Projetos = forwardRef((props, ref) => {

    const [showMore, setShowMore] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const [inspect, setInspect] = useState("close");
    const [project, setProject] = useState(0);

    const [left, setLeft] = useState(0);
    const handleClick = (event, passInt) => {
        const buttonPosition = event.target.getBoundingClientRect();
        const buttonCenter = buttonPosition.left + buttonPosition.width / 2;
        setLeft(buttonCenter);
        setProject(passInt);

        setTimeout(() => {
          setInspect("move");
        }, 100);
      
        setInspect("open");
        
        const newLeft = `${buttonCenter}px`;
        document.documentElement.style.setProperty('--left-value', newLeft);
    };

    const handleShowMore = () => {
        setButtonDisable(true);

        setShowMore(!showMore);

        setTimeout(() => {
          setButtonDisable(false);
        }, 1000);

    };

    return (
        <div className="Projetos" ref={ref}>
            <div className="Projetos-Content">
                <h1 className="title"> Projetos </h1>

                <div className="Galeria">
                    <div className={`Line ${showMore ? "showMore" : ""}`}>

                        <div className="Group G11">
                            <Item className="Item" titulo={"Rive Cat"} handleClick={(event) => handleClick(event, 1)} imagem={RivecatThumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                        </div>
                        <div className="Group G12">
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                        </div>

                    </div>
                    <div className={`Line ${showMore ? "showMore" : ""}`}>
                        
                        <div className="Group G21">
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                        </div>
                        <div className="Group G22">
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                            <Item className="Item" handleClick={handleClick} titulo={"Em Breve..."} imagem={Thumb} />
                        </div>

                    </div>

                    <div>
                        <button className="Invert-Button" onClick={() => handleShowMore()} disabled={buttonDisable}> Ver Mais </button>
                    </div>
                </div>

                <button className={`Fade ${inspect}`} onClick={() => setInspect("close")}/>
                <Base className={`Inspect ${inspect}`}> 
                    { project === 1 ?
                        <Project1 title={'aa'} handleClose={() => setInspect("close")}/>
                        :
                        <Example handleClose={() => setInspect("close")}/>
                    }
                </Base>
            </div>
        </div> 
    );
});

export default Projetos;
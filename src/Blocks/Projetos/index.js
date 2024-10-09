import React, { useState, forwardRef } from "react";
import './style.scss';

const Projetos = forwardRef((props, ref) => {

    const [showMore, setShowMore] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const [inspect, setInspect] = useState("close");

    const [left, setLeft] = useState(0);
    const handleClick = (event) => {
        const buttonPosition = event.target.getBoundingClientRect();
        const buttonCenter = buttonPosition.left + buttonPosition.width / 2;
        setLeft(buttonCenter);
      
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
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                        </div>
                        <div className="Group G12">
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                        </div>

                    </div>
                    <div className={`Line ${showMore ? "showMore" : ""}`}>
                        
                        <div className="Group G21">
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                        </div>
                        <div className="Group G22">
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                            <div>
                                <button  onClick={handleClick}> abrir </button>
                            </div>
                        </div>

                    </div>

                    <button className="Invert-Button" onClick={() => handleShowMore()} disabled={buttonDisable}> Ver Mais </button>
                </div>

                <button className={`Fade ${inspect}`} onClick={() => setInspect("close")}/>
                <div className={`Inspect ${inspect}`}>
                    <div className="Inspect-Content">
                        <div>
                            <h1> Layout </h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac accumsan mi. Donec quis ullamcorper ligula, mattis cursus felis. Donec commodo, dolor venenatis iaculis tempus, lorem urna dapibus nunc.</p>

                            <a className="Default-Button">
                                Visitar Website
                            </a>                               
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
});

export default Projetos;
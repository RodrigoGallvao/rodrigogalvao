import React, { useEffect, forwardRef } from 'react';
import './style.scss';

import initAnimations from '../../scripts/animate';
import BlueprintLogo from "../../Assets/LogoBlueprint.png";

const SobreMim = forwardRef((props, ref) => {
    useEffect(() => {
      initAnimations(); 
    }, []);
    
    return (
        <div className="SobreMim" ref={ref}>
            <img className='animate' src={BlueprintLogo} alt="Blueprint representation of the logo."/>

            <div className="SobreMim-Content">
                <h1 className="title"> Sobre Mim </h1>
                <p> Em construção. </p>
                {/*
                <p> Desenvolvedor Front-end, com ampla experiência em React. Apaixonado por design e criação de layouts e animações para websites e desenvolvimento de identidade visual, unindo criatividade e técnica no desenvolvimento de soluções digitais integradas.</p>
                */}
            </div>
        </div>
    );
});

export default SobreMim;
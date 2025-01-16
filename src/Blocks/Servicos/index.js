import React, { forwardRef } from 'react';
import './style.scss';
    
import { ReactComponent as AnimIcon } from '../../Assets/AnimIcon.svg';
import { ReactComponent as CodeIcon } from '../../Assets/CodeIcon.svg';
import { ReactComponent as DesignIcon } from '../../Assets/DesignIcon.svg';

const Servicos = forwardRef((props, ref) => {
    
    return (
        <div className="Servicos" ref={ref}>
            <div className='Area First'>
                <DesignIcon/>
                <h6> Layout e Design </h6>
                <p> Design de interfaces claras, intuitivas e responsivas para todo os dispositivos. </p>
            </div>
            <div className='Area Middle'>
                <CodeIcon/>
                <h6> Desenvolvimento </h6>
                <p> Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce. </p>                
            </div>
            <div className='Area Last'>
                <AnimIcon/>
                <h6> Animações e Motion </h6>
                <p> Animações que trazem conforto e leveza para tornar a navegação menos cansativa e repetitiva. </p>    
            </div>
        </div>
    );
}); 

export default Servicos;
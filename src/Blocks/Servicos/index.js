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
                <p> Design de interface de forma clara, objetiva e principalmente intuitiva. </p>
            </div>
            <div className='Area Middle'>
                <CodeIcon/>
                <h6> Desenvolvimento </h6>
                <p> Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce. </p>                
            </div>
            <div className='Area Last'>
                <AnimIcon/>
                <h6> Animações e Motion </h6>
                <p> Crio interações que transmitem sensação de modernidade, além de chamarem a atenção do usuário. </p>    
            </div>
        </div>
    );
}); 

export default Servicos;
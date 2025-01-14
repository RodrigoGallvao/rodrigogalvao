import React, { forwardRef } from 'react';
import './style.scss';

const Servicos = forwardRef((props, ref) => {
    
    return (
        <div className="Servicos" ref={ref}>
            <div className='Area'>
                <h6> Layout e Design </h6>
                <p> Design de interface de forma clara, objetiva e principalmente intuitiva. </p>                
            </div>
            <div className='Area'>
                <h6> Desenvolvimento </h6>
                <p> Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce. </p>  
                
            </div>
            <div className='Area'>
                <h6> Animações e Motion </h6>
                <p> Crio interações que transmitem sensação de modernidade, além de chamarem a atenção do usuário. </p>  
                
            </div>
        </div>
    );
});

export default Servicos;
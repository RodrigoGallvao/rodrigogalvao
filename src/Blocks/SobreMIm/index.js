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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac accumsan mi. Donec quis ullamcorper ligula, mattis cursus felis. Donec commodo, dolor venenatis iaculis tempus, lorem urna dapibus nunc, vitae iaculis purus erat a enim. Aenean mi lectus, sodales ac rutrum et, rhoncus ac lectus. Quisque molestie arcu sed blandit commodo. Donec felis arcu, congue at ex nec, euismod faucibus nulla. Cras feugiat leo felis, ut viverra neque hendrerit non.</p>
            </div>
        </div>
    );
});

export default SobreMim;
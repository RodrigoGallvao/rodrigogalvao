import React, { useEffect, forwardRef } from 'react';
import './style.scss';
import initAnimations from '../../scripts/animate';

import { ReactComponent as Html5 } from '../../Assets/Html5.svg';
import { ReactComponent as Css } from '../../Assets/Css.svg';
import { ReactComponent as Rect } from '../../Assets/Rect.svg';
import { ReactComponent as Js } from '../../Assets/Js.svg';
import { ReactComponent as Adobe } from '../../Assets/Adobe.svg';

import { ReactComponent as Sass } from '../../Assets/Sass.svg';
import { ReactComponent as Git } from '../../Assets/Git.svg';
import { ReactComponent as Wordpress } from '../../Assets/Wordpress.svg';
import { ReactComponent as Postman } from '../../Assets/Postman.svg';
import { ReactComponent as Rive } from '../../Assets/Rive.svg';

const Habilidades = forwardRef((props, ref) => {
    useEffect(() => {
      initAnimations(); 
    }, []);

    return (
        <div className="Habilidades" ref={ref}> 

            <div className="diagonal-box animate">
                <div className="content">
                    <h1> Experiências </h1>
                    <h1> & Habilidades </h1>

                    <div className="Icons">
                        <div className="Svg"> 
                            <div>
                                <Html5/>    
                            </div>
                            <div>                          
                                <Css/>   
                            </div>
                            <div>                           
                                <Rect/>  
                            </div>
                            <div>                            
                                <Js/>      
                            </div>
                            <div>                        
                                <Adobe/>
                            </div>
                        </div>

                        <div className="Desc">
                            <p> Html5 </p>
                            <p> Css3 </p>
                            <p> React </p>
                            <p> Node </p>
                            <p> Pacote <br/> Adobe </p>
                        </div>
                    </div>

                    <div className="Icons">
                        <div className="Svg">
                            <div>
                                <Sass/>   
                            </div>
                            <div>                         
                                <Git/>  
                            </div>
                            <div>                    
                                <Wordpress/>     
                            </div>
                            <div>                      
                                <Postman/>  
                            </div>
                            <div>                                  
                                <Rive/>
                            </div>
                        </div>

                        <div className="Desc">
                            <p> Sass </p>
                            <p> Git </p>
                            <p> Wordpress </p>
                            <p> Postman </p>
                            <p> Rive App </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
});

export default Habilidades;
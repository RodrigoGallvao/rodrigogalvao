import React, { useState, forwardRef } from "react";
import './style.scss';

import Vehicles from "../../Assets/vehicles.riv";
import CatLookAtMouse from "../../Assets/catLookAtMouse.riv";
import { useRive } from '@rive-app/react-canvas';

const Destaque = forwardRef((props, ref) => {

    const { rive, RiveComponent } = useRive({
        src: CatLookAtMouse,
        stateMachines: "Cat",
        autoplay: true,
    });

    return (
        <div className="Projetos" ref={ref}>
            <div className="Projetos-Content">
                <h1 className="title"> Projeto em Destaque </h1>

                {/*TryingRive*/}
                <RiveComponent />

            </div>
        </div> 
    );
});

export default Destaque;
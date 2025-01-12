import React, { useState, forwardRef } from "react";
import './style.scss';

import Morfeu from "../../../../Assets/Morfeu.riv";
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

import { ReactComponent as LongButtonUp } from '../../../../Assets/CatMenu/LongButtonUp.svg';
import { ReactComponent as LongButtonDown } from '../../../../Assets/CatMenu/LongButtonDown.svg';
import { ReactComponent as EyeOpen } from '../../../../Assets/CatMenu/EyeOpen.svg';
import { ReactComponent as EyeClose } from '../../../../Assets/CatMenu/EyeClose.svg';

const RiveMorfeu = forwardRef((props, ref) => {

    const [showPassword, setShowPassword] = useState(false);
    const [start, setStart] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: Morfeu,
        stateMachines: "Cat",
        autoplay: true,
    });

    const GetStart = useStateMachineInput(
        rive,
        "Cat",
        "Start"
    );
    const GetCloser = useStateMachineInput(
        rive,
        "Cat",
        "Closer"
    );
    const GetGlasses = useStateMachineInput(
        rive,
        "Cat",
        "GlassesOn"
    );
    const GetChangeGlasses = useStateMachineInput(
        rive,
        "Cat",
        "ChangeGlasses"
    );
    const FocusOnInput = useStateMachineInput(
        rive,
        "Cat",
        "CloserLookDown"
    );
    const FocusOnPassword = useStateMachineInput(
        rive,
        "Cat",
        "CloserNotLook"
    );
    const SeePassword = useStateMachineInput(
        rive,
        "Cat",
        "CloserSpy"
    );

    function Glasses(value) {
        if (value == null) value = false;

        FocusOnPassword.value = false;
        FocusOnInput.value = false;
        if (value) {
            GetGlasses.value = true;
            GetChangeGlasses.fire();
        } else {
            GetGlasses.value = false;
            GetChangeGlasses.fire();
        }
    }

    const TooglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        SeePassword && (SeePassword.value = !showPassword);
    }

    return (
        <div className="Rive" ref={ref}> 
            <div className="Rive-Container">
                <div>
                    <RiveComponent />
                </div>
            </div>

            <div 
                className="Controls" 
                onMouseEnter={() => {GetCloser.value = true}}
                onMouseLeave={() => {GetCloser.value = false}}
            >  
                <div className="Menu" >             
                    <button
                        className={start ? "ToogleSvg StartButton hide" : "ToogleSvg StartButton"}
                        onClick={() => {GetStart.value = true; setStart(true)}}
                    > 
                        <span> start </span>
                        <LongButtonUp/>
                        <LongButtonDown/>        
                    </button>

                    <div className={start ? "buttons" : "buttons hide"}>
                        <input
                            type="text"
                            onFocus={() => FocusOnInput && (FocusOnInput.value = true)}
                            onBlur={() => FocusOnInput && (FocusOnInput.value = false)}

                            placeholder="User"
                        />
                        <div className="Password">
                            <input 
                                type={showPassword ? "text" : "password"}
                                onFocus={() => FocusOnPassword && (FocusOnPassword.value = true)}
                                onBlur={() => FocusOnPassword && (FocusOnPassword.value = false)}

                                placeholder="Password"
                            />
                            <button 
                                className="ShowPassword"
                                onClick={() => TooglePasswordVisibility()}
                                onMouseDown={(e) => e.preventDefault()}
                            > 
                                { showPassword ?
                                    <EyeOpen/>
                                    :
                                    <EyeClose/>
                                }
                            </button>
                        </div>
                        
                        <div className="row">
                            <p>👓</p>                                    

                            <input 
                                type="checkbox" 
                                onChange={(e) => 
                                Glasses(e.target.checked)}
                            />
                        </div>

                        <button
                            className="ToogleSvg Confirm"
                            onClick={() => {GetStart.value = false; setStart(false)}}
                        > 
                            <span> Exit </span>
                            <LongButtonUp/>
                            <LongButtonDown/>        
                        </button>
                    </div>
                </div>       
            </div>
        </div> 
    );
});

export default RiveMorfeu;
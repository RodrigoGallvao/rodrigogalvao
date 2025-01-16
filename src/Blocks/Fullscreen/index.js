import React, { forwardRef, useState } from "react";
import './style.scss';

import { ReactComponent as Close } from '../../Assets/Close.svg';
import { ReactComponent as ArrowLeft } from '../../Assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../Assets/ArrowRight.svg';

import Outros1 from "../../Assets/Outros/Outros1.png";
import Outros3 from "../../Assets/Outros/Outros3.png";
import Outros11 from "../../Assets/Outros/Outros11.png";
import Outros5 from "../../Assets/Outros/Outros5.png";
import Outros10 from "../../Assets/Outros/Outros10.png";
import Outros7 from "../../Assets/Outros/Outros7.png";
import Outros9 from "../../Assets/Outros/Outros9.png";
import Outros6 from "../../Assets/Outros/Outros6.png";
import Outros12 from "../../Assets/Outros/Outros12.png";
import Outros4 from "../../Assets/Outros/Outros4.png";
import Outros2 from "../../Assets/Outros/Outros2.png";
import Outros8 from "../../Assets/Outros/Outros8.png";
const imagens = [Outros1, Outros3, Outros11, Outros5, Outros10, Outros7, Outros9, Outros6, Outros12, Outros4, Outros2, Outros8];

const Fullscreen = ({ show, click, img }) => {

    const [imgToShow, setimgToShow] = useState(img);

    const HandleClick = (e, i) => {
        e.preventDefault();
        console.log(imgToShow+i)
        const max = imagens.length-1;

        if (imgToShow+i >= 0 && imgToShow+i <= max)
            setimgToShow(imgToShow+i)

        if (imgToShow+i < 0) setimgToShow(max)
        if (imgToShow+i > max) setimgToShow(0)
    }
    
    return (
        <div className={`Fullscreen`}>
            <button className="FullscreenFade" onClick={click} />
            <div className="controlWrap">
                <button onClick={(e) => HandleClick(e,-1)} className="PrevNext"> <ArrowLeft/> </button>
            </div>
            <div className="Panel">
                <img src={imagens[imgToShow]} alt="Imagem em foco."/>
                <span> aaaaaaaaaaaaaa </span>
            </div>
            <div className="controlWrap">
                <button onClick={click} className="PrevNext Exit"> <Close/> </button>
                <button onClick={(e) => HandleClick(e,+1)} className="PrevNext"> <ArrowRight/> </button>
            </div>
        </div>
    );
}; 

export default Fullscreen;
import React, { useRef, useEffect, useState, forwardRef } from "react";
import './style.scss';

import { ReactComponent as Mouse } from '../../Assets/Mouse.svg';
import { ReactComponent as Bellow } from '../../Assets/Bellow.svg';

const Home = forwardRef(({ scrollY }, ref) => {
    const me = useRef(null);
    const handleClick = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        console.log(scrollY);
    };

    return (
        <div className="Home" ref={ref}>    

            <div className="Content">
                
                <button ref={me} onClick={() => handleClick(me)} className={`scroll ${scrollY && "show"}`}>
                    <Mouse/>
                    <Bellow/>
                </button>
            </div> 

            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>   
        </div>
    );
});

export default Home;
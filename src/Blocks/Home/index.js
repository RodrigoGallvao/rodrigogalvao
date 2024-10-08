import React, { useEffect, useState, forwardRef } from "react";
import './style.scss';

import LogoGif from "../../Assets/LogoGif.gif";

const Home = forwardRef((props, ref) => {
    
    const [hide, setHide] = useState("open");

    useEffect(() => {
        setHide("Open");

        setTimeout(() => {
            setHide("hide");
        }, 5000);

        setTimeout(() => {
            setHide("close");
        }, 6000);
    }, []);

    return (
        <div className="Home" ref={ref}>
            <img src={LogoGif} className={`Load ${hide}`}/>

            <ul class="background">
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
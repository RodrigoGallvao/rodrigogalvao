import React, { useEffect, useState, forwardRef } from "react";
import './style.scss';

const Home = forwardRef((props, ref) => {

    return (
        <div className="Home" ref={ref}>
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
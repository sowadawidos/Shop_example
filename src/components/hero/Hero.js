import React, { useState, useEffect } from "react"
import "./Hero.scss"
import {Header} from "../header/Header";
import {Navigation} from "../navigation/Navigation";
import {HeroDescription} from "./HeroDescription";

export const Hero = () => {
    const [active, setActive] = useState();

    const getToogle = toogle => {
        setActive(toogle);
    }
    return (
        <>
            <div className="hero">
                <Header getToogle={getToogle}/>
                <HeroDescription/>
                <Navigation active={active}/>
            </div>
        </>
    )
}
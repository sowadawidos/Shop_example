import React from "react"
import "./Hero.scss"
import {Navigation} from "../Navigation/Navigation";
import {HeroDescription} from "./HeroDescription";

export const Hero = ({active}) => {

    return (
        <>
            <div className="hero">
                <HeroDescription/>
                <Navigation active={active}/>
            </div>
        </>
    )
}
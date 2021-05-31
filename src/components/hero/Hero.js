import React, { useState, useEffect } from "react"
import "./Hero.scss"
import {Header} from "../header/Header";
import {Navigation} from "../navigation/Navigation";
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
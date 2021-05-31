import React, { useState, useEffect } from "react"
import {NavBar} from "./NavBar";
import "./Header.scss"
import {Navigation} from "../navigation/Navigation";

export const Header = ({getToogle}) => {

    return (
        <>
            <header className="header__bar">
                <div className="container">
                    <div className="header__logo">
                        <h1>Pizzeria</h1>
                    </div>
                    <NavBar getToogle={getToogle}/>
                </div>
            </header>
        </>
    )
}
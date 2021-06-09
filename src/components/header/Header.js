import React, { useState, useEffect } from "react"
import {NavBar} from "./NavBar";
import "./Header.scss"
import {Navigation} from "../navigation/Navigation";

export const Header = ({getToogle, cartItem, removeItem}) => {
    const [navBar, setNavBar] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeNav);

    return (
        <>
            <header className={navBar ? "header__bar active" : "header__bar"}>
                <div className="container">
                    <div className="header__logo">
                        <a href="#">
                            <h1>Pizzeria</h1>
                        </a>
                    </div>
                    <NavBar getToogle={getToogle} cartItem={cartItem} removeItem={removeItem}/>
                </div>
            </header>
        </>
    )
}
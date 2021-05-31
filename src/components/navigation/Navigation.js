import React, { useState, useEffect } from "react"
import "./Navigation.scss"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"

export const Navigation = ({active}) => {
    return (
        <>
            <div className={ active ? "navigation__bar-box" : "navigation__bar-box hide"}>
                <ul className="navigation__bar">
                    <li className="navigation__bar-list">
                        <a href="/">Home</a>
                    </li>
                    <li className="navigation__bar-list">
                        <a href="#about-us">About us</a>
                    </li>
                    <li className="navigation__bar-list">
                        <a href="#">Menu</a>
                    </li>
                    <li className="navigation__bar-list">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="social">
                    <a href="https://facebook.com">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="https://instagram.com">
                        <img src={instagram} alt="instagram"/>
                    </a>
                </div>
            </div>
        </>
    )
}
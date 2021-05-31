import React, { useState, useEffect } from "react"
import Hamburger from 'hamburger-react'
import pizza from "../../images/pizza.png"

export const NavBar = ({getToogle}) => {
    const [isOpen, setOpen] = useState(false);

    getToogle(isOpen);

    return (
        <>
            <button className="cart__button">
                <img src={pizza} alt="cart"/>
                <span>0</span>
            </button>
            <button className="navbar__button">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </button>
        </>
    )
}
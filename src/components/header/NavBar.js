import React, { useState, useEffect } from "react"
import Hamburger from 'hamburger-react'
import {Cart} from "./Cart";

export const NavBar = ({getToogle, cartItem, removeItem, setCart, cart}) => {
    const [isOpen, setOpen] = useState(false);

    getToogle(isOpen);

    return (
        <>
            <Cart cartItem={cartItem} removeItem={removeItem} setCart={setCart} cart={cart}/>
            <button className="navbar__button">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </button>
        </>
    )
}
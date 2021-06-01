import React, { useState, useEffect } from "react"
import Hamburger from 'hamburger-react'
import {Cart} from "./Cart";

export const NavBar = ({getToogle}) => {
    const [isOpen, setOpen] = useState(false);

    getToogle(isOpen);

    return (
        <>
            <Cart/>
            <button className="navbar__button">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </button>
        </>
    )
}
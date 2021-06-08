import React, { useState, useEffect } from "react"
import pizza from "../../images/pizza.png";
import {ModalCart} from "./ModalCart";

export const Cart = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <>
            <button onClick={handleClick} className="cart__button">
                <img src={pizza} alt="cart"/>
                <span>0</span>
            </button>
            <ModalCart active={active} handleClick={handleClick}/>
        </>
    )
}
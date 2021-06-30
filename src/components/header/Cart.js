import React, { useState, useEffect } from "react"
import pizza from "../../images/pizza.png";
import {ModalCart} from "./ModalCart";

export const Cart = ({cartItem, removeItem, setCart, cart, sendOrder}) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <>
            <button onClick={handleClick} className="cart__button">
                <img src={pizza} alt="cart"/>
                <span>{cartItem.length}</span>
            </button>
            <ModalCart active={active} handleClick={handleClick} cartItem={cartItem} removeItem={removeItem} setCart={setCart} cart={cart} sendOrder={sendOrder}/>
        </>
    )
}
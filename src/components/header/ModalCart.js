import React, { useState, useEffect } from "react"
import "./Cart.scss";
import {ModalContent} from "./ModalContent";
import {ModalHeader} from "./ModalHeader";

export const ModalCart = ({active, handleClick, cartItem, removeItem}) => {
    const [cart, setCart] = useState([]);

    return (
        <>
            <div className={ active ? "modal__box" : "modal__box off"}>
                <ModalHeader handleClick={handleClick}/>
                <ModalContent cartItem={cartItem} removeItem={removeItem}/>
            </div>
        </>
    )
}
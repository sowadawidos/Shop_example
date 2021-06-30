import React from "react"
import "./Cart.scss";
import {ModalContent} from "./ModalContent";
import {ModalHeader} from "./ModalHeader";

export const ModalCart = ({active, handleClick, cartItem, removeItem, setCart, cart, sendOrder}) => {
    return (
        <>
            <div className={active ? "modal__box" : "modal__box off"}>
                <ModalHeader handleClick={handleClick}/>
                <ModalContent cartItem={cartItem} removeItem={removeItem} setCart={setCart} cart={cart} sendOrder={sendOrder}/>
            </div>
        </>
    )
}
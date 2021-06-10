import React, {useState, useEffect} from "react"
import "./Cart.scss";
import {ModalContent} from "./ModalContent";
import {ModalHeader} from "./ModalHeader";

export const ModalCart = ({active, handleClick, cartItem, removeItem, setCart, cart}) => {
    const [orderBtn, setOrderBtn] = useState(false);

    const handleOrderBtn = () => {
        setOrderBtn(!orderBtn);
    }

    return (
        <>
            <div className={active ? "modal__box" : "modal__box off"}>
                <ModalHeader handleClick={handleClick}/>
                <ModalContent cartItem={cartItem} removeItem={removeItem} setCart={setCart} cart={cart}
                              handleOrderBtn={handleOrderBtn} orderBtn={orderBtn}/>
            </div>
        </>
    )
}
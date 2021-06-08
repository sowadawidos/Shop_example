import React, { useState, useEffect } from "react"
import "./Cart.scss";
import {ModalContent} from "./ModalContent";
import {ModalHeader} from "./ModalHeader";

export const ModalCart = ({active, handleClick}) => {
    return (
        <>
            <div className={ active ? "modal__box" : "modal__box off"}>
                <ModalHeader handleClick={handleClick}/>
                <ModalContent/>
            </div>
        </>
    )
}
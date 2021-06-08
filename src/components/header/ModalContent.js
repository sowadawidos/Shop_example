import React, { useState, useEffect } from "react"
import {ModalCartList} from "./ModalCartList";

export const ModalContent = () => {

    return (
        <>
            <div className="modal__content">
                <h1 className="content__title">Your order:</h1>
                <ul className="content__list">
                    <ModalCartList/>
                </ul>
                <h1 className="content__total">Total price : 50PLN</h1>
                <button className="content__order-btn">Order</button>
            </div>

        </>
    )
}
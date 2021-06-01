import React, { useState, useEffect } from "react"
import pizza from "../../images/pizza.png";

export const Cart = () => {
    return (
        <>
            <button className="cart__button">
                <img src={pizza} alt="cart"/>
                <span>0</span>
            </button>
        </>
    )
}
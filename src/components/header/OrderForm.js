import React, {useState, useEffect} from "react"

export const OrderForm = () => {
    return (
        <>
            <form className="order__form">
                <label>
                    Name and surname
                    <input type="text"/>
                </label>
                <label>
                    Address
                    <input type="text"/>
                </label>
                <label>
                    Phone number
                    <input type="tel"/>
                </label>
                <button className="content__order-btn">Order</button>
            </form>
        </>
    )
}
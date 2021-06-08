import React, { useState, useEffect } from "react"
import {OrderList} from "./OrderList";

export const Orders = () => {
    return (
        <>
            <div className="orders">
                <h1 className="orders__title">Orders: </h1>
                <ul className="order__list">
                    <OrderList/>
                </ul>
            </div>
        </>
    )
}
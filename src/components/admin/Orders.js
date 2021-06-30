import React, { useState, useEffect } from "react"
import {OrderList} from "./OrderList";

export const Orders = ({orders}) => {
    
    return (
        <>
            <div className="orders">
                <h1 className="orders__title">Orders: </h1>
                <ul className="order__list">
                    {
                        orders && orders.map(order => <OrderList person={order.person} address={order.address} number={order.number} fullOrder={order.fullOrder} />)
                    }
                </ul>
            </div>
        </>
    )
}
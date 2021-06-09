import React, { useState, useEffect } from "react"
import {OrderList} from "./OrderList";

const OrderDatabase = "http://localhost:3000";

export const Orders = () => {
    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch(`${OrderDatabase}/order`)
            .then(resp => resp.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <>
            <div className="orders">
                <h1 className="orders__title">Orders: </h1>
                <ul className="order__list">
                    {
                        orders && orders.map(order => <OrderList person={order.person} city={order.city} address={order.address} post={order.post} number={order.number} fullOrder={order.fullOrder} />)
                    }
                </ul>
            </div>
        </>
    )
}
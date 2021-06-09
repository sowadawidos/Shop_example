import React, { useState, useEffect } from "react"

export const OrderList = ({address,city,fullOrder,number,person,post}) => {
    return (
        <>
            <li className="order__list-text">
                <div className="personal__info">
                    <h1>Imie i nazwisko: {person} </h1>
                    <h2>Adress: {city}, {address}, {post}</h2>
                    <h2>Numer telefonu: {number}</h2>
                </div>
                <p>{fullOrder}</p>
            </li>
        </>
    )
}
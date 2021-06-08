import React, { useState, useEffect } from "react"

export const OrderList = () => {
    return (
        <>
            <li className="order__list-text">
                <div className="personal__info">
                    <h1>Imie i nazwisko: Dawid Sowiński</h1>
                    <h2>Adress: Wrocław, Cegielniana 8E, 58-400 Kamienna Góra</h2>
                    <h2>Numer telefonu: 606182359</h2>
                </div>
                <p>zamowienie</p>
            </li>
            <li className="order__list-text">
                <div className="personal__info">
                    <h1>Imie i nazwisko</h1>
                    <h2>Adress</h2>
                    <h2>Numer telefonu</h2>
                </div>
                <p>pizza margarita x2, pizza staka x5, pizza owaka, woda gazowana, to tamto i sramko</p>
            </li>
        </>
    )
}
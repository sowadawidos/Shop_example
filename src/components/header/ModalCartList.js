import React, {useState, useEffect} from "react"
import deleteButton from "./delete.svg";

export const ModalCartList = () => {
    return (
        <>
            <li className="content__list-item">
                <h2>Pizza margaritaiannnaaa</h2>
                <h3>1</h3>
                <h3>15.99PLN</h3>
                <span>
                    <img src={deleteButton} alt="delete button"/>
                </span>
            </li>
        </>
    )
}
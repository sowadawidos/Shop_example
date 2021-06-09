import React, { useState, useEffect } from "react"

export const MenuList = ({item, key, photoURL, dishName, price, description, getCartItem}) => {
    return (
        <>
            <li key={key} className="menu__article">
                <img src={photoURL} alt=""/>
                <h2>{dishName}</h2>
                <p>{description}</p>
                <h4>{price}PLN</h4>
                <button onClick={() => getCartItem(item)}>Add to cart</button>
            </li>
        </>
    )
}
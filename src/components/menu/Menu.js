import React, {useState, useEffect} from "react"
import "./Menu.scss"
import {MenuList} from "./MenuList";

const API = "http://localhost:3000";

export const Menu = ({getCartItem}) => {
    const [menu, setMenu] = useState();

    useEffect(() => {
        fetch(`${API}/menu`)
            .then(resp => resp.json())
            .then(data => setMenu(data.map(item => ({
                ...item,
                amount: 1
            }))))
    }, [])

    return (
        <>
            <div id="menu" className="menu__main">
                <div className="container">
                    <h1 className="menu__title">Menu</h1>
                    <ul className="menu__box">
                        {
                            menu && menu.map(el => <MenuList item={el} getCartItem={getCartItem} key={el.id}
                                                                    photoURL={el.photoURL} dishName={el.dishName}
                                                                    description={el.description} price={el.price}/>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
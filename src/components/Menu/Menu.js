import React from "react"
import "./Menu.scss"
import {MenuList} from "./MenuList";


export const Menu = ({getCartItem, menu}) => {

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
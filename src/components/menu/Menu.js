import React, { useState, useEffect } from "react"
import "./Menu.scss"

export const Menu = () => {
    return (
        <>
            <div id="menu" className="menu__main">
                <div className="container">
                    <h1 className="menu__title">Menu</h1>
                    <ul className="menu__box">
                        <li className="menu__article">
                            <img src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <h2>Pizza napolitana</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, suscipit?</p>
                            <h4>15,00PLN</h4>
                            <button>Add to cart</button>
                        </li>
                        <li className="menu__article">
                            <img src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <h2>Pizza margarita</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, suscipit?</p>
                            <h4>13,00PLN</h4>
                            <button>Add to cart</button>
                        </li>
                        <li className="menu__article">
                            <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <h2>Pizza jajowa</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, suscipit?</p>
                            <h4>21,00PLN</h4>
                            <button>Add to cart</button>
                        </li>
                        <li className="menu__article">
                            <img src="https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <h2>Pizza oniono</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, suscipit?</p>
                            <h4>16,00PLN</h4>
                            <button>Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
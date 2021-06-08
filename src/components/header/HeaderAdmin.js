import React, { useState, useEffect } from "react"
import "./Header.scss"

export const HeaderAdmin = () => {
    return (
        <>
            <header className="header__bar">
                <div className="container">
                    <div className="header__logo">
                        <a href="#">
                            <h1>Pizzeria</h1>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
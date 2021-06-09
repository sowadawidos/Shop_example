import React, { useState, useEffect } from "react"
import "./Panel.scss";
import {Orders} from "./Orders";
import {AddMenu} from "./AddMenu";

export const MainAdminPanel = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <>
            <div className="main__admin">
                <div className="container">
                    <Orders/>
                    <div className="add-btn">
                        {
                            active ? <button onClick={handleClick}>BACK TO PANEL</button> : <button onClick={handleClick}>ADD TO MENU</button>
                        }
                    </div>
                    {
                        active ? <AddMenu/> : null
                    }
                </div>
            </div>
        </>
    )
}
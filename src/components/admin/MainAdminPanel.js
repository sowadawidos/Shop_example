import React, { useState, useEffect } from "react"
import "./Panel.scss";
import {Orders} from "./Orders";
import {AddMenu} from "./AddMenu";

export const MainAdminPanel = ({orders, addMenu}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <>
            <div className="main__admin">
                <div className="container">
                    <Orders orders={orders}/>
                    <div className="add-btn">
                        {
                            active ? <button onClick={handleClick}>BACK TO PANEL</button> : <button onClick={handleClick}>ADD TO MENU</button>
                        }
                    </div>
                    {
                        active ? <AddMenu addMenu={addMenu} handleClick={handleClick}/> : null
                    }
                </div>
            </div>
        </>
    )
}
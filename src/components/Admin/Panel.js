import React, {useState} from "react"
import {HeaderAdmin} from "../Header/HeaderAdmin";
import {MainAdminPanel} from "./MainAdminPanel";
import {Login} from "./Login";

const loginCorrect = "admin1";
const passwordCorrect = "admin1";

export const Panel = ({orders, addMenu}) => {
    const [user, setUser] = useState(false);

    const handleUser = (login, password) => {
        if (login === loginCorrect && password === passwordCorrect) {
            setUser(!user);
        } else {
            alert("Wrong login or password!")
        }
    }

    return (
        <>
            <HeaderAdmin/>
            {
                user ? <>

                    <MainAdminPanel orders={orders} addMenu={addMenu}/>
                    </>
                    :
                    <Login handleUser={handleUser}/>
            }
        </>
    )
}
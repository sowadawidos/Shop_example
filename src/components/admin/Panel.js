import React, { useState, useEffect } from "react"
import {HeaderAdmin} from "../header/HeaderAdmin";
import {MainAdminPanel} from "./MainAdminPanel";
import {Login} from "./Login";

const loginCorrect = "admin1";
const passwordCorrect = "admin1";

export const Panel = () => {
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

                    <MainAdminPanel/>
                    </>
                    :
                    <Login handleUser={handleUser}/>
            }
        </>
    )
}
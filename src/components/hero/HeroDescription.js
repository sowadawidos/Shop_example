import React, { useState, useEffect, useRef } from "react"
import { init } from "ityped";

export const HeroDescription = () => {
    // const description = useRef();
    //
    // useEffect(() => {
    //     init(description.current, {
    //         showCursor: false,
    //         strings: ["The greatest pizza ever ! !", "Ready in 60 minutes ! !"]
    //     });
    // }, [])

    return (
        <>
            <div className="hero__description">
                <h1>The greatest pizza ever !!</h1>
                <button>Order now!</button>
            </div>
        </>
    )
}
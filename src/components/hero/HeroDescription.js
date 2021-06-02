import React, { useState, useEffect, useRef } from "react"
import { init } from "ityped";

export const HeroDescription = () => {
    return (
        <>
            <div className="hero__description">
                <h1>The greatest pizza ever !!</h1>
                <a href="#menu">
                    <button>Order now!</button>
                </a>
            </div>
        </>
    )
}
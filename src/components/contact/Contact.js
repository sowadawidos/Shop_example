import React, { useState, useEffect } from "react";
import "./Contact.scss"

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="contact__logo">
                        <h1>Pizza</h1>
                        <h2>YOUR LOGO</h2>
                    </div>
                    <div className="contact__desc">
                        <h1>Contact with us</h1>
                        <div onClick="contact-text">
                            <h2>Adress:</h2>
                            <p>50-213 LoremIpsum</p>
                            <p>Alejantdo 24</p>
                        </div>
                        <div onClick="contact-text">
                            <h2>Phone number:</h2>
                            <p>521654432</p>
                        </div>
                        <div onClick="contact-text">
                            <h2>E-mail:</h2>
                            <p>gsgdsgrwerwerwe@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__desc">
                        <h1>Opening Hours</h1>
                        <div onClick="contact-text">
                            <h2>Every day:</h2>
                            <p>9:00 - 21:00</p>
                        </div>
                    </div>
                    <div className="contact__desc">
                        <h1>Payments</h1>
                        <div onClick="contact-text">
                            <img src="" alt=""/>
                            <p>Cash</p>
                        </div>
                        <div onClick="contact-text">
                            <img src="" alt=""/>
                            <p>Payment online</p>
                        </div>
                        <div onClick="contact-text">
                            <img src="" alt=""/>
                            <p>Credit card</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
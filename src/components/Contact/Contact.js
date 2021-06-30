import React from "react";
import "./Contact.scss";
import cash from ".//money.svg";
import desktop from ".//desktop.svg";
import card from ".//credit-card.svg";

export const Contact = () => {
    return (
        <>
            <div id="contact" className="contact">
                <div className="container">
                    <div className="contact__logo">
                        <h1>Pizza</h1>
                        <h2>YOUR LOGO</h2>
                    </div>
                    <div className="contact__desc">
                        <h1>Contact with us</h1>
                        <div className="contact-text">
                            <h2>Adress:</h2>
                            <p>50-213 Alejandtdo</p>
                            <p>Gasadada 24</p>
                        </div>
                        <div className="contact-text-number">
                            <h2>Phone number:</h2>
                            <p>521654432</p>
                        </div>
                        <div className="contact-text-email">
                            <h2>E-mail:</h2>
                            <p>grwerwerwe@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__desc">
                        <h1>Opening Hours</h1>
                        <div className="contact-text-hours">
                            <h2>Every day:</h2>
                            <p>9:00 - 21:00</p>
                        </div>
                    </div>
                    <div className="contact__desc">
                        <h1>Payments</h1>
                        <div className="contact-text-payment">
                            <img src={cash} alt=""/>
                            <p>Cash</p>
                        </div>
                        <div className="contact-text-payment">
                            <img src={desktop} alt=""/>
                            <p>Payment online</p>
                        </div>
                        <div className="contact-text-payment">
                            <img src={card} alt=""/>
                            <p>Credit card</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
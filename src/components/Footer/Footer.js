import React from "react"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import "./Footer.scss"

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__logo">
                        <a href="#">
                            <h1>Pizzeria</h1>
                        </a>
                        <p>Copyright &copy; Dawid Sowiński 2021</p>
                    </div>
                    <div className="social">
                        <a href="https://facebook.com">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a href="https://instagram.com">
                            <img src={instagram} alt="instagram"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

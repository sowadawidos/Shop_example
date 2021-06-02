import './App.css';
import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Hero} from "./components/hero/Hero";
import {AboutUs} from "./components/about_us/AboutUs";
import {Header} from "./components/header/Header";
import {Menu} from "./components/menu/Menu";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
    const [active, setActive] = useState();

    const getToogle = toogle => {
        setActive(toogle);
    }

    return (
        <>
            <Header getToogle={getToogle}/>
            <Hero active={active}/>
            <AboutUs/>
            <Menu/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;

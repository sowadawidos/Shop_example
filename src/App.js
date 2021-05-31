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

function App() {
    const [active, setActive] = useState();

    const getToogle = toogle => {
        setActive(toogle);
    }

    return (
        <>
            <Router exact path="/" component={Hero}/>
            <Header getToogle={getToogle}/>
            <Hero active={active}/>
            <AboutUs/>
        </>
    )
}

export default App;

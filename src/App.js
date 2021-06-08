import './App.css';
import React, {useState, useEffect} from "react"
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
import {Panel} from "./components/admin/Panel";

function App() {
    const [active, setActive] = useState();

    const getToogle = toogle => {
        setActive(toogle);
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/admin">
                        <Panel/>
                    </Route>
                    <Route path="/">
                        <Header getToogle={getToogle}/>
                        <Hero active={active}/>
                        <AboutUs/>
                        <Menu/>
                        <Contact/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;

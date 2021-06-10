import './App.css';
import React, {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
    const [cartItem, setCartItem] = useState([]);
    const [cart, setCart] = useState([]);

    const getToogle = toogle => {
        setActive(toogle);
    }


    const getCartItem = item => {
        if (cartItem.length > 0) {
            if (!(cartItem.includes(item))) {
                setCartItem(prev => [...prev, item])
            }
        } else {
            setCartItem(prev => [...prev, item]);
        }
    }

    const removeItem = (oneCart, cart) => {
        const deleteCartPrice = cart.filter(element => element.id !== oneCart.id);
        setCart(deleteCartPrice);

        const deleteItem = cartItem.filter(element => element.id !== oneCart.id);
        setCartItem(deleteItem);
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/admin">
                        <Panel/>
                    </Route>
                    <Route path="/">
                        <Header getToogle={getToogle} cartItem={cartItem} removeItem={removeItem} setCart={setCart}
                                cart={cart}/>
                        <Hero active={active}/>
                        <AboutUs/>
                        <Menu getCartItem={getCartItem}/>
                        <Contact/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;

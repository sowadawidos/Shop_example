import './App.css';
import React, {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {db} from "./API/API"

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
    const [menu, setMenu] = useState([]);
    const [orders, setOrders] = useState([]);

    const getToogle = toogle => {
        setActive(toogle);
    }

    useEffect(() => {
        if (db) {
            db.collection('menu').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    amount: 1,
                    id: doc.id,
                }))
                setMenu(data);
            })
            db.collection('order').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setOrders(data);
            })
        }
    }, [db])

    const addMenu = getMenu => {
        if (db) {
            db.collection('menu').add({
                ...getMenu
            })
                .catch(error => {
                    console.error(error)
                })
        } else {
            console.log("brak bazy")
        }
    }

    const sendOrder = order => {
        if (db) {
            db.collection('order').add({
                ...order
            })
                .catch(error => {
                    console.error(error)
                })
        } else {
            console.log("brak bazy")
        }
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
                        <Panel orders={orders} addMenu={addMenu}/>
                    </Route>
                    <Route path="/">
                        <Header getToogle={getToogle} cartItem={cartItem} removeItem={removeItem} setCart={setCart}
                                cart={cart} sendOrder={sendOrder}/>
                        <Hero active={active}/>
                        <AboutUs/>
                        <Menu getCartItem={getCartItem} menu={menu}/>
                        <Contact/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;

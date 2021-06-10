import React, {useState, useEffect} from "react"
import {ModalCartList} from "./ModalCartList";

export const ModalContent = ({cartItem, removeItem, setCart, cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        if (cart.length > 1) {
            const reduce = cart.reduce((prev, next) => prev + (next.price * next.amount), 0);
            setTotalPrice(reduce);
        } else if (cart.length === 1) {
            setTotalPrice(cart[0].price * cart[0].amount)
        } else if (cart.length === 0) {
            setTotalPrice(0)
        }
    }, [cart])

    return (
        <>
            <div className="modal__content">
                <h1 className="content__title">Your order:</h1>
                <ul className="content__list">
                    {
                        cartItem && cartItem.map(item => <ModalCartList removeItem={removeItem} itemIdx={item.id}
                                                                        item={item} dishName={item.dishName}
                                                                        price={item.price} setCart={setCart}
                                                                        cart={cart} key={item.id}/>)
                    }
                </ul>
                <h1 className="content__total">Total price : {totalPrice.toFixed(2)} PLN</h1>
                <button className="content__order-btn">Order</button>
            </div>

        </>
    )
}
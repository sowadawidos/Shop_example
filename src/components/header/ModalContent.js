import React, {useState, useEffect} from "react"
import {ModalCartList} from "./ModalCartList";

export const ModalContent = ({cartItem, removeItem}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <>
            <div className="modal__content">
                <h1 className="content__title">Your order:</h1>
                <ul className="content__list">
                    {
                        cartItem && cartItem.map((el, key) => <ModalCartList removeItem={removeItem} key={key} item={el} dishName={el.dishName} price={el.price} setTotalPrice={setTotalPrice}/>)
                    }
                </ul>
                <h1 className="content__total">Total price : {totalPrice.toFixed(2)}PLN</h1>
                <button className="content__order-btn">Order</button>
            </div>

        </>
    )
}
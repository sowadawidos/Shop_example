import React, {useState, useEffect} from "react"
import deleteButton from "./delete.svg";

export const ModalCartList = ({dishName, itemIdx, price, item, removeItem, setCart, cart, key}) => {
    const [quantity, setQuantity] = useState("1");

    useEffect(() => {
        setCart(prev => [...prev, ({
            ...item,
            price: parseFloat(price)
        })])

    }, [])

    const handleAmount = e => {
        setQuantity(e.target.value);

        setCart(prev => {
            const newArr = [...prev];
            return newArr.map(item => {
                return item.id === itemIdx ? {...item, amount: parseInt(e.target.value)} : item;
            });
        })
    }

    return (
        <>
            <li key={key} className="content__list-item">
                <h2>{dishName}</h2>
                <input type="number" step="1" min="1" max="25" value={quantity} onChange={handleAmount}/>
                <h3>{(parseFloat(price) * quantity).toFixed(2)}PLN</h3>
                <span>
                    <img src={deleteButton} alt="delete button" onClick={() => removeItem(item, cart)}/>
                </span>
            </li>
        </>
    )
}
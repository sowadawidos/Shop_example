import React, {useState, useEffect} from "react"
import deleteButton from "./delete.svg";

export const ModalCartList = ({dishName, key, price, setTotalPrice, item, removeItem}) => {
    const [amount, setAmount] = useState(1);

    const handleAmount = e => {
        setAmount(e.target.value);
    }

    useEffect(() => {
        setTotalPrice(prev => prev + (parseFloat(price) * amount));
    }, [item])

    return (
        <>
            <li key={key} className="content__list-item">
                <h2>{dishName}</h2>
                <input type="number" step="1" min="1" max="25" value={amount} onChange={handleAmount}/>
                <h3>{(parseFloat(price) * amount).toFixed(2)}PLN</h3>
                <span>
                    <img src={deleteButton} alt="delete button" onClick={() => removeItem(item)}/>
                </span>
            </li>
        </>
    )
}
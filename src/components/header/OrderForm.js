import React, {useState} from "react"

const API = "http://my-json-server.typicode.com/sowadawidos/Shop_example"

export const OrderForm = ({cart}) => {
    const [order, setOrder] = useState();
    const [person, setPerson] = useState({
        person: '',
        address: '',
        number: ''
    })

    const handlePerson = e => {
        const {name, value} = e.target;
        setPerson(prev => ({
            ...prev,
            [name]: value
        }))
        const items = cart.reduce((prev, next) => `${prev.dishName} x${prev.amount}, ` + `${next.dishName} x${next.amount}, `)
        setOrder({
            ...person,
            fullOrder: items
        })
    }

    const handleSendOrder = event => {
        event.preventDefault();

        fetch(`${API}/order`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => alert("zamowienie złożone"))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <form className="order__form" onSubmit={handleSendOrder}>
                <label>
                    Name and surname
                    {
                        cart.length > 0 ? <input type="text" onChange={handlePerson} name="person" placeholder="Enter full name"/> : <input type="text" onChange={handlePerson} name="person" disabled/>
                    }
                </label>
                <label>
                    Address
                    {
                        cart.length > 0 ? <input type="text" onChange={handlePerson} name="address" placeholder="Enter full address"/> : <input type="text" onChange={handlePerson} name="address" disabled />
                    }
                </label>
                <label>
                    Phone number
                    {
                        cart.length > 0 ? <input type="tel" onChange={handlePerson} name="number" maxLength="9" placeholder="Enter phone number"/> : <input type="tel" onChange={handlePerson} name="number" disabled/>
                    }
                </label>
                <button className="content__order-btn">Order</button>
            </form>
        </>
    )
}
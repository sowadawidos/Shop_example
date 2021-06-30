import React, {useState} from "react"
import cross from "./remove 2.svg"

export const OrderForm = ({cart, sendOrder}) => {
    const [order, setOrder] = useState();
    const [person, setPerson] = useState({
        person: '',
        address: '',
        number: ''
    })
    const [errors, setErrors] = useState({
        nameError: false,
        addressError: false,
        numberError: false
    });

    const handlePerson = e => {
        const {name, value} = e.target;
        setPerson(prev => ({
            ...prev,
            [name]: value
        }))
        if (cart.length === 1) {
            setOrder({
                ...person,
                fullOrder: `${cart[0].dishName} x${cart[0].amount}`
            })
        } else {
            const items = cart.reduce((prev, next) => prev + `${next.dishName} x${next.amount}, `, "")
            setOrder({
                ...person,
                fullOrder: items
            })
        }
    }
    console.log(order);
    const handleSendOrder = event => {
        event.preventDefault();
        setErrors('');
        if (person.person.length < 3) {
            setErrors(prev => ({
                ...prev,
                nameError: true
            }))
        }
        if (person.address.length < 3) {
            setErrors(prev => ({
                ...prev,
                addressError: true
            }))
        }
        if (person.number.length !== 9) {
            setErrors(prev => ({
                ...prev,
                numberError: true
            }))
        } else {
            sendOrder(order);
        }
    }

    return (
        <>
            <form className="order__form" onSubmit={handleSendOrder}>
                <label>
                    Name and surname
                    {
                        cart.length > 0 ?
                            <input type="text" onChange={handlePerson} name="person" placeholder="Enter full name"/> :
                            <input type="text" onChange={handlePerson} name="person" disabled/>
                    }
                    {
                        errors.nameError && <img src={cross} alt=""/>
                    }
                </label>
                <label>
                    Address
                    {
                        cart.length > 0 ? <input type="text" onChange={handlePerson} name="address"
                                                 placeholder="Enter full address"/> :
                            <input type="text" onChange={handlePerson} name="address" disabled/>
                    }
                    {
                        errors.nameError && <img src={cross} alt=""/>
                    }
                </label>
                <label>
                    Phone number
                    {
                        cart.length > 0 ? <input type="tel" onChange={handlePerson} name="number" maxLength="9"
                                                 placeholder="Enter phone number"/> :
                            <input type="tel" onChange={handlePerson} name="number" disabled/>
                    }
                    {
                        errors.nameError && <img src={cross} alt=""/>
                    }
                </label>
                <button className="content__order-btn">Order</button>
            </form>
        </>
    )
}
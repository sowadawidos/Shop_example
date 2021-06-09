import React, { useState, useEffect } from "react"

const API = "http://localhost:3000";

export const AddMenu = () => {
    const [inputs, setInputs] = useState({
        id: "",
        photoURL: "",
        dishName: "",
        description: "",
        price: ""
    })

    const handleInputs = e => {
        const {name, value} = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`${API}/menu`, {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => alert("dodano do bazy danych menu"))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="add__menu">
                <form onSubmit={handleSubmit}>
                    <label>
                        Photo URL:
                        <input type="text" name="photoURL" onChange={handleInputs}/>
                    </label>
                    <label>
                        Dish name:
                        <input type="text" name="dishName" onChange={handleInputs}/>
                    </label>
                    <label>
                        Description:
                        {/*<input type="text" name="description" onChange={handleInputs}/>*/}
                        <textarea className="textarea" name="description" onChange={handleInputs}/>
                    </label>
                    <label>
                        Price:
                        <input type="number" step="0.01" name="price" onChange={handleInputs}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}
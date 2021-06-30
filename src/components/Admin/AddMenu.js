import React, {useState} from "react"

export const AddMenu = ({addMenu}) => {
    const [inputs, setInputs] = useState({
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
        addMenu(inputs);
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
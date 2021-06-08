import React, { useState, useEffect } from "react"

export const AddMenu = () => {

    return (
        <>
            <div className="add__menu">
                <form>
                    <label>
                        Photo URL:
                        <input type="text"/>
                    </label>
                    <label>
                        Dish name:
                        <input type="text"/>
                    </label>
                    <label>
                        Description:
                        <input type="text"/>
                    </label>
                    <label>
                        Price:
                        <input type="number" step="0.01"/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}
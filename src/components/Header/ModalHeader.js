import React from "react"

export const ModalHeader = ({handleClick}) => {
    return (
        <>
            <div className="modal__header">
                <button onClick={handleClick} className="close__modal">
                    <span>&times;</span>
                </button>
            </div>
        </>
    )
}
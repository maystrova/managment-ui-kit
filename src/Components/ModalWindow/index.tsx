import React from "react";
import './style.css'
import {Button} from "../Button";

export interface ModalWindowProps {
    title: string
    description: string
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
}


const ModalWindow = ({title, description, onCancel, onSubmit, isOpen}: ModalWindowProps) => {


    if (isOpen === true) {
    return (
        <div className="AddTask">
        <div className='ModalOverlay'>
            <div className='ModalWindow'>
                <header className='ModalHeader'>
                    <div className="ModalHeader__title">{title}</div>
                    <div className='ModalHeader__close' onClick={onCancel}>&times</div>
                </header>
                <div className="ModalBody">
                    {description}
                </div>
                <footer className="ModalFooter">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onSubmit}>Submit</button>
                </footer>
            </div>
        </div>
        </div>
    )
}


}

export {ModalWindow}
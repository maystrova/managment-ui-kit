import React from "react";
import './style.css'
import {Button} from "../Button";

export interface ModalWindowProps {
    title: string
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
}


const ModalWindow = ({title, onCancel, onSubmit, isOpen}: ModalWindowProps) => {

   if(!isOpen) return null

    return (
        <div className="AddTask">
        <div className='ModalOverlay' onClick={onCancel}>
            <div className='ModalWindow'>
                <header className='ModalHeader'>
                    <div className="ModalHeader__title">{title}</div>
                    <div className='ModalHeader__close' onClick={onCancel}>&#10008;</div>
                </header>
                <div className="ModalBody">
                </div>
                <footer className="ModalFooter">
                    <Button backgroundColor={'#EAEAEA'} size={"medium"} onClick={onCancel} text={'Cancel'}/>
                    <Button backgroundColor={'#EAEAEA'} size={"medium"} onClick={onSubmit} text={'Submit'}/>
                </footer>
            </div>
        </div>
        </div>
    )



}

export {ModalWindow}
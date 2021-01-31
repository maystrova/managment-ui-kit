import React, {useState} from "react";
import './style.css'
import {Button} from "../Button";

interface FieldsForCreateTask {
    title: string,
    description: string
}

export interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: (fieldsForCreateTask: FieldsForCreateTask) => void
}


const AddTask = ({onCancel, onSubmit, isOpen}: ModalWindowProps) => {
    const [fieldsForCreateTask, setFieldsForCreateTask] = useState<FieldsForCreateTask>({title: '', description: ''})

    if (!isOpen) return null

    return (
        <div className='AddTask'>
            <div className='AddTask__ModalOverlay' onClick={onCancel}>
            </div>

            <div className='AddTask__ModalWindow'>
                <header className='AddTask__ModalHeader'>
                    <div className="AddTask__ModalHeader-title">Add a Task</div>
                    <div className='AddTask__ModalHeader-close' onClick={onCancel}>&#10008;</div>
                </header>
                <div className="AddTask__ModalBody">
                    <input className='AddTask__addTitle AddTask__addText' type="text" placeholder={'Add a title...'} value={fieldsForCreateTask.title}
                           onChange={(event) => {
                               setFieldsForCreateTask({
                                   title: event.target.value,
                                   description: fieldsForCreateTask.description
                               })
                           }}/>
                    <input className='AddTask__addDescription AddTask__addText' type="text" value={fieldsForCreateTask.description}
                           placeholder={'Add a description...'}
                           onChange={(event) => {
                               setFieldsForCreateTask({
                                   description: event.target.value,
                                   title: fieldsForCreateTask.title
                               })
                           }}/>
                </div>
                <footer className="AddTask__ModalFooter">
                    <Button backgroundColor={'#EAEAEA'} size={"medium"} onClick={onCancel} text={'Cancel'}/>
                    <Button backgroundColor={'#EAEAEA'} size={"medium"} onClick={() => onSubmit(fieldsForCreateTask)}
                            text={'Add'}/>
                </footer>
            </div>
        </div>
    )


}

export {AddTask}
import React, {useState} from "react";
import './style.css'
import {Button} from "../Button";

export interface FieldsForCreateProject {
    title: string
}

 export interface AddProjectProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: (fieldsForCreateProject: FieldsForCreateProject, id: string) => void
}

const AddProject = ({onCancel, onSubmit, isOpen}: AddProjectProps) => {
    const [fieldsForAddProject, setFieldsForCreateProject] = useState<FieldsForCreateProject>({title: ''})

    if (!isOpen) return null

    return (
        <div className="AddProject">
            <div className="AddProject__ModalOverlay" onClick={onCancel}>
            </div>
            <div className="AddProject__ModalWindow">
                <header className="AddProject__ModalHeader">
                    <div className="AddProject__ModalHeader-title">Add a Project</div>
                    <div className="AddProject__ModalHeader-close" onClick={onCancel}>&#10008;</div>
                </header>
                <div className="AddProject__ModalBody">
                    <input className='AddProject__AddTitle' type="text" placeholder={'Add a Project Name'}
                           value={fieldsForAddProject.title} onChange={
                        (event) => {
                            setFieldsForCreateProject({
                                title: event.target.value,
                            })
                        }
                    }/>
                </div>
                <footer className="AddProject__ModalFooter">
                    <Button backgroundColor={'#EAEAEA'} onClick={onCancel} size={"medium"} text={'Cancel'}/>
                    <Button backgroundColor={'rgb(206, 249, 198)'} size={"medium"} text={'Add a Project'} onClick={() => {
                        onSubmit(fieldsForAddProject, ('projects') || ('teams'))
                        setFieldsForCreateProject({title: ''})
                    }}/>
                </footer>


            </div>
        </div>
    )

}

export {AddProject}

import React, { useState } from 'react'
import { ModalWindow } from '../ModalWindow'
import { StyledEditing } from './style'

export interface EditTaskTitle {
    taskTitle: string
}

export interface EditTaskDescription {
    taskDescription: string
}

export interface EditingProps {
    isOpen: boolean
    onCancel: () => void
    title: string
    onEdit: () => void
    placeholder: string
    // onSubmit: (editTaskTitle: EditTaskTitle) => void
}

const Editing = ({
    isOpen,
    onCancel,
    title,
    placeholder = 'Edit a task...',
}: // onSubmit,
EditingProps) => {
    const [editTaskTitle, setEditTaskTitle] = useState<EditTaskTitle>({
        taskTitle: '',
    })

    return (
        <ModalWindow isOpen={isOpen} onCancel={onCancel} title={title}>
            <StyledEditing
                value={editTaskTitle.taskTitle}
                type='text'
                onChange={event =>
                    setEditTaskTitle({ taskTitle: event.target.value })
                }
                placeholder={placeholder}
                // onKeyDown={() => {
                //     if (event.key === 'Enter') {
                //     }
                // }}
            />
        </ModalWindow>
    )
}

export { Editing }

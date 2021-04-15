import React, { useState } from 'react'
import { Button } from '../Button'
import { ModalWindow } from '../ModalWindow'
import {
    StyledAddTaskDescription,
    StyledAddTaskFooter,
    StyledAddTaskTitle,
} from './style'

export interface FieldsForCreateTask {
    title: string
    description: string
}

export interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: (fieldsForCreateTask: FieldsForCreateTask) => void
}

const AddTask = ({ onCancel, onSubmit, isOpen }: ModalWindowProps) => {
    const [
        fieldsForCreateTask,
        setFieldsForCreateTask,
    ] = useState<FieldsForCreateTask>({ title: '', description: '' })

    return (
        <ModalWindow
            footer={
                <StyledAddTaskFooter>
                    <Button
                        backgroundColor={'#EAEAEA'}
                        onClick={() => {
                            onCancel()
                            setFieldsForCreateTask({
                                title: '',
                                description: '',
                            })
                        }}
                        text={'Cancel'}
                    />
                    <Button
                        backgroundColor={'rgb(206, 249, 198)'}
                        onClick={() => {
                            if (
                                fieldsForCreateTask.title.length &&
                                fieldsForCreateTask.description.length
                            ) {
                                onSubmit(fieldsForCreateTask)
                                setFieldsForCreateTask({
                                    title: '',
                                    description: '',
                                })
                            }
                        }}
                        text={'Add Task'}
                    />
                </StyledAddTaskFooter>
            }
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Create a task'}
        >
            <div>
                <StyledAddTaskTitle
                    type='text'
                    placeholder={'Add a title...'}
                    value={fieldsForCreateTask.title}
                    onChange={event => {
                        setFieldsForCreateTask({
                            title: event.target.value,
                            description: fieldsForCreateTask.description,
                        })
                    }}
                />
                <StyledAddTaskDescription
                    value={fieldsForCreateTask.description}
                    placeholder={'Add a description...'}
                    onChange={event => {
                        setFieldsForCreateTask({
                            description: event.target.value,
                            title: fieldsForCreateTask.title,
                        })
                    }}
                />
            </div>
        </ModalWindow>
    )
}

export { AddTask }

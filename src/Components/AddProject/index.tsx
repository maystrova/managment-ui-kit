import React, { useState } from 'react'
import { Button } from '../Button'
import { ModalWindow } from '../ModalWindow'
import { StyledAddModalFooter, StyledAddModalTitle } from './style'

export interface FieldsForCreateProject {
    title: string
}

export interface AddProjectProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: (
        fieldsForCreateProject: FieldsForCreateProject,
        id: string,
    ) => void
}

const AddProject = ({ onCancel, onSubmit, isOpen }: AddProjectProps) => {
    const [
        fieldsForAddProject,
        setFieldsForCreateProject,
    ] = useState<FieldsForCreateProject>({ title: '' })

    return (
        <ModalWindow
            footer={
                <StyledAddModalFooter>
                    <Button
                        backgroundColor={'#EAEAEA'}
                        onClick={() => {
                            onCancel()
                            setFieldsForCreateProject({ title: '' })
                        }}
                        text={'Cancel'}
                    />
                    <Button
                        backgroundColor={'rgb(206, 249, 198)'}
                        text={'Add a Project'}
                        onClick={() => {
                            onSubmit(fieldsForAddProject, 'projects')
                            setFieldsForCreateProject({ title: '' })
                        }}
                    />
                </StyledAddModalFooter>
            }
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Add a Project'}
        >
            <div>
                <StyledAddModalTitle
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            onSubmit(fieldsForAddProject, 'projects')
                            setFieldsForCreateProject({ title: '' })
                        }
                    }}
                    type='text'
                    placeholder={'Add a Project Name'}
                    value={fieldsForAddProject.title}
                    onChange={event => {
                        setFieldsForCreateProject({
                            title: event.target.value,
                        })
                    }}
                />
            </div>
        </ModalWindow>
    )
}

export { AddProject }

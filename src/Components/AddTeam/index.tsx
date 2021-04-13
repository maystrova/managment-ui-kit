import React, { useState } from 'react'
import { Button } from '../Button'
import { ModalWindow } from '../ModalWindow'
import { StyledAddModalFooter, StyledAddModalTitle } from '../AddProject/style'

export interface FieldsForCreateTeam {
    title: string
}

export interface AddTeamsProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: (fieldsForCreateTeam: FieldsForCreateTeam, id: string) => void
}

const AddTeam = ({ isOpen, onCancel, onSubmit }: AddTeamsProps) => {
    const [
        fieldsForCreateTeam,
        setFieldsForCreateTeam,
    ] = useState<FieldsForCreateTeam>({ title: '' })

    return (
        <ModalWindow
            footer={
                <StyledAddModalFooter>
                    <Button
                        backgroundColor={'#EAEAEA'}
                        onClick={() => {
                            onCancel()
                            setFieldsForCreateTeam({ title: '' })
                        }}
                        text={'Cancel'}
                    />
                    <Button
                        backgroundColor={'rgb(206, 249, 198)'}
                        text={'Add a Team'}
                        onClick={() => {
                            onSubmit(fieldsForCreateTeam, 'teams')
                            setFieldsForCreateTeam({ title: '' })
                        }}
                    />
                </StyledAddModalFooter>
            }
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Add your Team!'}
        >
            <div>
                <StyledAddModalTitle
                    type='text'
                    placeholder='Add a Team name'
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            onSubmit(fieldsForCreateTeam, 'teams')
                            setFieldsForCreateTeam({ title: '' })
                        }
                    }}
                    value={fieldsForCreateTeam.title}
                    onChange={event => {
                        setFieldsForCreateTeam({ title: event.target.value })
                    }}
                />
            </div>
        </ModalWindow>
    )
}

export { AddTeam }

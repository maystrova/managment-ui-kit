import React, { useState } from 'react'
import './style.scss'
import { Button } from '../Button'
import { ModalWindow } from '../ModalWindow'

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
                <div className='AddTeam__ModalFooter'>
                    <Button
                        backgroundColor={'#EAEAEA'}
                        onClick={onCancel}
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
                </div>
            }
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Add your Team!'}
        >
            <div className='AddTeam__ModalBody'>
                <input
                    className='AddTeam__AddTitle'
                    type='text'
                    placeholder='Add a Team name'
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            onSubmit(fieldsForCreateTeam, 'teams')
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

import React, { useState } from 'react'
import { ModalWindow } from '../ModalWindow'

export interface AddFileProps {
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
}

const AddFile = ({ isOpen, onCancel, onSubmit }: AddFileProps) => {
    return (
        <ModalWindow
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Add a File'}
            children={''}
            footer={''}
        />
    )
}

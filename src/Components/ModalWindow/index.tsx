import React from 'react'
import {
    StyledModal,
    StyledModalBody,
    StyledModalClose,
    StyledModalHeader,
    StyledModalOverlay,
    StyledModalTitle,
    StyledModalWindow,
} from './style'
import { Icon, ICON_SIZE } from '../Icon'
import cancel from './cancel.png'

export interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    title: string
    children: React.ReactChild | React.ReactChildren
    footer?: React.ReactChild | React.ReactChildren
}

const ModalWindow = ({
    isOpen,
    onCancel,
    title,
    children,
    footer,
}: ModalWindowProps) => {
    if (!isOpen) return null

    return (
        <StyledModal>
            <StyledModalOverlay onClick={onCancel}></StyledModalOverlay>
            <StyledModalWindow>
                <StyledModalHeader>
                    <StyledModalTitle>{title}</StyledModalTitle>
                    <StyledModalClose onClick={onCancel}>
                        <Icon size={ICON_SIZE.MEDIUM} src={cancel} />
                    </StyledModalClose>
                </StyledModalHeader>
                <StyledModalBody>{children}</StyledModalBody>
                <footer>{footer}</footer>
            </StyledModalWindow>
        </StyledModal>
    )
}

export { ModalWindow }

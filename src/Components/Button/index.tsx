import React from 'react'
import { StyledButton } from './style'

enum BUTTON_SIZE {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface ButtonProps {
    backgroundColor?: string
    color?: string
    text: string
    size?: BUTTON_SIZE
    onClick?: () => void
}

const Button = ({
    backgroundColor,
    color,
    text,
    size = BUTTON_SIZE.MEDIUM,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton
            size={size}
            onClick={onClick}
            style={{ backgroundColor: backgroundColor, color: color }}
        >
            {text}
        </StyledButton>
    )
}

export { Button, BUTTON_SIZE }

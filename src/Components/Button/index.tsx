import React from "react";
import './style.css'

interface ButtonProps {
    backgroundColor?: string,
    color?: string,
    text: string
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

const Button = ({backgroundColor, color, text, size, onClick}: ButtonProps) => {
    return (
        <button className={`Button Button_${size}`} onClick={onClick} style={{backgroundColor: backgroundColor, color: color}}>{text}</button>
    )
}

export {Button}
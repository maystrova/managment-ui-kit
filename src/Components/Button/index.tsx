import React from "react";
import './style.css'

interface ButtonProps {
    backgroundColor?: string,
    color?: string,
    text: string
    size?: 'small' | 'medium' | 'large'
}

const Button = ({backgroundColor, color, text, size}: ButtonProps) => {
    return (
        <button className={`Button Button_${size}`} style={{backgroundColor: backgroundColor, color: color}}>{text}</button>
    )
}

export {Button}
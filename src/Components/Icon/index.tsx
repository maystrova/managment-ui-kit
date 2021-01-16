import React from 'react'
import './style.css'
import {HeaderType} from "../Header/types";

interface IconProps {
    size: 'small' | 'large'
    alt?: string
    src: string
}

const Icon = ( {size, alt = 'icon', src}: IconProps ) => {
    return (
        <div>
            <img className={`Icon Icon__${size}`} src={src} alt={alt}/>
        </div>
    )
}

export {Icon}
import React from "react";
import './style.css'

interface AvatarProps {
    size: 'x-small' | 'small' | 'medium' | 'large'
    href?: string
    src: string
    alt?: string
}

const Avatar = ({size, href = "#", alt = 'userpic', src}: AvatarProps) => {
    return (
        <a className={`Avatar Avatar_${size}`} href={href}><img src={src} alt={alt}/></a>
    )
}

export {Avatar}
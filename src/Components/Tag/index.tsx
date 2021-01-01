import React from "react";
import './style.css';

interface TagProps {
    href?: string
    text: string
    type: 'development' | 'marketing' | 'design'
}

const Tag = ({type, text, href = '#'}: TagProps) => {
    return (
        <a className={`Tag Tag_${type}`} href={href} >{text}</a>
    )
}

export {Tag}
import React from "react";
import './style.css';

export type TagType = 'development' | 'marketing' | 'design'

interface TagProps {
    href?: string
    text: string
    type: TagType
}

const Tag = ({type, text, href = '#'}: TagProps) => {
    return (
        <a className={`Tag Tag_${type}`} href={href} >{text}</a>
    )
}

export {Tag}
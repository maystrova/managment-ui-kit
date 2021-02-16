import React from 'react'
import { StyledTag } from './style'

enum TAG_TYPE {
    DEVELOPMENT = 'development',
    MARKETING = 'marketing',
    DESIGN = 'design',
}

interface TagProps {
    href?: string
    text: string
    type: TAG_TYPE
}

const Tag = ({ type, text, href = '#' }: TagProps) => {
    return (
        <StyledTag type={type} href={href}>
            {text}
        </StyledTag>
    )
}

export { Tag, TAG_TYPE }

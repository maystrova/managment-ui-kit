import React from 'react'
import { StyledIcon } from './style'

enum ICON_SIZE {
    X_SMALL = 'x-small',
    SMALL = 'small',
    LARGE = 'large',
}

interface IconProps {
    size: ICON_SIZE
    alt?: string
    src: string
}

const Icon = ({ size, alt = 'icon', src }: IconProps) => {
    return (
        <div>
            <StyledIcon size={size} src={src} alt={alt} />
        </div>
    )
}

export { Icon, ICON_SIZE }

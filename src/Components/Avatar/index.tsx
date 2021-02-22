import React from 'react'
import { StyledAvatar, StyledAvatarImage } from './style'

enum AVATAR_SIZE {
    X_SMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface AvatarProps {
    size: AVATAR_SIZE
    href?: string
    src: string
    alt?: string
    id?: string
}

const Avatar = ({
    size,
    href = '#',
    alt = 'userpic',
    src,
    id,
}: AvatarProps) => {
    return (
        <StyledAvatar size={size} href={href}>
            <StyledAvatarImage src={src} alt={alt} />
        </StyledAvatar>
    )
}

export { Avatar, AVATAR_SIZE }

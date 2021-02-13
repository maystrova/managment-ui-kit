import styled, { css } from 'styled-components'
import { AVATAR_SIZE } from './index'

interface StyledAvatarProps {
    size: AVATAR_SIZE
}

const StyledAvatar = styled.a`
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;

    &:hover {
        opacity: 80%;
    }

    ${(props: StyledAvatarProps) =>
        props.size === AVATAR_SIZE.X_SMALL &&
        css`
            width: 20px;
            height: 20px;
        `}

    ${(props: StyledAvatarProps) =>
        props.size === AVATAR_SIZE.SMALL &&
        css`
            width: 30px;
            height: 30px;
        `}
    
    ${(props: StyledAvatarProps) =>
        props.size === AVATAR_SIZE.MEDIUM &&
        css`
            width: 20px;
            height: 20px;
        `}
    
    ${(props: StyledAvatarProps) =>
        props.size === AVATAR_SIZE.LARGE &&
        css`
            width: 48px;
            height: 48px;
        `}
`

const StyledAvatarImage = styled.img`
    display: block;
    width: 100%;
`

export { StyledAvatar, StyledAvatarImage }

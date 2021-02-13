import styled, { css } from 'styled-components'
import { ICON_SIZE } from './index'

interface StyledIconProps {
    size: ICON_SIZE
}

const StyledIcon = styled.img`
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.X_SMALL &&
        css`
            width: 16px;
            height: 16px;
        `}

    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.SMALL &&
        css`
            width: 20px;
            height: 20px;
        `}
    
    ${(props: StyledIconProps) =>
        props.size === ICON_SIZE.LARGE &&
        css`
            width: 40px;
            height: 40px;
        `}
`

export { StyledIcon }

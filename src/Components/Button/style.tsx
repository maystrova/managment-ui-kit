import styled, { css } from 'styled-components'
import { BUTTON_SIZE } from './index'

interface StyledButtonProps {
    size: BUTTON_SIZE
}

const StyledButton = styled.button`
    padding: 0 15px;
    border-radius: 12px;
    border: none;
    height: 30px;
    background-color: #eaeaea;
    color: black;
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 80%;
    }

    ${(props: StyledButtonProps) =>
        props.size === BUTTON_SIZE.SMALL &&
        css`
            color: #ff1000;
            background: transparent;
            height: auto;
        `}

    ${(props: StyledButtonProps) =>
        props.size === BUTTON_SIZE.LARGE &&
        css`
            padding: 0 20px;
            border-radius: 16px;
        `}
`

export { StyledButton }

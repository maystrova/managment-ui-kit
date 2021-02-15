import styled, { css } from 'styled-components'
import { TAG_TYPE } from './index'

export interface StyledTagProps {
    type: TAG_TYPE
}

const StyledTag = styled.a`
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 10px;
    display: inline-block;
    height: 24px;
    padding: 0 10px;
    line-height: 24px;
    text-decoration: none;

    ${(props: StyledTagProps) =>
        props.type === TAG_TYPE.DEVELOPMENT &&
        css`
            background-color: #fff1e2;
            color: #ed6400;
        `}

    ${(props: StyledTagProps) =>
        props.type === TAG_TYPE.DESIGN &&
        css`
            background-color: #e3efff;
            color: #1975d0;
        `}
    
    ${(props: StyledTagProps) =>
        props.type === TAG_TYPE.MARKETING &&
        css`
            background-color: #f5f0ff;
            color: #764ced;
        `}
`

export { StyledTag, TAG_TYPE }

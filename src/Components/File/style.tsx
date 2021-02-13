import styled, { css } from 'styled-components'

const StyledFile = styled.div`
    margin-right: 30px;
    display: flex;
    align-items: center;
`

const StyledFilePreview = styled.div`
    display: inline-flex;
    margin-right: 10px;
`
const StyledFileSizeInfo = styled.span`
    text-transform: uppercase;
    opacity: 70%;
    font-weight: 100;
`

export { StyledFile, StyledFilePreview, StyledFileSizeInfo }
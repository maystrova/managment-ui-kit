import styled from 'styled-components'

const StyledFile = styled.div`
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
`

export { StyledFile, StyledFilePreview, StyledFileSizeInfo }

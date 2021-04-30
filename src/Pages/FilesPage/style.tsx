import styled from 'styled-components'

const StyledFilesPage = styled.div`
    background-color: white;
    border-radius: 8px;
    color: #131313;
`

const StyledFilesPageHeader = styled.div`
    opacity: 50%;
`

const StyledFilesPageItems = styled.div`
    border-bottom: 1px solid #ececec;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 82px;
    text-align: center;
    align-items: center;

    & button {
        cursor: pointer;
        border: none;
        outline: none;
    }
`

export { StyledFilesPage, StyledFilesPageHeader, StyledFilesPageItems }

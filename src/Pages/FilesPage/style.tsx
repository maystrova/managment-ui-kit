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
`

const StyledFilesPageRow = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0;
    text-align: center;
    grid-template-rows: 82px;
    align-items: center;
`

export {
    StyledFilesPage,
    StyledFilesPageHeader,
    StyledFilesPageRow,
    StyledFilesPageItems,
}

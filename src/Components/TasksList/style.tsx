import styled from 'styled-components'

const StyledTasksList = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 0 20px 20px 0;
    width: 463px;
    border-radius: 6px;
`

const StyledTasksListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const StyledTaskListHeaderTitle = styled.h2`
    margin: 10px 0;
`

export { StyledTasksList, StyledTasksListHeader, StyledTaskListHeaderTitle }

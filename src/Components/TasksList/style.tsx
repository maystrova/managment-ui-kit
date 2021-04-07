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

const StyledLoading = styled.div`
    padding: 20px;
`

export {
    StyledTasksList,
    StyledTasksListHeader,
    StyledTaskListHeaderTitle,
    StyledLoading,
}

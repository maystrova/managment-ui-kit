import styled from 'styled-components'

const StyledTaskListWrapper = styled.div`
    position: relative;
`

const StyledTasksList = styled.div`
    background-color: #fff;
    padding: 20px;
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
    position: absolute;
    left: 0;
    top: 0;
    right: 20px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255 255 255 / 50%);
    z-index: 9;
`

export {
    StyledTasksList,
    StyledTasksListHeader,
    StyledTaskListHeaderTitle,
    StyledLoading,
    StyledTaskListWrapper,
}

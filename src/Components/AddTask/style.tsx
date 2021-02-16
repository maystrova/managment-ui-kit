import styled from 'styled-components'

const StyledAddTaskDescription = styled.input`
    height: 100px;
    width: 95%;
    border: none;
    background-color: #eaeaea;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
`

const StyledAddTaskTitle = styled.input`
    width: 95%;
    border: none;
    background-color: #eaeaea;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
`

const StyledAddTaskFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

export { StyledAddTaskDescription, StyledAddTaskFooter, StyledAddTaskTitle }

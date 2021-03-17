import styled from 'styled-components'

const StyledAddTaskTitle = styled.input`
    width: 100%;
    border: none;
    background-color: #eaeaea;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
`

const StyledAddTaskDescription = styled.textarea`
    width: 100%;
    border: none;
    background-color: #eaeaea;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
    resize: none;
`

const StyledAddTaskFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

export { StyledAddTaskTitle, StyledAddTaskFooter, StyledAddTaskDescription }

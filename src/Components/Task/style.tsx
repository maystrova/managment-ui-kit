import styled from 'styled-components'

const StyledTask = styled.div`
    background-color: #ffffff;
    border-radius: 6px;
    padding: 30px;
    line-height: 1.5;
`

const StyledTaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
`

const StyledTaskInformation = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin-bottom: 40px;
    padding-bottom: 40px;
`

const StyledTaskUser = styled.div`
    display: flex;
    align-items: center;
`

const StyledTaskUserName = styled.span`
    margin-left: 5px;
`

const StyledTaskTitle = styled.h4`
    text-transform: uppercase;
    padding-bottom: 20px;
`

const StyledTaskDescription = styled.div`
    border-bottom: 1px solid #ececec;
    margin-bottom: 40px;
    padding-bottom: 40px;
`

const StyledTaskDescriptionText = styled.p`
    padding-bottom: 30px;
`

const StyledTaskFiles = styled.div`
    display: flex;
`

export {
    StyledTask,
    StyledTaskHeader,
    StyledTaskInformation,
    StyledTaskUser,
    StyledTaskUserName,
    StyledTaskTitle,
    StyledTaskDescription,
    StyledTaskDescriptionText,
    StyledTaskFiles,
}

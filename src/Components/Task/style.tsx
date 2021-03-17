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

const StyledTaskHeaderTitle = styled.h2`
    margin: 0;
    cursor: pointer;
`

const StyledTaskInformation = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin-bottom: 30px;
    padding-bottom: 30px;
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
`

const StyledTaskDescription = styled.div`
    border-bottom: 1px solid #ececec;
    margin-bottom: 40px;
    padding-bottom: 40px;
`

const StyledTaskDescriptionText = styled.p`
    padding-bottom: 30px;
    cursor: pointer;
`

const StyledTaskFiles = styled.div`
    display: flex;
`

const StyledEdit = styled.div``

const StyledEditTitleForm = styled.input`
    padding: 5px 12px;
    line-height: 20px;
    vertical-align: middle;
    outline: none;
    border: 2px solid #eaeaea;
    border-radius: 6px;
    font-size: 20px;
    margin-right: 20px;
`

const StyledEditDescriptionForm = styled.textarea`
    padding: 5px 12px;
    line-height: 20px;
    vertical-align: middle;
    outline: none;
    border: 2px solid #eaeaea;
    border-radius: 6px;
    font-size: 15px;
    margin-right: 20px;
    resize: none;
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
    StyledTaskHeaderTitle,
    StyledEditTitleForm,
    StyledEdit,
    StyledEditDescriptionForm,
}

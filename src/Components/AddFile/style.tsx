import styled from 'styled-components'

const StyledAddFile = styled.div`
    height: 250px;
    border: 4px dashed grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: grey;
`

const StyledAddFileFooter = styled.div`
    text-align: center;
`

const StyledUploadFileButton = styled.button`
    text-transform: uppercase;
    color: #ffc200;
    background: black;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    cursor: pointer;
`

const StyledChooseFile = styled.input``

export {
    StyledAddFile,
    StyledAddFileFooter,
    StyledUploadFileButton,
    StyledChooseFile,
}

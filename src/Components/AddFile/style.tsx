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

const StyledChooseFile = styled.label`
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        top: 0;
        left: 0;
        //height: 25px;
        //width: 25px;
        //pointer-events: none;
    }
`

export {
    StyledAddFile,
    StyledAddFileFooter,
    StyledUploadFileButton,
    StyledChooseFile,
}

import styled from 'styled-components'

const StyledFileRowPreview = styled.div`
    & img {
        width: 40px;
    }
`

const StyledFileRowUploadedBy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledFileRowActions = styled.div`
    position: relative;
`

const StyledFileRowActionsButton = styled.button`
    width: 99px;
    height: 40px;
    border-radius: 20px;
    background: #eaeaea;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & span {
        font-weight: 600;
        margin-right: 5px;
    }
`

const StyledFileRowDeleteFileButton = styled.div`
    position: absolute;
    bottom: -25px;
    left: 10px;
`

const StyledFileRowDownload = styled.button`
    background: none;
`

export {
    StyledFileRowPreview,
    StyledFileRowUploadedBy,
    StyledFileRowActionsButton,
    StyledFileRowDownload,
    StyledFileRowDeleteFileButton,
    StyledFileRowActions,
}

import styled from 'styled-components'

const StyledModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 1;
`

const StyledModalWindow = styled.div`
    width: 600px;
    border-radius: 5px;
    background: #fff;
    z-index: 1;
    position: relative;
    padding: 20px;
`

const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

const StyledModalBody = styled.div`
    margin-bottom: 20px;
`

const StyledModalTitle = styled.div`
    font-size: 1.5rem;
`
const StyledModalClose = styled.div`
    cursor: pointer;
`

export {
    StyledModalBody,
    StyledModalHeader,
    StyledModalOverlay,
    StyledModal,
    StyledModalWindow,
    StyledModalClose,
    StyledModalTitle,
}

import styled from 'styled-components'

const StyledUser = styled.div`
    background-color: #202020;
    align-items: center;
    padding: 15px;
    margin-bottom: 20px;
`

const StyledUserInformation = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const StyledUserAvatar = styled.div`
    margin-right: 10px;
`

const StyledUserEmail = styled.div`
    font-size: 13px;
    color: grey;
`
const StyledLogOut = styled.div`
    display: flex;
    justify-content: center;
`
const StyledButtonLogout = styled.button`
    outline: none;
    cursor: pointer;
    color: white;
    background: none;
    border: none;
`

export {
    StyledUser,
    StyledUserInformation,
    StyledUserAvatar,
    StyledUserEmail,
    StyledButtonLogout,
    StyledLogOut,
}

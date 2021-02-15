import styled, { css } from 'styled-components'

const StyledUser = styled.div`
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 100;
    padding: 15px;
    margin-bottom: 20px;
`

const StyledUserInformation = styled.div`
    display: flex;
    align-items: center;
`

const StyledUserAvatar = styled.div`
    margin-right: 10px;
`

const StyledUserProfession = styled.div`
    font-size: 13px;
    color: grey;
`

export {
    StyledUser,
    StyledUserInformation,
    StyledUserAvatar,
    StyledUserProfession,
}

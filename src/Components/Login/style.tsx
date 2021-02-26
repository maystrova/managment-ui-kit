import styled from 'styled-components'

const StyledLogin = styled.div`
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 20px;
    height: 50px;
`

const StyledLoginButton = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    background: none;
    color: white;

    &:hover {
        opacity: 80%;
    }
`

export { StyledLogin, StyledLoginButton }

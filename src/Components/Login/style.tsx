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
    width: 60px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: #eaeaea;
    outline: none;
    cursor: pointer;

    &:hover {
        opacity: 80%;
    }
`

export { StyledLogin, StyledLoginButton }

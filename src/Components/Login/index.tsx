import React from 'react'
import { StyledLogin, StyledLoginButton } from './style'

interface LoginProps {
    onButtonClick: () => void
}

const Login = ({ onButtonClick }: LoginProps) => {
    return (
        <StyledLogin>
            <StyledLoginButton onClick={onButtonClick}>
                Log In
            </StyledLoginButton>
        </StyledLogin>
    )
}

export { Login }

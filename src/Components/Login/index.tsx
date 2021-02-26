import React from 'react'
import { StyledLogin, StyledLoginButton } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import googleIcon from '../Layout/pics/google.png'

interface LoginProps {
    onButtonClick: () => void
}

const Login = ({ onButtonClick }: LoginProps) => {
    return (
        <StyledLogin>
            <div>Log In</div>
            <StyledLoginButton onClick={onButtonClick}>
                <Icon size={ICON_SIZE.SMALL} src={googleIcon} />
            </StyledLoginButton>
        </StyledLogin>
    )
}

export { Login }

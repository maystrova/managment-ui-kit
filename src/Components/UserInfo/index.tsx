import React from 'react'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import {
    StyledUser,
    StyledUserAvatar,
    StyledUserInformation,
    StyledUserEmail,
    StyledButtonLogout,
    StyledLogOut,
} from './style'

export interface UserInfoProps {
    avatar: string
    name: string
    email: string
    onButtonClick: () => void
}

const UserInfo = ({ avatar, name, email, onButtonClick }: UserInfoProps) => {
    return (
        <StyledUser>
            <StyledUserInformation>
                <StyledUserAvatar>
                    <Avatar size={AVATAR_SIZE.LARGE} src={avatar} />
                </StyledUserAvatar>
                <div>
                    <div>{name}</div>
                    <StyledUserEmail>{email}</StyledUserEmail>
                </div>
            </StyledUserInformation>
            <StyledLogOut>
                <StyledButtonLogout onClick={onButtonClick}>
                    Log Out
                </StyledButtonLogout>
            </StyledLogOut>
        </StyledUser>
    )
}

export { UserInfo }

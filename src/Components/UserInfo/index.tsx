import React from 'react'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Icon, ICON_SIZE } from '../Icon'
import dotsIcon from '../Layout/pics/dots.svg'
import {
    StyledUser,
    StyledUserAvatar,
    StyledUserInformation,
    StyledUserProfession,
} from './style'

interface UserInfoProps {
    avatar: string
    name: string
    profession: string
}

const UserInfo = ({ avatar, name, profession }: UserInfoProps) => {
    return (
        <StyledUser>
            <StyledUserInformation>
                <StyledUserAvatar>
                    <Avatar size={AVATAR_SIZE.LARGE} src={avatar} />
                </StyledUserAvatar>
                <div>
                    <div>{name}</div>
                    <StyledUserProfession>{profession}</StyledUserProfession>
                </div>
            </StyledUserInformation>
            <div>
                <a href='#'>
                    <Icon size={ICON_SIZE.SMALL} src={dotsIcon} />
                </a>
            </div>
        </StyledUser>
    )
}

export { UserInfo }

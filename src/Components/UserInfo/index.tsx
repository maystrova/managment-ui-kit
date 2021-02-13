import React from 'react'
import './style.scss'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Icon, ICON_SIZE } from '../Icon'
import dotsIcon from '../Layout/pics/dots.svg'

interface UserInfoProps {
    avatar: string
    name: string
    profession: string
}

const UserInfo = ({ avatar, name, profession }: UserInfoProps) => {
    return (
        <div className='UserInfo'>
            <div className='UserInfo__Information'>
                <div className='UserInfo__Avatar'>
                    <Avatar size={AVATAR_SIZE.LARGE} src={avatar} />
                </div>
                <div className='UserInfo__Information-person'>
                    <div className='UserInfo__Information-name'>{name}</div>
                    <div className='UserInfo__Information-profession'>
                        {profession}
                    </div>
                </div>
            </div>
            <div className='UserInfo__More'>
                <a href='#'>
                    <Icon size={ICON_SIZE.SMALL} src={dotsIcon} />
                </a>
            </div>
        </div>
    )
}

export { UserInfo }

import React from 'react'
import './style.css'
import {Avatar} from "../Avatar";
import {Icon} from "../Icon";
import dotsIcon from '../Layout/pics/dots.svg'

interface UserInfoProps {
    avatar: string
    name: string
    profession: string
}

const UserInfo = ({avatar, name, profession}: UserInfoProps) => {
    return (
        <div className='UserInfo'>
            <div className='UserInfo__information'>
                <div className='UserInfo__avatar'>
                    <Avatar size={"large"} src={avatar}/>
                </div>
                <div className='UserInfo__information-person'>
                    <div className='UserInfo__information-name'>{name}</div>
                    <div className='UserInfo__information-profession'>{profession}</div>
                </div>
            </div>
            <div className='UserInfo__more'>
                <a href="#">
                    <Icon size={"small"} src={dotsIcon}/>
                </a>
            </div>
        </div>
    )
}

export {UserInfo}
import React from 'react'
import './style.css'
import {Avatar} from "../Avatar";
import {Icon} from "../Icon";

interface UserInfoProps {
    avatar: string
    name: string
    profession: string
    more: string
}

const UserInfo = ({avatar, name, profession, more}: UserInfoProps) => {
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
                    <Icon size={"small"} src={more}/>
                </a>
            </div>
        </div>
    )
}

export {UserInfo}
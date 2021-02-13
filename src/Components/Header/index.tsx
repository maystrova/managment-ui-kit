import React from 'react'
import './style.scss'
import { Button } from '../Button'
import { Icon, ICON_SIZE } from '../Icon'
import { Avatar, AVATAR_SIZE } from '../Avatar'

export interface HeaderProps {
    creators: string[]
    icon: string
    title: string
    menu: string[]
    onShareWindowOpen: () => void
}

const Header = ({
    creators,
    icon,
    menu,
    title,
    onShareWindowOpen,
}: HeaderProps) => {
    return (
        <header className='Header'>
            <div className='Header__TitleRow'>
                <div className='Header__TitleRow-main'>
                    <Icon size={ICON_SIZE.LARGE} src={icon} />
                    <h1 className='Header__TitleRow-title'>{title}</h1>
                </div>
                <div className='Header__TitleRow-socialMedia'>
                    {creators.map(creator => (
                        <div className='Header__titleRow-socialMedia-avatar'>
                            <Avatar size={AVATAR_SIZE.SMALL} src={creator} />
                        </div>
                    ))}
                    <div className='Header__TitleRow-socialMedia-buttons'>
                        <div className='Header__TitleRow-socialMedia-button'>
                            <Button onClick={onShareWindowOpen} text='Share' />
                        </div>
                        <div className='Header__TitleRow-socialMedia-button'>
                            <Button
                                backgroundColor='#FFF8DD'
                                color='#FFC200'
                                text='💬 Chat'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Header__Menu'>
                {menu.map(item => (
                    <a className='Header__Menu-item' href='#'>
                        {item}
                    </a>
                ))}
            </div>
        </header>
    )
}

export { Header }

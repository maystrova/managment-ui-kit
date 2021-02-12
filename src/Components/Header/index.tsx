import React from "react";
import './style.css'
import {Button} from "../Button";
import {Icon} from "../Icon";
import {Avatar} from "../Avatar";
import {HeaderType} from './types'

 export interface HeaderProps {
    creators: string[]
    icon: string
    title: string
    menu: string[]
    onShareWindowOpen: () => void
}

const Header = ({creators, icon, menu, title, onShareWindowOpen}: HeaderProps) => {
    return (
        <header className="Header">
            <div className='Header__titleRow'>
                <div className="Header__titleRow-title">
                    <Icon size={"large"} src={icon}/>
                    <h1>{title}</h1>
                </div>
                <div className="Header__titleRow-socialMedia">
                    {creators.map((creator) => <div className='Header__titleRow-socialMedia-avatar'><Avatar
                        size={"small"} src={creator}/></div>)}
                    <div className="Header__titleRow-socialMedia-buttons">
                        <div className='Header__titleRow-socialMedia-button'>
                            <Button onClick={onShareWindowOpen} text="Share"/>
                        </div>
                        <div className='Header__titleRow-socialMedia-button'>
                            <Button backgroundColor="#FFF8DD" color="#FFC200" text="💬 Chat"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header__menu">
                {menu.map((item) => <a className='Header__menu-item' href="#">{item}</a>)}
            </div>
        </header>
    )
}

export {Header}
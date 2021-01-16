import React from "react";
import './style.css'
import {Button} from "../Button";
import {Icon} from "../Icon";
import projectIcon from '../Layout/pics/navigation-icon.svg'
import userAvatar2 from '../Layout/pics/userpic2.png'
import {Avatar} from "../Avatar";
import {HeaderType} from './types'

interface HeaderProps {
    header: HeaderType
}

const Header = ({header}: HeaderProps) => {
    return (
        <header className="Header">
            <div className='Header__titleRow'>
                <div className="Header__titleRow-title">
                    <Icon size={"large"} src={header.icon}/>
                    <h1>{header.title}</h1>
                </div>
                <div className="Header__titleRow-socialMedia">
                    {header.creators.map((creator) => <div className='Header__titleRow-socialMedia-avatar'><Avatar
                        size={"small"} src={creator}/></div>)}
                    <div className="Header__titleRow-socialMedia-buttons">
                        <div className='Header__titleRow-socialMedia-button'>
                            <Button text="Share"/>
                        </div>
                        <div className='Header__titleRow-socialMedia-button'>
                            <Button backgroundColor="#FFF8DD" color="#FFC200" text="💬 Chat"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header__menu">
                {header.menu.map((item) => <a className='Header__menu-item' href="#">{item}</a>)}
            </div>
        </header>
    )
}

export {Header}
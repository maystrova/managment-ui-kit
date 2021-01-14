import React from "react";
import './style.css'
import {Button} from "../Button";
import {Icon} from "../Icon";
import projectIcon from '../Layout/pics/navigation-icon.svg'
import userAvatar2 from '../Layout/pics/userpic2.png'
import {Avatar} from "../Avatar";

interface HeaderProps {
    icon: string
}

const Header = ({icon}: HeaderProps) => {
    return (
        <header className="Header">
            <div className='Header__titleRow'>
                <div className="Header__titleRow-title">
                <Icon size={"large"} src={icon}/>
                <h1>Website Redesign</h1>
                </div>
                <div className="Header__titleRow-socialMedia">
                  <Avatar size={"small"} src={userAvatar2}/>
                    <div className="Header__titleRow-buttons">
                        <Button text="Share"/>
                        <Button backgroundColor="#FFF8DD" color="#FFC200" text="💬 Chat"/>
                    </div>
                </div>
            </div>
            <div className="Header__menu">
                <a href="">Tasks</a>
                <a href="">Kanban</a>
                <a href="">Activity</a>
                <a href="">Calendar</a>
                <a href="">Files</a>
            </div>
        </header>
    )
}

export {Header}
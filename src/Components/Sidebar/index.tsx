import React from "react";
import './style.css'
import {List} from "../List";
import {UserInfo} from "../UserInfo";
import {Icon} from "../Icon";

import ownerAvatar from "../Layout/pics/userpic.svg";


interface SidebarProps {
    icon: string
    title: string
    search: string
}

const Sidebar = ({icon, title, search}: SidebarProps) => {
    return <aside className="Sidebar">
        <header className='Sidebar__header'>
            <div className='Sidebar__header-title'>
                <div className='Sidebar__header-icon'>
                    <Icon size={"small"} src={icon}/>
                </div>
                <h3>{title}</h3>
            </div>
        <Icon size={"x-small"} src={search}/>
        </header>
        <UserInfo avatar={ownerAvatar} name={'Emilee Simchenko'} profession={'Product Owner'}/>
        <List title={'Menu'} items={[{title:'Home'}, {title: 'My Tasks'}, {title: 'Notifications', count: '3'}]}/>

        <div className="Sidebar__footer">
            <span><a className='Sidebar__footer-link' href="#">Invite your team</a> and start collaborating!</span>
        </div>
    </aside>
}

export {Sidebar}
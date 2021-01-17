import React from "react";
import './style.css'
import {List} from "../List";
import ownerAvatar from "../Layout/pics/userpic.svg";
import {UserInfo} from "../UserInfo";
import {Icon} from "../Icon";
import {ListType} from "../List/types";

interface SidebarProps {
    icon: string
    title: string
    search: string
    invitation: string
    text: string
}

const Sidebar = ({icon, title, search, invitation, text}: SidebarProps) => {
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
        <List title={'Menu'} items={['Home', 'My Tasks', 'Notifications' ]}/>

        <div className="Sidebar__footer">
            <a className='Sidebar__footer-link' href="#">{invitation}</a>{text}
        </div>
    </aside>
}

export {Sidebar}
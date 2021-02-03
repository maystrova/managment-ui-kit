import React from "react";
import './style.css'
import {List} from "../List";
import {UserInfo} from "../UserInfo";
import {Icon} from "../Icon";
import ownerAvatar from "../Layout/pics/userpic.svg";
import {ListType} from "../List/types";
import {Statistics} from "../Statistics";
import {StatisticsProps} from "../Statistics";
import searchIcon from '../Layout/pics/search-icon.svg'



interface SidebarProps {
    icon: string
    title: string
    search: string
    lists: ListType[]
    statistics: StatisticsProps
}

const Sidebar = ({icon, title, search, lists, statistics}: SidebarProps) => {
    return <aside className="Sidebar">
        <header className='Sidebar__header'>
            <div className='Sidebar__header-title'>
                <div className='Sidebar__header-icon'>
                    <Icon size={"small"} src={icon}/>
                </div>
                <h3>{title}</h3>
            </div>
            <div className='Sidebar__header-search'>
                <button>
        <Icon size={"x-small"} src={searchIcon}/>
                </button>
            </div>
        </header>
        <UserInfo avatar={ownerAvatar} name={'Emilee Simchenko'} profession={'Product Owner'}/>
        <Statistics completed={statistics.completed} opened={statistics.opened}/>
        {lists.map( (list) => ( <List title={list.title} items={list.items} addition={list.addition} key={list.title} />))}

        <div className="Sidebar__footer">
            <span><a className='Sidebar__footer-link' href="#">Invite your team</a> and start collaborating!</span>
        </div>
    </aside>
}

export {Sidebar}
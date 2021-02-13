import React from 'react'
import './style.scss'
import { List } from '../List'
import { UserInfo } from '../UserInfo'
import { Icon, ICON_SIZE } from '../Icon'
import ownerAvatar from '../Layout/pics/userpic.svg'
import { ListType } from '../List/types'
import { Statistics, StatisticsProps } from '../Statistics'
import searchIcon from '../Layout/pics/search-icon.svg'
import { SIDEBAR_LIST } from '../Layout/tasks'

interface SidebarProps {
    icon: string
    title: string
    search: string
    lists: ListType[]
    statistics: StatisticsProps
    onItemAddClick: (listId: SIDEBAR_LIST) => void
}

const Sidebar = ({
    icon,
    title,
    search,
    lists,
    statistics,
    onItemAddClick,
}: SidebarProps) => {
    return (
        <aside className='Sidebar'>
            <header className='Sidebar__Header'>
                <div className='Sidebar__Header-title'>
                    <div className='Sidebar__Header-icon'>
                        <Icon size={ICON_SIZE.SMALL} src={icon} />
                    </div>
                    <h3>{title}</h3>
                </div>
                <div className='Sidebar__Header-search'>
                    <Icon size={ICON_SIZE.X_SMALL} src={searchIcon} />
                </div>
            </header>
            <UserInfo
                avatar={ownerAvatar}
                name={'Emilee Simchenko'}
                profession={'Product Owner'}
            />
            <Statistics
                completed={statistics.completed}
                opened={statistics.opened}
            />
            {lists.map(list => (
                <List
                    id={list.id}
                    onAdditionalClick={() => {
                        onItemAddClick(list.id)
                    }}
                    title={list.title}
                    items={list.items}
                    addition={list.addition}
                    key={list.title}
                />
            ))}

            <div className='Sidebar__Footer'>
                <span>
                    <a className='Sidebar__Footer-link' href='#'>
                        Invite your team
                    </a>{' '}
                    and start collaborating!
                </span>
            </div>
        </aside>
    )
}

export { Sidebar }

import React from 'react'
import { List } from '../List'
import { UserInfo } from '../UserInfo'
import { Icon, ICON_SIZE } from '../Icon'
import ownerAvatar from '../Layout/pics/userpic.svg'
import { ListType } from '../List/types'
import { Statistics, StatisticsProps } from '../Statistics'
import searchIcon from '../Layout/pics/search-icon.svg'
import { SIDEBAR_LIST } from '../Layout/tasks'
import {
    StyledSidebar,
    StyledSidebarFooter,
    StyledSidebarFooterInvite,
    StyledSidebarHeader,
    StyledSidebarHeaderMain,
    StyledSidebarHeaderTitle,
    StyledSidebarIcon,
} from './style'
import { Login } from '../Login'

interface SidebarProps {
    icon: string
    title: string
    search: string
    lists: ListType[]
    statistics: StatisticsProps
    onItemAddClick: (listId: SIDEBAR_LIST) => void
    isUserAuthorize: boolean
    onLogin: () => void
}

const Sidebar = ({
    icon,
    title,
    search,
    lists,
    statistics,
    onItemAddClick,
    isUserAuthorize,
    onLogin,
}: SidebarProps) => {
    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <StyledSidebarHeaderMain>
                    <StyledSidebarIcon>
                        <Icon size={ICON_SIZE.SMALL} src={icon} />
                    </StyledSidebarIcon>
                    <StyledSidebarHeaderTitle>{title}</StyledSidebarHeaderTitle>
                </StyledSidebarHeaderMain>
                <div>
                    <Icon size={ICON_SIZE.X_SMALL} src={searchIcon} />
                </div>
            </StyledSidebarHeader>
            {isUserAuthorize ? (
                <UserInfo
                    avatar={ownerAvatar}
                    name={'Emilee Simchenko'}
                    profession={'Product Owner'}
                />
            ) : (
                <Login onButtonClick={onLogin} />
            )}

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

            <StyledSidebarFooter>
                <span>
                    <StyledSidebarFooterInvite href='#'>
                        Invite your team
                    </StyledSidebarFooterInvite>{' '}
                    and start collaborating!
                </span>
            </StyledSidebarFooter>
        </StyledSidebar>
    )
}

export { Sidebar }

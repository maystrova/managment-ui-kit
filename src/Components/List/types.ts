import { SIDEBAR_LIST } from '../Layout/tasks'

export type SidebarItemAvatar = {
    avatar: string
    id: string
}

export type SidebarItemIcon = {
    icon: string
    id?: string
}

export type SidebarItemCount = {
    count: string
    id?: string
}

export type SidebarItemAdd = {
    title: string
    id: string
}

export type SidebarItem = {
    icon?: SidebarItemIcon
    count?: SidebarItemCount
    title: string
    avatars?: SidebarItemAvatar[]
    id: string
}

export type ListType = {
    id: SIDEBAR_LIST
    title: string
    items: SidebarItem[]
    addition?: SidebarItemAdd
}

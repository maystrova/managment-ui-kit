
export type SidebarItem = {
    icon?: string
    count?: string
    title: string
    avatars?: string[]
}

export type ListType = {
    id: string
    title: string
    items: SidebarItem[]
    addition?: string
}

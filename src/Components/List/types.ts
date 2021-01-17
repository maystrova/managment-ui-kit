
type SidebarItem = {
    icon?: string
    count?: string
    title: string
    avatars?: string[]
}

export type ListType = {
    title: string
    items: SidebarItem[]
    addition?: string
}
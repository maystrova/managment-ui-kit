import { SIDEBAR_LIST } from '../Layout/tasks'

export type SidebarItem = {
	icon?: string
	count?: string
	title: string
	avatars?: string[]
}

export type ListType = {
	id: SIDEBAR_LIST
	title: string
	items: SidebarItem[]
	addition?: string
}

import { TAG_TYPE } from '../Tag'
import { FileType } from '../File/types'

export type DiscussionType = {
    name: string
    profession: string
    date: string
    text: string
    avatar: string
    id: string
}

export type UserType = {
    avatar: string
}

export enum TASK_TYPE {
    BACKLOG = 'backlog',
    TODO = 'todo',
}

export type TaskType = {
    title: string
    addedBy: string
    createdAt: string
    isChecked: boolean
    assignTo: string
    dueOn: string
    tag: TAG_TYPE
    followers: string[]
    description: string
    discussions: DiscussionType[]
    user: UserType
    files: string[]
    type: TASK_TYPE
    id: string
}

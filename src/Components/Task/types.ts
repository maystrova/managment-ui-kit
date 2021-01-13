import {TagType} from "../Tag";

export type DiscussionType = {
    name: string,
    profession: string,
    date: string,
    text: string,
    avatar: string
}

export type UserType = {
    avatar: string
}

export type FileType = {
    preview: string
    title: string
    format: string
    size: string
}

export type TaskType = {
    title: string
    addedBy: string
    createdAt: string
    isChecked: boolean
    assignTo: string
    dueOn: string
    tag: TagType
    followers: string[]
    description: string
    discussions: DiscussionType[]
    user: UserType
    files: FileType []
}
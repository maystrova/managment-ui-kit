import {TagType} from "../Tag";
import {FileType} from "../File/type";

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
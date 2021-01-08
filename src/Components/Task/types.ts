import {TagType} from "../Tag";

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
    discussion: string[]
}
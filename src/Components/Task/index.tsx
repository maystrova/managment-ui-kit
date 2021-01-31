import React from "react";
import './style.css'
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import userAvatar1 from "../Layout/pics/userpic1.png";
import {Tag} from "../Tag";
import {Comment} from "../Comment";
import {DiscussionType, TaskType} from "./types";
import {AddComment} from "../AddComment";
import {File} from "../File";

interface TaskProps {
    task: TaskType,
    onTaskUpdated: (task: TaskType) => void
}

const Task = ({task, onTaskUpdated}: TaskProps) => {
    const onCommentAdd = (comment: DiscussionType, task: TaskType): void => {
        const newDiscussions = [comment, ...task.discussions]

        const newTask: TaskType = {
            ...task,
            discussions: newDiscussions
        }

        onTaskUpdated(newTask)
    }

    const onTaskAdd = (task: TaskType, title: string, description: string): void => {

        const newTask: TaskType = {
            ...task,
            title,
            description,
        }

        console.log(newTask)
    }

    const onFileDelete = (task: TaskType, fileIdForDelete: number): void => {
    const newTask: TaskType = {
        ...task,
        files: task.files.filter((file) => file.id !== fileIdForDelete)
    }
    onTaskUpdated(newTask)
    }


    return (
        <div className='task'>
            <header className='task__header'>
                <div>
                    <h2>{task.title}</h2>
                    <span>Added by {task.addedBy} {task.createdAt}</span>
                </div>
                <div>
                    <Checkbox/>
                </div>
            </header>
            <div className='task__information'>
                <div className='task__information-asignTo'>
                    <h4 className='task__title'>Asign to</h4>
                    <div className='task__information-asignTo-user'>
                        <Avatar size={"x-small"} src={task.user.avatar}/>
                        <span className='task__information-asignTo-name'>{task.assignTo}</span>
                    </div>

                </div>
                <div className='task__information-date'>
                    <h4 className='task__title'>Due on</h4>
                    <div>{task.dueOn}</div>
                </div>
                <div className='task__information-tag'>
                    <h4 className='task__title'>Tag</h4>
                    <Tag text={task.tag} type={task.tag}/>
                </div>
                <div className="task__information-followers">
                    <h4 className='task__title'>Followers</h4>
                    {task.followers.map((follower) => <Avatar size={"x-small"} src={follower}/>)}
                </div>
            </div>

            <div className="task__description">
                <h4 className="task__description-title task__title">Description</h4>
                <p className='task__description-content'>{task.description}
                </p>
                <div className="task__description-files">
                    {task.files.map((file) => (
                        <File
                            key={file.title}
                            title={file.title}
                            preview={file.preview}
                            format={file.format}
                            size={file.size}
                            onFileDelete={(fileId) => {onFileDelete(task, fileId)}}
                            id={file.id}
                        />
                    ))}
                </div>
            </div>

            <div className="task__discussion">
                <h4 className='task__title'>Discussion</h4>
                <div className='task__discussion-addComment'>
                    <AddComment onCommentAdded={(comment) => onCommentAdd(comment, task)} userpic={task.user.avatar}/>
                </div>
                <div className='task__discussion-comments'>
                    {task.discussions.map(({name, profession, date, text, avatar}) => (
                        <Comment
                            key={name}
                            name={name}
                            profession={profession}
                            date={date}
                            text={text}
                            avatar={avatar}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export {Task}
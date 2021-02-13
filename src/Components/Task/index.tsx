import React from 'react'
import './style.scss'
import { Checkbox } from '../Checkbox'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Tag } from '../Tag'
import { Comment } from '../Comment'
import { DiscussionType, TaskType } from './types'
import { AddComment } from '../AddComment'
import { File } from '../File'

interface TaskProps {
    task: TaskType
    onTaskUpdated: (task: TaskType) => void
}

const Task = ({ task, onTaskUpdated }: TaskProps) => {
    const onCommentAdd = (comment: DiscussionType, task: TaskType): void => {
        const newDiscussions = [comment, ...task.discussions]

        const newTask: TaskType = {
            ...task,
            discussions: newDiscussions,
        }

        onTaskUpdated(newTask)
    }

    const onFileDelete = (task: TaskType, fileIdForDelete: number): void => {
        const newTask: TaskType = {
            ...task,
            files: task.files.filter(file => file.id !== fileIdForDelete),
        }
        onTaskUpdated(newTask)
    }

    return (
        <div className='Task'>
            <header className='Task__Header'>
                <div>
                    <h2>{task.title}</h2>
                    <span>
                        Added by {task.addedBy} {task.createdAt}
                    </span>
                </div>
                <div>
                    <Checkbox />
                </div>
            </header>
            <div className='Task__Information'>
                <div className='Task__Information-asignTo'>
                    <h4 className='Task__Title'>Asign to</h4>
                    <div className='Task__Information-asignTo-user'>
                        <Avatar
                            size={AVATAR_SIZE.X_SMALL}
                            src={task.user.avatar}
                        />
                        <span className='Task__Information-asignTo-name'>
                            {task.assignTo}
                        </span>
                    </div>
                </div>
                <div className='Task__Information-date'>
                    <h4 className='Task__Title'>Due on</h4>
                    <div>{task.dueOn}</div>
                </div>
                <div className='Task__Information-tag'>
                    <h4 className='Task__Title'>Tag</h4>
                    <Tag text={task.tag} type={task.tag} />
                </div>
                <div className='Task__Information-followers'>
                    <h4 className='Task__Title'>Followers</h4>
                    {task.followers.map(follower => (
                        <Avatar
                            size={AVATAR_SIZE.X_SMALL}
                            src={follower}
                            key={follower}
                        />
                    ))}
                </div>
            </div>

            <div className='Task__Description'>
                <h4 className='Task__Description-title Task__Title'>
                    Description
                </h4>
                <p className='Task__Description-content'>{task.description}</p>
                <div className='Task__Description-files'>
                    {task.files.map(file => (
                        <File
                            key={file.title}
                            title={file.title}
                            preview={file.preview}
                            format={file.format}
                            size={file.size}
                            onFileDelete={fileId => {
                                onFileDelete(task, fileId)
                            }}
                            id={file.id}
                        />
                    ))}
                </div>
            </div>

            <div className='Task__Discussion'>
                <h4 className='Task__Title'>Discussion</h4>
                <div className='Task__Discussion-addComment'>
                    <AddComment
                        onCommentAdded={comment => onCommentAdd(comment, task)}
                        userpic={task.user.avatar}
                    />
                </div>
                <div className='Task__Discussion-comments'>
                    {task.discussions.map(
                        ({ name, profession, date, text, avatar }) => (
                            <Comment
                                key={name}
                                name={name}
                                profession={profession}
                                date={date}
                                text={text}
                                avatar={avatar}
                            />
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}

export { Task }

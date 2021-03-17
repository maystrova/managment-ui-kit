import React, { useState } from 'react'
import { Checkbox } from '../Checkbox'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Tag } from '../Tag'
import { Comment } from '../Comment'
import { DiscussionType, TaskType } from './types'
import { AddComment } from '../AddComment'
import { File } from '../File'
import {
    StyledEdit,
    StyledEditForm,
    StyledTask,
    StyledTaskDescription,
    StyledTaskDescriptionText,
    StyledTaskFiles,
    StyledTaskHeader,
    StyledTaskHeaderTitle,
    StyledTaskInformation,
    StyledTaskTitle,
    StyledTaskUser,
    StyledTaskUserName,
} from './style'
import { Button, BUTTON_SIZE } from '../Button'

interface TaskProps {
    task: TaskType
    onTaskUpdated: (task: TaskType) => void
}

const Task = ({ task, onTaskUpdated }: TaskProps) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [titleEdit, setTitleEdit] = useState<string>(task.title)

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

    const onTaskUpdate = (
        task: TaskType,
        currentCheckedValue: boolean,
    ): void => {
        const newTask: TaskType = {
            ...task,
            isChecked: currentCheckedValue,
        }
        onTaskUpdated(newTask)
    }

    const onEditTitleShow = (): void => {
        setShowEdit(true)
    }

    const onTitleEdit = (title: string, task: TaskType): void => {
        const newTask: TaskType = {
            ...task,
            title: titleEdit,
        }
        onTaskUpdated(newTask)
    }

    const onSaveClick = () => {
        onTitleEdit(titleEdit, task)
        setShowEdit(false)
    }
    console.log('showEdits', showEdit)
    return (
        <StyledTask>
            <StyledTaskHeader>
                <div>
                    <StyledTaskHeaderTitle>
                        {!showEdit && (
                            <span onClick={onEditTitleShow}>{task.title}</span>
                        )}
                        {showEdit && (
                            <StyledEdit>
                                <StyledEditForm
                                    type='text'
                                    placeholder={titleEdit}
                                    value={titleEdit}
                                    onChange={event =>
                                        setTitleEdit(event.target.value)
                                    }
                                    onKeyDown={event => {
                                        if (event.key === 'Enter') {
                                            onTitleEdit(titleEdit, task)
                                            setShowEdit(false)
                                        } else if (event.keyCode == 27) {
                                            setShowEdit(false)
                                        }
                                    }}
                                />
                                <Button
                                    text={'Save'}
                                    size={BUTTON_SIZE.MEDIUM}
                                    onClick={onSaveClick}
                                />
                                <Button
                                    text={'Cancel'}
                                    backgroundColor={'white'}
                                    size={BUTTON_SIZE.MEDIUM}
                                    onClick={() => setShowEdit(false)}
                                />
                            </StyledEdit>
                        )}
                    </StyledTaskHeaderTitle>
                    <span>
                        Added by {task.addedBy} {task.createdAt}
                    </span>
                </div>
                <div>
                    <Checkbox
                        onChange={isChecked => onTaskUpdate(task, isChecked)}
                        isChecked={task.isChecked}
                    />
                </div>
            </StyledTaskHeader>
            <StyledTaskInformation>
                <div>
                    <StyledTaskTitle>Asign to</StyledTaskTitle>
                    <StyledTaskUser>
                        <Avatar
                            size={AVATAR_SIZE.X_SMALL}
                            src={task.user.avatar}
                        />
                        <StyledTaskUserName>{task.assignTo}</StyledTaskUserName>
                    </StyledTaskUser>
                </div>
                <div>
                    <StyledTaskTitle>Due on</StyledTaskTitle>
                    <div>{task.dueOn}</div>
                </div>
                <div>
                    <StyledTaskTitle>Tag</StyledTaskTitle>
                    <Tag text={task.tag} type={task.tag} />
                </div>
                <div>
                    <StyledTaskTitle>Followers</StyledTaskTitle>
                    {task.followers.map(follower => (
                        <Avatar
                            size={AVATAR_SIZE.X_SMALL}
                            src={follower}
                            key={follower}
                        />
                    ))}
                </div>
            </StyledTaskInformation>

            <StyledTaskDescription>
                <StyledTaskTitle>Description</StyledTaskTitle>
                <StyledTaskDescriptionText>
                    {task.description}
                </StyledTaskDescriptionText>
                <StyledTaskFiles>
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
                </StyledTaskFiles>
            </StyledTaskDescription>

            <div>
                <StyledTaskTitle>Discussion</StyledTaskTitle>
                <div>
                    <AddComment
                        onCommentAdded={comment => onCommentAdd(comment, task)}
                        userpic={task.user.avatar}
                    />
                </div>
                <div>
                    {task.discussions.map(
                        ({ name, profession, date, text, avatar }) => (
                            <Comment
                                key={text}
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
        </StyledTask>
    )
}

export { Task }

import React from 'react'
import { Button, BUTTON_SIZE } from '../Button'
import { TaskType } from '../Task/types'
import { TaskCard } from '../TaskCard'
import {
    StyledTasksList,
    StyledTasksListHeader,
    StyledTaskListHeaderTitle,
    StyledLoading,
    StyledTaskListWrapper,
} from './style'
import { User } from 'services/user'
import { Uploading } from '../Uploading'

interface TasksListProps {
    title: string
    tasks: TaskType[]
    onTaskSelected: (task: TaskType) => void
    onCreatedTaskClicked: () => void
    onTaskChecked: (task: TaskType) => void
    user: User | null
    isLoading: boolean
}

const TasksList = ({
    title,
    tasks,
    onTaskSelected,
    onCreatedTaskClicked,
    onTaskChecked,
    user,
    isLoading,
}: TasksListProps) => {
    const isAuthorized = Boolean(user?.id)

    return (
        <StyledTaskListWrapper>
            {isLoading && (
                <StyledLoading>
                    <Uploading />
                </StyledLoading>
            )}
            <StyledTasksList>
                <StyledTasksListHeader>
                    <StyledTaskListHeaderTitle>
                        {title}
                    </StyledTaskListHeaderTitle>

                    {isAuthorized && (
                        <Button
                            onClick={() => onCreatedTaskClicked()}
                            text='+ Add Task'
                            backgroundColor='#CEF9C6'
                            color='#1D201C'
                            size={BUTTON_SIZE.LARGE}
                        />
                    )}
                </StyledTasksListHeader>

                {tasks.map(task => {
                    return (
                        <TaskCard
                            authorizedUser={user}
                            title={task.title}
                            user={task.user}
                            addedBy={task.addedBy}
                            assignTo={task.assignTo}
                            createdAt={task.createdAt}
                            description={task.description}
                            discussions={task.discussions}
                            dueOn={task.dueOn}
                            files={task.files}
                            followers={task.followers}
                            isChecked={task.isChecked}
                            tag={task.tag}
                            onClick={() => onTaskSelected(task)}
                            key={task.id}
                            type={task.type}
                            id={task.id}
                            onChecked={isChecked => {
                                onTaskChecked({
                                    ...task,
                                    isChecked: isChecked,
                                })
                            }}
                        />
                    )
                })}
            </StyledTasksList>
        </StyledTaskListWrapper>
    )
}

export { TasksList }

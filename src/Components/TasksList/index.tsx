import React from 'react'
import { Button, BUTTON_SIZE } from '../Button'
import { TASK_TYPE, TaskType } from '../Task/types'
import { TaskCard } from '../TaskCard'
import {
    StyledTasksList,
    StyledTasksListHeader,
    StyledTaskListHeaderTitle,
} from './style'

interface TasksListProps {
    title: string
    tasks: TaskType[]
    onTaskSelected: (task: TaskType) => void
    onCreatedTaskClicked: () => void
}

const TasksList = ({
    title,
    tasks,
    onTaskSelected,
    onCreatedTaskClicked,
}: TasksListProps) => {
    return (
        <StyledTasksList>
            <StyledTasksListHeader>
                <StyledTaskListHeaderTitle>{title}</StyledTaskListHeaderTitle>
                <Button
                    onClick={() => onCreatedTaskClicked()}
                    text='+ Add Task'
                    backgroundColor='#CEF9C6'
                    color='#1D201C'
                    size={BUTTON_SIZE.LARGE}
                />
            </StyledTasksListHeader>

            {tasks.map(task => {
                return (
                    <TaskCard
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
                        key={task.title}
                        type={task.type}
                    />
                )
            })}
        </StyledTasksList>
    )
}

export { TasksList }

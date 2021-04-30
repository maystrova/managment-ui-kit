import React, { useEffect, useState } from 'react'

import { TasksList } from 'Components/TasksList'
import { TASK_TYPE, TaskType } from 'Components/Task/types'
import { Task } from 'Components/Task'
import { AddFile } from 'Components/AddFile'
import { AddTask, FieldsForCreateTask } from 'Components/AddTask'

import { User } from 'services/user'
import { createTask, getAllTasks, updateTask } from 'services/task'

import { DEFAULT_TASK } from './defaultTask'
import { tasks } from 'Components/Layout/tasks'

import {
    StyledTaskPage,
    StyledTaskPageList,
    StyledTaskPageBacklog,
} from './style'

interface CreationTask {
    isModalOpen: boolean
    taskTypeForCreation: TASK_TYPE
}

interface TaskPageProps {
    user: User | null
}

const TaskPage = ({ user }: TaskPageProps) => {
    const [tasksList, setTasksList] = useState<TaskType[]>([])
    const [isTasksLoading, setTasksLoading] = useState<boolean>(false)
    const [task, setTask] = useState<TaskType | null>(null)
    const [showAddFile, setShowAddFile] = useState<boolean>(false)
    const [isShowAddTask, setShowAddTask] = useState<CreationTask>({
        isModalOpen: false,
        taskTypeForCreation: TASK_TYPE.BACKLOG,
    })

    const toDoTasks = tasksList.filter(task => task.type === TASK_TYPE.TODO)
    const backlogTasks = tasksList.filter(
        task => task.type === TASK_TYPE.BACKLOG,
    )

    const setServerTasks = async (user: User): Promise<void> => {
        setTasksLoading(true)
        const clientTasks = await getAllTasks(user)
        setTasksList(clientTasks)
        setTasksLoading(false)
    }

    const editTask = async (task: TaskType) => {
        if (user) {
            await updateTask(task, user)
            await setServerTasks(user)
        }
    }

    const selectTask = (task: TaskType) => {
        setTask(null)

        setTimeout(() => {
            setTask(task)
        }, 300)
    }

    const updateOpenedTask = async (task: TaskType) => {
        await editTask(task)
        setTask(task)
    }

    const addFilesToTask = async (task: TaskType, filesIds: string[]) => {
        const files = Boolean(task?.files?.length)
            ? [...task?.files, ...filesIds]
            : filesIds

        const newTask: TaskType = {
            ...task,
            files,
        }

        await updateOpenedTask(newTask)
    }

    const addNewTaskToList = async (
        task: TaskType,
        fieldsForCreateTask: FieldsForCreateTask,
        tasksList: TaskType[],
        taskType: TASK_TYPE,
    ): Promise<void> => {
        const newTask: TaskType = {
            ...task,
            title: fieldsForCreateTask.title || 'New Task',
            description: fieldsForCreateTask.description,
            type: taskType,
        }

        if (user) {
            await createTask(newTask, user)
        }

        const newTasks = [...tasksList, newTask]
        setTasksList(newTasks)
        setShowAddTask({
            isModalOpen: false,
            taskTypeForCreation: TASK_TYPE.BACKLOG,
        })
    }

    useEffect(() => {
        if (user) {
            setServerTasks(user)
        } else {
            setTask(DEFAULT_TASK)
            setTasksList(tasks)
        }
    }, [user])

    return (
        <StyledTaskPage>
            <StyledTaskPageList>
                <StyledTaskPageBacklog>
                    <TasksList
                        onCreatedTaskClicked={() =>
                            setShowAddTask({
                                isModalOpen: true,
                                taskTypeForCreation: TASK_TYPE.BACKLOG,
                            })
                        }
                        onTaskChecked={editTask}
                        title={'Backlog'}
                        tasks={backlogTasks}
                        onTaskSelected={selectTask}
                        user={user}
                        isLoading={isTasksLoading}
                    />
                </StyledTaskPageBacklog>

                <TasksList
                    onCreatedTaskClicked={() =>
                        setShowAddTask({
                            isModalOpen: true,
                            taskTypeForCreation: TASK_TYPE.TODO,
                        })
                    }
                    onTaskChecked={editTask}
                    title={'To Do'}
                    tasks={toDoTasks}
                    onTaskSelected={selectTask}
                    user={user}
                    isLoading={isTasksLoading}
                />
            </StyledTaskPageList>

            {task && (
                <Task
                    task={task}
                    onTaskUpdated={updateOpenedTask}
                    user={user}
                    onAddFileClick={() => setShowAddFile(true)}
                />
            )}

            {showAddFile && task && user && (
                <AddFile
                    user={user}
                    taskId={task.id}
                    onCancel={() => {
                        setShowAddFile(false)
                    }}
                    onSubmit={fileIds => {
                        addFilesToTask(task, fileIds)
                        setShowAddFile(false)
                    }}
                />
            )}

            <AddTask
                isOpen={isShowAddTask.isModalOpen}
                onCancel={() =>
                    setShowAddTask({
                        isModalOpen: false,
                        taskTypeForCreation: TASK_TYPE.BACKLOG,
                    })
                }
                onSubmit={fieldsForCreateTask =>
                    addNewTaskToList(
                        DEFAULT_TASK,
                        fieldsForCreateTask,
                        tasksList,
                        isShowAddTask.taskTypeForCreation,
                    )
                }
            />
        </StyledTaskPage>
    )
}

export { TaskPage }

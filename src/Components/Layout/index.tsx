import React, { useEffect, useState } from 'react'
import { firebase } from 'services/firebase'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { Task } from 'Components/Task'
import { TASK_TYPE, TaskType } from '../Task/types'
import { TasksList } from '../TasksList'
import {
    GlobalStyle,
    StyledLayout,
    StyledLayoutContent,
    StyledLayoutMain,
} from './style'

import { SIDEBAR_LIST, tasks } from './tasks'

import projectIcon from '../Layout/pics/navigation-icon.svg'
import searchIcon from '../Layout/pics/search-icon.svg'
import designerAvatar1 from '../Layout/pics/designers1.svg'
import designerAvatar2 from '../Layout/pics/designers2.svg'
import designerAvatar3 from '../Layout/pics/designers3.svg'
import backenderAvatar1 from '../Layout/pics/backend1.svg'
import backenderAvatar2 from '../Layout/pics/backend2.svg'
import frontenderAvatar1 from '../Layout/pics/frontend1.svg'
import frontenderAvatar2 from '../Layout/pics/frontend2.svg'
import frontenderAvatar3 from '../Layout/pics/frontend3.svg'
import frontenderAvatar4 from '../Layout/pics/frontend4.svg'
import dashboardIcon from '../Layout/pics/dashboard.svg'
import crmIcon from '../Layout/pics/crm.svg'
import redesignIcon from '../Layout/pics/website.svg'
import communicationIcon from '../Layout/pics/communication.svg'
import userAvatar2 from '../Layout/pics/userpic2.png'
import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar3 from '../Layout/pics/userpic3.png'
import userAvatar4 from '../Layout/pics/userpic4.png'
import userAvatar5 from '../Layout/pics/userpic5.png'
import commentAvatar3 from '../Layout/pics/commentpic2.png'
import commentAvatar2 from '../Layout/pics/commentpic3.png'
import filePreview from '../Layout/pics/file.png'
import { ListType, SidebarItem } from '../List/types'
import { AddTask, FieldsForCreateTask } from '../AddTask'
import { AddProject, FieldsForCreateProject } from '../AddProject'
import { Share } from '../Share'
import { AddTeam, FieldsForCreateTeam } from '../AddTeam'
import { TAG_TYPE } from '../Tag'
import { User } from '../../services/user'
import { createTask, getAllTasks, updateTask } from '../../services/task'
import { Editing } from '../Editing'

const sidebarLists: ListType[] = [
    {
        title: 'Menu',
        id: SIDEBAR_LIST.MENU,
        items: [
            { title: 'Home', id: 'home' },
            { title: 'My Tasks', id: 'mytasks' },
            {
                title: 'Notifications',
                id: 'notifications',
                count: { count: '3', id: 'countfbefbe' },
            },
        ],
    },
    {
        title: 'Projects',
        id: SIDEBAR_LIST.PROJECTS,
        addition: { title: '+ Add a Project', id: 'addaproject' },
        items: [
            {
                title: 'Dashboard UI Kit',
                icon: { icon: dashboardIcon, id: 'dashboard' },
                id: '124415',
            },
            {
                title: 'CRM System',
                icon: { icon: crmIcon, id: 'crmicon' },
                id: '12335',
            },
            {
                title: 'Website Redesign',
                icon: { icon: redesignIcon, id: 'redesignicon' },
                id: '36352354',
            },
            {
                title: 'Communication Tool',
                icon: { icon: communicationIcon, id: 'communicationicon' },
                id: '363452',
            },
        ],
    },
    {
        title: 'Teams',
        id: SIDEBAR_LIST.TEAMS,
        addition: { title: '+ Add a Team', id: 'addateam' },
        items: [
            {
                title: 'Designers',
                avatars: [
                    { avatar: designerAvatar1, id: 'design1' },
                    { avatar: designerAvatar2, id: 'design2' },
                    { avatar: designerAvatar3, id: 'design3' },
                ],
                id: '12356',
            },
            {
                title: 'Backend',
                avatars: [
                    { avatar: backenderAvatar1, id: 'backend1' },
                    { avatar: backenderAvatar2, id: 'backend2' },
                ],
                id: '465484783',
            },
            {
                title: 'Frontend',
                avatars: [
                    { avatar: frontenderAvatar1, id: 'frontend1' },
                    { avatar: frontenderAvatar2, id: 'frontend2' },
                    { avatar: frontenderAvatar3, id: 'frontend3' },
                    { avatar: frontenderAvatar4, id: 'frontend4' },
                ],
                id: '9876543',
            },
        ],
    },
]

const DEFAULT_TASK = {
    title: 'Find top 5 customer requests',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    type: TASK_TYPE.BACKLOG,
    tag: TAG_TYPE.MARKETING,
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description:
        'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text:
                'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3,
        },
        {
            name: 'Prescott MacCaffery',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text:
                '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2,
        },
    ],
    user: { avatar: userAvatar1 },
    files: [
        {
            title: 'Redesign Brief',
            format: '.pdf',
            preview: filePreview,
            size: '159 kb',
            id: 1,
        },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb',
            id: 2,
        },
    ],
}

interface CreationTask {
    isModalOpen: boolean
    taskTypeForCreation: TASK_TYPE
}

const Layout = () => {
    const [user, setUser] = useState<User | null>(null)
    const [task, setTask] = useState<TaskType | null>(null)
    const [isShowAddTask, setShowAddTask] = useState<CreationTask>({
        isModalOpen: false,
        taskTypeForCreation: TASK_TYPE.BACKLOG,
    })
    const [isShowEdit, setShowEdit] = useState<boolean>(false)
    const [isEditTask, setEditTask] = useState<boolean>(false)

    const [isShowAddProject, setShowAddProject] = useState<boolean>(false)
    const [isShowAddTeam, setShowAddTeam] = useState<boolean>(false)
    const [isShowShare, setShowShare] = useState<boolean>(false)

    const [tasksList, setTasksList] = useState<TaskType[]>([])

    const [sidebarItems, setProjectsList] = useState<ListType[]>(sidebarLists)

    const addNewTaskToList = async (
        task: TaskType,
        fieldsForCreateTask: FieldsForCreateTask,
        tasksList: TaskType[],
        taskType: TASK_TYPE,
    ): Promise<void> => {
        const newTask: TaskType = {
            ...task,
            title: fieldsForCreateTask.title,
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

    const editTaskTitle = async (task: TaskType) => {}

    const getUniqueId = (title: string): string => {
        const timestamp = Date.now()

        return `${title.replace(' ', '_')}_${timestamp}`
    }

    const addNewProjectToList = (
        currentSidebarItems: ListType[],
        fieldsForCreateProject: FieldsForCreateProject,
        idForSidebarList: string,
    ): void => {
        const newProject: SidebarItem = {
            title: fieldsForCreateProject.title,
            avatars: [],
            icon: { icon: crmIcon },
            count: undefined,
            id: getUniqueId(fieldsForCreateProject.title),
        }

        const newSidebarList: ListType[] = currentSidebarItems.map(list => {
            if (list.id === idForSidebarList) {
                return { ...list, items: [...list.items, newProject] }
            }
            return list
        })

        setProjectsList(newSidebarList)
        setShowAddProject(false)
    }

    const addNewTeamToList = (
        currentSidebarItems: ListType[],
        fieldsForCreateTeam: FieldsForCreateTeam,
        idForSidebarList: string,
    ): void => {
        const newTeam: SidebarItem = {
            title: fieldsForCreateTeam.title,
            avatars: [],
            icon: undefined,
            count: undefined,
            id: getUniqueId(fieldsForCreateTeam.title),
        }

        const newSidebarList: ListType[] = currentSidebarItems.map(list => {
            if (list.id === idForSidebarList) {
                return { ...list, items: [...list.items, newTeam] }
            }
            return list
        })
        setProjectsList(newSidebarList)
        setShowAddTeam(false)
    }

    const authorization = async () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await firebase
            .auth()
            .signInWithPopup(authProvider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user
                const preparedUser: User = {
                    fullName: user?.displayName ? user.displayName : 'User',
                    avatarUrl: user?.photoURL ? user.photoURL : '',
                    email: user?.email ? user.email : 'example@email.com',
                    id: user?.uid ? user?.uid : 'empty_id',
                }

                window.localStorage.setItem(
                    'user',
                    JSON.stringify(preparedUser),
                )

                setTask(null)
                setTasksList([])
                setUser(preparedUser)
                // ...
            })
            .catch(() => {})
    }

    const getUser = async (): Promise<void> => {
        const storageUser = await window.localStorage.getItem('user')

        if (storageUser) {
            setUser(JSON.parse(storageUser))
        } else {
            setTask(DEFAULT_TASK)
            setTasksList(tasks)
        }
    }

    const logOut = async (): Promise<void> => {
        await window.localStorage.removeItem('user')

        setUser(null)
    }

    useEffect(() => {
        getUser()
    }, [])

    const setServerTasks = async (user: User): Promise<void> => {
        const clientTasks = await getAllTasks(user)
        setTasksList(clientTasks)
    }

    useEffect(() => {
        if (user) {
            setServerTasks(user)
        }
    }, [user])

    const toDoTasks = tasksList.filter(task => task.type === TASK_TYPE.TODO)
    const backlogTasks = tasksList.filter(
        task => task.type === TASK_TYPE.BACKLOG,
    )

    const editTask = async (task: TaskType) => {
        if (user) {
            await updateTask(task, user)
            await setServerTasks(user)
        }
    }

    const updateOpenedTask = async (task: TaskType) => {
        await editTask(task)
        setTask(task)
    }

    return (
        <StyledLayout>
            <GlobalStyle />
            <Sidebar
                onLogin={() => authorization()}
                onLogOut={logOut}
                onItemAddClick={listId => {
                    if (listId === SIDEBAR_LIST.PROJECTS) {
                        setShowAddProject(true)
                    } else if (listId === SIDEBAR_LIST.TEAMS) {
                        setShowAddTeam(true)
                    }
                }}
                title={'Projectus'}
                icon={projectIcon}
                search={searchIcon}
                lists={sidebarItems}
                statistics={{ completed: 372, opened: 11 }}
                user={user}
            />

            <StyledLayoutMain>
                <Header
                    icon={redesignIcon}
                    creators={[
                        { avatar: userAvatar2, id: 'useravatar2' },
                        { avatar: userAvatar3, id: 'useravatar3' },
                        { avatar: userAvatar4, id: 'useravatar4' },
                    ]}
                    title={'Website Redesign'}
                    menu={[
                        { title: 'Tasks', id: '345' },
                        { title: 'Kanban', id: '5555564' },
                        { title: 'Activity', id: '3434343' },
                        { title: 'Calendar', id: '34343' },
                        { title: 'Files', id: '343488888' },
                    ]}
                    onShareWindowOpen={() => setShowShare(true)}
                />

                <StyledLayoutContent>
                    <div>
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
                            onTaskSelected={task => setTask(task)}
                        />

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
                            onTaskSelected={task => setTask(task)}
                        />
                    </div>

                    {task && (
                        <Task task={task} onTaskUpdated={updateOpenedTask} />
                    )}
                </StyledLayoutContent>
            </StyledLayoutMain>
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
            <AddProject
                isOpen={isShowAddProject}
                onCancel={() => setShowAddProject(false)}
                onSubmit={(fieldsForCreateProject, id) =>
                    addNewProjectToList(
                        sidebarItems,
                        fieldsForCreateProject,
                        id,
                    )
                }
            />
            <AddTeam
                isOpen={isShowAddTeam}
                onCancel={() => setShowAddTeam(false)}
                onSubmit={(fieldsForCreateTeam, id) =>
                    addNewTeamToList(sidebarItems, fieldsForCreateTeam, id)
                }
            />

            <Share isOpen={isShowShare} onCancel={() => setShowShare(false)} />
        </StyledLayout>
    )
}

export { Layout }

import React, { useEffect, useState } from 'react'
import { Switch, BrowserRouter, HashRouter, Route } from 'react-router-dom'

import { Sidebar } from '../Sidebar'
import { Header } from '../Header'

import {
    GlobalStyle,
    StyledLayout,
    StyledLayoutContent,
    StyledLayoutMain,
} from './style'

import { SIDEBAR_LIST } from './tasks'

import backenderAvatar1 from '../Layout/pics/backend1.svg'
import backenderAvatar2 from '../Layout/pics/backend2.svg'
import communicationIcon from '../Layout/pics/communication.svg'
import crmIcon from '../Layout/pics/crm.svg'
import dashboardIcon from '../Layout/pics/dashboard.svg'
import designerAvatar1 from '../Layout/pics/designers1.svg'
import designerAvatar2 from '../Layout/pics/designers2.svg'
import designerAvatar3 from '../Layout/pics/designers3.svg'
import frontenderAvatar1 from '../Layout/pics/frontend1.svg'
import frontenderAvatar2 from '../Layout/pics/frontend2.svg'
import frontenderAvatar3 from '../Layout/pics/frontend3.svg'
import frontenderAvatar4 from '../Layout/pics/frontend4.svg'
import projectIcon from '../Layout/pics/navigation-icon.svg'
import redesignIcon from '../Layout/pics/website.svg'
import searchIcon from '../Layout/pics/search-icon.svg'
import userAvatar2 from '../Layout/pics/userpic2.png'
import userAvatar3 from '../Layout/pics/userpic3.png'
import userAvatar4 from '../Layout/pics/userpic4.png'

import { ListType, SidebarItem } from '../List/types'
import { AddProject, FieldsForCreateProject } from '../AddProject'
import { Share } from '../Share'
import { AddTeam, FieldsForCreateTeam } from '../AddTeam'
import { getUser, User } from 'services/user'
import { firebase } from 'services/firebase'

import { TaskPage } from 'Pages/TaskPage'
import { ROUTES } from '../../services/route'
import { FilesPage } from '../../Pages/FilesPage'

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

const Layout = () => {
    const [user, setUser] = useState<User | null>(null)

    const [isShowAddProject, setShowAddProject] = useState<boolean>(false)
    const [isShowAddTeam, setShowAddTeam] = useState<boolean>(false)
    const [isShowShare, setShowShare] = useState<boolean>(false)

    const [sidebarItems, setProjectsList] = useState<ListType[]>(sidebarLists)

    // const completedTasksCount: number = tasksList.filter(task => task.isChecked)
    //     .length
    // const openedTasksCount: number = tasksList.length - completedTasksCount

    const completedTasksCount: number = 1
    const openedTasksCount: number = 1

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

                setUser(preparedUser)
                // ...
            })
            .catch(() => {})
        console.log(user?.id)
    }

    const getStateUser = async (): Promise<void> => {
        const storageUser = await getUser()

        if (storageUser) {
            setUser(storageUser)
        }
    }

    const logOut = async (): Promise<void> => {
        await window.localStorage.removeItem('user')

        setUser(null)
    }

    useEffect(() => {
        getStateUser()
    }, [])

    return (
        <BrowserRouter>
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
                    statistics={{
                        completed: completedTasksCount,
                        opened: openedTasksCount,
                    }}
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
                            { title: 'Tasks', path: ROUTES.TASKS },
                            { title: 'Kanban', path: '/kanban' },
                            {
                                title: 'Activity',
                                path: '/activity',
                            },
                            {
                                title: 'Calendar',
                                path: '/calendar',
                            },
                            { title: 'Files', path: ROUTES.FILES },
                        ]}
                        onShareWindowOpen={() => setShowShare(true)}
                    />

                    <StyledLayoutContent>
                        <Switch>
                            <Route path={[ROUTES.TASKS, '/']} exact>
                                <TaskPage user={user} />
                            </Route>

                            <Route path={ROUTES.FILES} exact>
                                <FilesPage user={user} />
                            </Route>
                        </Switch>
                    </StyledLayoutContent>
                </StyledLayoutMain>
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

                <Share
                    isOpen={isShowShare}
                    onCancel={() => setShowShare(false)}
                />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }

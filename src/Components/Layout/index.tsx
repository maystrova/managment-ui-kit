import React, {useState} from 'react'
import {Sidebar} from '../Sidebar'
import {Header} from "../Header";
import {Task} from '../Task'
import {TaskType} from '../Task/types'
import {TasksList} from "../TasksList";

import {backlogTasks, todoTasks} from "./tasks";

import '../../html/style.css'
import '../../html/task/style.css'

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
import {ListType, SidebarItem} from "../List/types";
import {AddTask, FieldsForCreateTask} from "../AddTask";
import {AddProject, FieldsForCreateProject} from "../AddProject";
import {Share} from "../Share";

const sidebarLists: ListType[] = [
    {
        title: 'Menu',
        id: 'menu',
        items: [
            {title: 'Home'},
            {title: 'My Tasks'},
            {title: 'Notifications', count: '3'}
        ]
    },
    {
        title: 'Projects',
        id: 'projects',
        addition: '+ Add a Project',
        items: [
            {title: 'Dashboard UI Kit', icon: dashboardIcon},
            {title: 'CRM System', icon: crmIcon},
            {title: 'Website Redesign', icon: redesignIcon},
            {title: 'Communication Tool', icon: communicationIcon}
        ]
    },
    {
        title: 'Teams',
        id: 'teams',
        addition: '+ Add a Team',
        items: [
            {title: 'Designers', avatars: [designerAvatar1, designerAvatar2, designerAvatar3]},
            {title: 'Backend', avatars: [backenderAvatar1, backenderAvatar2]},
            {title: 'Frontend', avatars: [frontenderAvatar1, frontenderAvatar2, frontenderAvatar3, frontenderAvatar4]}
        ]
    }


]

const Layout = () => {
    const [task, setTask] = useState<TaskType>({
        title: 'Find top 5 customer requests',
        addedBy: 'Kristin A',
        createdAt: '07.01.2020',
        isChecked: false,
        assignTo: 'Linzell Bowman',
        dueOn: 'Tue, Dec 25',
        tag: 'marketing',
        followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
        description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Helena Brauer',
                profession: 'Designer',
                date: 'Yesterday at 12:37pm',
                text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
                avatar: commentAvatar3
            },
            {
                name: 'Prescott MacCaffery,',
                profession: 'Developer',
                date: 'Yesterday at 12:37pm',
                text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
                avatar: commentAvatar2
            }
        ],
        user: {avatar: userAvatar1},
        files: [{
            title: 'Redesign Brief',
            format: '.pdf',
            preview: filePreview,
            size: '159 kb',
            id: 1
        },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 2
            }]

    })

    const [isShowAddTask, setShowAddTask] = useState<boolean>(false)
    const [isShowAddProject, setShowAddProject] = useState<boolean>(false)
    const [backlogTasksList, setBacklogTasksList] = useState<TaskType[]>(backlogTasks)
    const [toDoTasksList, setToDoTasksList] = useState<TaskType[]>(todoTasks)
    const [sidebarItems, setProjectsList] = useState<ListType[]>(sidebarLists)
    const [isShowShare, setIsShowShare] = useState<boolean>(false)

    const addNewTaskToList = (task: TaskType, fieldsForCreateTask: FieldsForCreateTask, tasksList: TaskType[]): void => {

        const newTask = {
            ...task,
            title: fieldsForCreateTask.title,
            description: fieldsForCreateTask.description,
        }

        const newTasks = [...tasksList, newTask]
        setBacklogTasksList(newTasks)
        setToDoTasksList(newTasks)
        setShowAddTask(false)


    }

    const addNewProjectToList = (currentSidebarItems: ListType[], fieldsForCreateProject: FieldsForCreateProject, idForSidebarList: string): void => {

        const newProject: SidebarItem = {
            title: fieldsForCreateProject.title,
            avatars: [],
            icon: crmIcon,
            count: undefined
        }

        const newSidebarList: ListType[] = currentSidebarItems.map((list) => {
            if (list.id === idForSidebarList) {
                return {...list, items: [...list.items, newProject]}
            }
            return list
        })


        setProjectsList(newSidebarList)
        setShowAddProject(false)
    }


    return (
        <div className="container">

            <Sidebar
                onItemAddClick={() => setShowAddProject(true)}
                title={'Projectus'}
                icon={projectIcon}
                search={searchIcon}
                lists={sidebarItems}
                statistics={
                    {completed: 372, opened: 11}
                }/>

            <div className="main">
                <Header
                    icon={redesignIcon} creators={[userAvatar2, userAvatar3, userAvatar4]}
                    title={'Website Redesign'}
                    menu={['Tasks', 'Kanban', 'Activity', 'Calendar', 'Files']}
                    onShareWindowOpen={() => setIsShowShare(true)}
                />

                <div className="content">
                    <div className="tasksListBase">
                        <TasksList
                            onCreatedTaskClicked={() => setShowAddTask(true)}
                            title={'Backlog'}
                            tasks={backlogTasksList}
                            onTaskSelected={(task) => setTask(task)}
                        />

                        <TasksList
                            onCreatedTaskClicked={() => setShowAddTask(true)}
                            title={'To Do'}
                            tasks={toDoTasksList}
                            onTaskSelected={(task) => setTask(task)}/>
                    </div>


                    <Task task={task} onTaskUpdated={(newTask) => setTask(newTask)}/>
                </div>
            </div>
            <AddTask isOpen={isShowAddTask} onCancel={() => setShowAddTask(false)}
                     onSubmit={(fieldsForCreateTask) => addNewTaskToList(task, fieldsForCreateTask, backlogTasksList,)}/>
            <AddProject isOpen={isShowAddProject} onCancel={() => setShowAddProject(false)}
                        onSubmit={(fieldsForCreateProject, id) => addNewProjectToList(sidebarItems, fieldsForCreateProject, id)}/>
                        <Share isOpen={isShowShare} onCancel={() => setIsShowShare(false)}/>
        </div>
    )
}

export {Layout}
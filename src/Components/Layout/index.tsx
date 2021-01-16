import React from 'react'
import './style.css'
import {Sidebar} from '../Sidebar'
import {Header} from "../Header";
import {Button} from '../Button'
import {Tag} from '../Tag'
import {Avatar} from "../Avatar"
import {TaskCard} from '../TaskCard'
import {Checkbox} from "../Checkbox";
import {Task} from '../Task'
import {TasksList} from "../TasksList";
import {File} from '../File'
import {Comment} from '../Comment'

import {backlogTasks, todoTasks} from "./tasks";

import '../../html/style.css'
import '../../html/navigation/style.css'
import '../../html/task/style.css'


import projectIcon from '../Layout/pics/navigation-icon.svg'
import avatarHeader from '../Layout/pics/avatar.png'
import searchIcon from '../Layout/pics/search-icon.svg'
import ownerAvatar from '../Layout/pics/userpic.svg'
import dotsIcon from '../Layout/pics/dots.svg'
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
import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar2 from '../Layout/pics/userpic2.png'
import userAvatar3 from '../Layout/pics/userpic3.png'
import userAvatar4 from '../Layout/pics/userpic4.png'
import userAvatar5 from '../Layout/pics/userpic5.png'
import userAvatar6 from '../Layout/pics/userpic6.png'
import userAvatar7 from '../Layout/pics/userpic7.png'
import userAvatar8 from '../Layout/pics/userpic8.png'
import userAvatar9 from '../Layout/pics/userpic9.png'
import commentAvatar1 from '../Layout/pics/commentpic.png'
import commentAvatar3 from '../Layout/pics/commentpic2.png'
import commentAvatar2 from '../Layout/pics/commentpic3.png'
import filePreview from '../Layout/pics/file.png'


const Layout = () => {
    return (
        <div className="container">
            <aside className="navigation">
                <div className="navigation__head">

                    <span><img src={projectIcon} alt="icon"/> Projectus</span>

                    <button><img src={searchIcon} alt="icon"/></button>


                </div>
                <div className="navigation__userInfo">
                    <div className="navigation__avatar">
                        <Avatar size={"large"} src={ownerAvatar}/>
                    </div>
                    <div className="navigation__user">
                        <div className="navigation__whiteText">Emilee Simchenko</div>
                        <div className="navigation__greyText">Product Owner</div>
                    </div>
                    <button><img src={dotsIcon} alt="more"/></button>
                </div>

                <div className="navigation__stats">
                    <div className="navigation__completed">
                        <span className="navigation__whiteText">372</span><br/>
                        <span className="navigation__greyText">Completed Tasks</span>

                    </div>
                    <div className="navigation__open">
                        <span className="navigation__whiteText">1</span><br/>
                        <span className="navigation__greyText">Open Tasks</span>

                    </div>
                    <div className="navigation__open"></div>
                </div>
                <div className="navigation__menu">
                    <h4 className="navigation__greyText menu__title">Menu</h4>
                    <ul className="navigation__list">
                        <li><a className="navigation__link" href="">Home</a></li>
                        <li><a className="navigation__link" href="">My Tasks</a></li>
                        <li><a className="navigation__link" href="">Notifications<span
                            className="navigation__counter">3</span></a></li>
                    </ul>
                </div>

                <div className="navigation__menu">
                    <h4 className="navigation__greyText menu__title">Projects</h4>
                    <ul className="navigation__list">
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src={dashboardIcon} alt=""/>Dashboard
                            UI
                            Kit</a></li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src={crmIcon}
                                                                         alt=""/>CRM System</a></li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src={redesignIcon} alt=""/>Website
                            Redesign</a>
                        </li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src={communicationIcon} alt=""/>Communication
                            Tool</a></li>

                    </ul>
                    <h5 className="addProject"><a href="">+ Add a Project</a></h5>
                </div>

                <div className="navigation__menu">
                    <h4 className="navigation__greyText menu__title">Teams</h4>
                    <ul className="navigation__list">
                        <li>
                            <a className="navigation__link team" href="">
                                <span>Designers</span>
                                <span className="teamMembers">
                                    <Avatar size={"x-small"} src={designerAvatar1}/>
                                    <Avatar size={"x-small"} src={designerAvatar2}/>
                                    <Avatar size={"x-small"} src={designerAvatar3}/>
                                </span>
                            </a>
                        </li>
                        <li><a className="navigation__link team" href="">
                            <span>Backend</span>
                            <span><Avatar size={"x-small"} src={backenderAvatar1}/>
                            <Avatar size={"x-small"} src={backenderAvatar2}/>
                            </span>
                        </a>
                        </li>
                        <li>
                            <a className="navigation__link team" href="">
                                <span>Frontend</span>
                                <span className="teamMembers">
                                    <Avatar size={"x-small"} src={frontenderAvatar1}/>
                                    <Avatar size={"x-small"} src={frontenderAvatar2}/>
                                    <Avatar size={"x-small"} src={frontenderAvatar3}/>
                                    <Avatar size={"x-small"} src={frontenderAvatar4}/>
                                </span>
                            </a>
                        </li>


                    </ul>
                    <h5 className="addProject"><a href="">+ Add a Team</a></h5>
                </div>
                <footer className="navigation__invite">
                    <a href="#">Invite your team </a>and start collaborating!
                </footer>


            </aside>

            <div className="main">

                <Header header={{
                    creators: [userAvatar2, userAvatar3, userAvatar4],
                    icon: redesignIcon,
                    title: 'Website Redesign',
                    menu: ['Tasks', 'Kanban', 'Activity', 'Calendar', 'Files']
                }}/>

                <div className="content">
                    <div className="tasksListBase">
                        <TasksList title={'Backlog'} tasks={backlogTasks}/>
                        <TasksList title={'To Do'} tasks={todoTasks}/>
                    </div>

                    <Task task={{
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
                        user: {avatar: ownerAvatar},
                        files: [{
                            title: 'Redesign Brief',
                            format: '.pdf',
                            preview: filePreview,
                            size: '159 kb'
                        },
                            {
                                title: 'Header',
                                format: '.png',
                                preview: filePreview,
                                size: '129 kb'
                            }]
                    }}/>
                </div>
            </div>
        </div>
    )
}

export {Layout}
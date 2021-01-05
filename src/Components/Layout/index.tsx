import React from 'react'
import './style.css'
import {Sidebar} from '../Sidebar'
import {Header} from "../Header";
import {Button} from '../Button'
import {Tag} from '../Tag'
import {Avatar} from "../Avatar"
import {TaskCard} from '../TaskCard'
import {Checkbox} from "../Checkbox";

import {backlogTasks} from "./tasks";

import '../../html/style.css'
import '../../html/base/style.css'
import '../../html/header/style.css'
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
                <header className="mainMenu">
                    <div className="mainMenu__titleRow">
                        <div className="mainMenu__name">
                            <img src={redesignIcon} alt="icon"/>
                            <h1>Website Redesign</h1>
                            <button>🖊️</button>
                        </div>
                        <div className="mainMenu__creators">
                            <div className="avatar">
                                <Avatar size={"medium"} src={avatarHeader}/>
                                <Avatar size={"medium"} src={avatarHeader}/>
                                <Avatar size={"medium"} src={avatarHeader}/>
                            </div>
                            <div className="headerButtons">
                                <Button text="Share"/>
                                <Button backgroundColor="#FFF8DD" color="#FFC200" text="💬 Chat"/>
                            </div>
                        </div>
                    </div>
                    <div className="mainMenu__additionalMenu">
                        <a href="">Tasks</a>
                        <a href="">Kanban</a>
                        <a href="">Activity</a>
                        <a href="">Calendar</a>
                        <a href="">Files</a>
                    </div>
                </header>

                <div className="content">
                    <div className="base">
                        <div className="backlog">
                            <div className="backlog__title">
                                <h3>Backlog</h3>
                                <Button text="+ Add Task" backgroundColor="#CEF9C6" color="#1D201C" size="large"/>
                            </div>

                            {backlogTasks.map((task) => {
                                return <TaskCard title={task.title} user={task.user} taskType={task.type} taskTypeText={task.type}/>
                            })}

                        </div>

                        <div className="backlog">
                            <div className="backlog__title">
                                <h3>To Do</h3>
                                <Button text="+ Add Task" backgroundColor="#CEF9C6" color="#1D201C" size="large"/>
                            </div>
                            <TaskCard title={`An option to search in current projects or in all projects`}
                                      user={userAvatar9} taskType={`design`} taskTypeText={'Design'}/>
                            <TaskCard title={`Account for teams and personal in bottom style`} user={userAvatar5}
                                      taskType={`marketing`} taskTypeText={'Marketing'}/>
                            <TaskCard title={`Listing on Product Hunt so that we can reach as many potential users`}
                                      user={userAvatar6} taskType={`design`} taskTypeText={'Design'}/>
                        </div>
                    </div>

                    <div className="taskOpened">
                        <div className="taskOpened__header">
                            <header className="taskOpened__top">
                                <div className="taskOpened__head">
                                    <h3>Find top 5 customer requests</h3>
                                    <span>Added by Kristin A. yesterday at 12:44 pm</span>
                                </div>
                                <div className="taskOpened__buttons">
                                    <input type="checkbox" checked/>
                                    <button className="buttons__more"><a href="#"><img src="./navigation/dots.svg"
                                                                                       alt="more"/></a>
                                    </button>
                                </div>
                            </header>
                            <div className="taskOpened__info task__borderBottom">
                                <div className="taskOpened__asignTo">
                                    <div className="taskOpened__title"><span>Asign to</span></div>
                                    <a href="#"><Avatar size={"small"} src={userAvatar1}/>Linzell Bowman</a>
                                </div>
                                <div className="DueOn">
                                    <div className="taskOpened__title"><span>Due on</span></div>
                                    <span>Tue, Dec 25</span>
                                </div>
                                <div className="taskTag">

                                    <div className="taskOpened__title"><span>Tag</span></div>
                                    <Tag text='Marketing' type="marketing"/>
                                </div>
                                <div className="followers">
                                    <div className="taskOpened__title">
                                        <span>Followers</span>
                                    </div>
                                    <a href=""><Avatar size={"small"} src={userAvatar2}/></a>
                                    <a href=""><Avatar size={"small"} src={userAvatar3}/></a>
                                    <a href=""><Avatar size={"small"} src={userAvatar4}/></a>
                                    <a href=""><img src="./task/plus.svg" alt="pic"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <h4 className="taskOpened__title">Description</h4>
                            <p>Task Descriptions are used during project planning, project execution and project
                                control. During
                                project planning the task descriptions are used for scope planning and creating
                                estimates.
                                During project execution the task description is used by those doing the activities to
                                ensure
                                they are doing the work correctly.
                            </p>
                            <div className="task__files">
                                <div className="task__file">
                                    <div className="files__pdf"><span>PDF</span></div>
                                    <div>
                                        <div className="file__name">
                                            <span>Redesign Brief 2019.pdf</span>
                                        </div>
                                        <div><span className="file__weight">159 KB</span>
                                            <span className="file__delete">Delete</span></div>
                                    </div>
                                </div>
                                <div className="task__file">
                                    <div className="files__pdf"><img src="./task/fileIcon.svg" alt="file"/></div>
                                    <div>
                                        <div className="file__name">
                                            <span>Header.png</span>
                                        </div>
                                        <div><span className="file__weight">129 KB</span>
                                            <span className="file__delete">Delete</span></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="discussion">
                            <h4>Discussion</h4>
                            <div className="addComment">
                                <Avatar size={"large"} src={commentAvatar1}/>
                                <input type="text" className="commentArea" value="" placeholder="Add a comment..."/>
                            </div>
                            <div className="discussion__comment">

                                <div className="discussion__commentPic">
                                    <Avatar size={"large"} src={commentAvatar3}/>
                                </div>
                                <div>
                                    <div className="discussion__commentContent">
                                        <h5>Helena Brauer, Designer</h5>
                                        <span>Yesterday at 12:37pm</span>
                                    </div>
                                    <div>
                                        <span>During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="discussion__comment">

                                <div className="discussion__commentPic">
                                    <Avatar size={"large"} src={commentAvatar2}/>
                                </div>
                                <div>
                                    <div className="discussion__commentContent"><h5>Prescott MacCaffery,
                                        Developer</h5>
                                        <span>Yesterday at 12:37pm</span></div>
                                    <div>
                                        <span><span className="comment__mention">@Helena</span> Software quality assurance activity in which one or several humans check a program mainly </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Layout}
import React from 'react'
import './style.css'
import {Sidebar} from '../Sidebar'
import {Header} from "../Header";

import '../html/style.css'
import '../html/base/style.css'
import '../html/header/style.css'
import '../html/navigation/style.css'
import '../html/tag/style.css'
import '../html/task/style.css'

const Layout = () => {
    return (
        <div className="container">
            <aside className="navigation">
                <div className="navigation__head">

                    <span><img src="../html/navigation/navigation-icon.svg" alt="icon"/> Projectus</span>

                    <button><img src="../html/navigation/search-icon.svg" alt="icon"/></button>


                </div>
                <div className="navigation__userInfo">
                    <img src="./navigation/userpic.svg" alt="userpic"/>
                    <div className="navigation__user">
                        <span className="navigation__whiteText">Emilee Simchenko</span>
                        <span className="navigation__greyText">Product Owner</span>

                    </div>
                    <button><img src="./navigation/dots.svg" alt="more"/></button>

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
                                                                         src="./navigation/dashboard.svg" alt=""/>Dashboard
                            UI
                            Kit</a></li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src="./navigation/crm.svg"
                                                                         alt=""/>CRM System</a></li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src="./navigation/website.svg" alt=""/>Website
                            Redesign</a>
                        </li>
                        <li><a className="navigation__link" href=""><img className="navigation__link__img"
                                                                         src="./navigation/communication.svg" alt=""/>Communication
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
                                <span><img
                                    src="./navigation/designers1.svg" alt="pic"/>
                       <img src="./navigation/designers2.svg" alt="pic"/><img
                                        src="./navigation/designers3.svg" alt="pic"/></span>
                            </a>
                        </li>
                        <li><a className="navigation__link team" href="">
                            <span>Backend</span>
                            <span><img
                                src="./navigation/backend1.svg" alt="pic"/><img src="./navigation/backend2.svg"
                                                                                alt="pic"/></span>
                        </a>
                        </li>
                        <li>
                            <a className="navigation__link team" href="">
                                <span>Frontend</span>
                                <span><img
                                    src="./navigation/frontend1.svg" alt="pic"/>
                                <img src="./navigation/frontend2.svg"
                                     alt="pic"/>
                                     <img src="./navigation/frontend3.svg"
                                          alt="pic"/>
                                <img src="./navigation/frontend4.svg"
                                     alt="pic"/>
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
                            <img src="./project_icon.svg" alt="icon"/>
                            <h1>Website Redesign</h1>
                            <button>🖊️</button>
                        </div>
                        <div className="mainMenu__creators">
                            <div className="avatar">
                                <a href=""><img src="header/avatar.png" alt="Avatar"/></a>
                                <a href=""><img src="header/avatar.png" alt="Avatar"/></a>
                                <a href=""><img src="header/avatar.png" alt="Avatar"/></a>
                            </div>
                            <div className="headerButtons">
                                <button className="headerButton headerButton_share">Share</button>
                                <button className="headerButton headerButton_chat">💬Chat</button>
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
                                <button className="button_green backlog__button">+ Add Task</button>
                            </div>
                            <div className="backlog__item taskItem_grey">
                                <div>
                                    <button className="button_green backlog__check">
                                        <img src="./base/check.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>E-mail after registration so that I can confirm my address</span>

                                    <div className="taskItem__footer"><img src="./base/userpic1.png" alt="userpic"/>
                                        <a className="tag tag_orange" href="#">Development</a>
                                    </div>
                                </div>

                            </div>

                            <div className="backlog__item taskItem_yellow">
                                <div>
                                    <button className="button_white backlog__check">
                                        <img src="./base/checkgrey.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>Find top 5 customers and get reviews from them</span>

                                    <div className="taskItem__footer">
                                        <img src="./base/userpic2.png" alt="userpic"/>
                                        <a className="tag tag_violet" href="#">Marketing</a>
                                    </div>
                                </div>
                            </div>

                            <div className="backlog__item taskItem_grey">
                                <div>
                                    <button className="button_white backlog__check">
                                        <img src="./base/checkgrey.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>Two-factor authentication to make my private data more secure</span>

                                    <div className="taskItem__footer">
                                        <img src="./base/userpic2.png" alt="userpic"/>
                                        <a className="tag tag_blue" href="#">Design</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="backlog">
                            <div className="backlog__title">
                                <h3>To Do</h3>
                                <button className="button_green backlog__button">+ Add Task</button>
                            </div>
                            <div className="backlog__item taskItem_grey">
                                <div>
                                    <button className="button_white backlog__check">
                                        <img src="./base/checkgrey.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>An option to search in current projects or in all projects </span>

                                    <div className="taskItem__footer">
                                        <img src="./base/userpic4.png" alt="userpic"/>
                                        <a className="tag tag_blue" href="#">Design</a>
                                    </div>
                                </div>

                            </div>

                            <div className="backlog__item taskItem_yellow">
                                <div>
                                    <button className="button_white backlog__check">
                                        <img src="./base/checkgrey.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>Acoount for teams and personal in bottom style</span>

                                    <div className="taskItem__footer">
                                        <img src="./base/userpic5.png" alt="userpic"/>
                                        <a className="tag tag_violet" href="#">Marketing</a>
                                    </div>
                                </div>
                            </div>

                            <div className="backlog__item taskItem_grey">
                                <div>
                                    <button className="button_white backlog__check">
                                        <img src="./base/checkgrey.svg" alt="check"/>
                                    </button>
                                </div>
                                <div className="backlog__taskTag">
                                    <span>Listing on Product Hunt so that we can reach as many potential users</span>

                                    <div className="taskItem__footer">
                                        <img src="./base/userpic6.png" alt="userpic"/>
                                        <a className="tag tag_blue" href="#">Design</a>
                                    </div>
                                </div>
                            </div>
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
                                    <a href="#"><img src="./base/userpic1.png" alt="pic"/>Linzell Bowman</a>
                                </div>
                                <div className="DueOn">
                                    <div className="taskOpened__title"><span>Due on</span></div>
                                    <span>Tue, Dec 25</span>
                                </div>
                                <div className="taskTag">

                                    <div className="taskOpened__title"><span>Tag</span></div>
                                    <a className="task__tag tag tag_violet">Marketing</a>
                                </div>
                                <div className="followers">
                                    <div className="taskOpened__title"><span>Followers</span></div>
                                    <a href=""><img src="./task/userpic2.png" alt="pic"/></a>
                                    <a href=""><img src="./task/userpic3.png" alt="pic"/></a>
                                    <a href=""><img src="./task/userpic4.png" alt="pic"/></a>
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
                                <img src="./task/commentpic.png" alt="userpic"/>
                                <input type="text" className="commentArea" value="" placeholder="Add a comment..."/>
                            </div>
                            <div className="discussion__comment">
                                <img className="discussion__commentPic" src="./task/commentpic2.png" alt="usepic"/>
                                <div>
                                    <div className="discussion__commentContent"><h5>Helena Brauer, Designer</h5>
                                        <span>Yesterday at 12:37pm</span></div>
                                    <div>
                                        <span>During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="discussion__comment">
                                <img className="discussion__commentPic" src="./task/commentpic3.png" alt="usepic"/>
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
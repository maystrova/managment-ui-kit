import React from "react";
import './style.css'
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import userAvatar1 from "../Layout/pics/userpic1.png";
import {Tag} from "../Tag";
import {Comment} from "../Comment";
import {TaskType} from "./types";
import {AddComment} from "../AddComment";

interface TaskProps {
    task: TaskType
}

const Task = ({task}: TaskProps) => {
    return (
        <div className='task'>
            <header className='task__header'>
                <div>
                    <h2>{task.title}</h2>
                    <span>Added by {task.addedBy} {task.createdAt}</span>
                </div>
                <div>
                    <Checkbox/>
                </div>
            </header>
            <div className='task__information'>
                <div className='task__information-asignTo'>
                    <h5>Asign to</h5>
                    <div className='task__information-asignTo-user'>
                        <Avatar size={"x-small"} src={userAvatar1}/>
                        <span className='task__information-asignTo-name'>{task.assignTo}</span>
                    </div>

                </div>
                <div className='task__information-date'>
                    <h5>Due on</h5>
                    <div>{task.dueOn}</div>
                </div>
                <div className='task__information-tag'>
                    <h5>Tag</h5>
                    <Tag text={task.tag} type={task.tag}/>
                </div>
                <div className="task__information-followers">
                    <h5>Followers</h5>
                    {task.followers.map((follower) => <Avatar size={"x-small"} src={follower}/>)}
                </div>
            </div>

            <div className="task__description">
                <h5 className="task__title">Description</h5>
                <p>{task.description}
                </p>
            </div>
            <div className="task__discussion">
                <h5>Discussion</h5>
                <div className='task__discussion-addComment'>
                    <AddComment userpic={task.user.avatar}/>
                </div>
                <div className='task__discussion-comments'>
                    {task.discussions.map(({name, profession, date, text, avatar}) => (
                        <Comment
                            name={name}
                            profession={profession}
                            date={date}
                            text={text}
                            avatar={avatar}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export {Task}
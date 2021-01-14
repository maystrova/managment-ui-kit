import React from "react";
import './style.css'
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import userAvatar1 from "../Layout/pics/userpic1.png";
import {Tag} from "../Tag";
import {Comment} from "../Comment";
import {TaskType} from "./types";
import {AddComment} from "../AddComment";
import {File} from "../File";
import {FileType} from "../File/type";

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
                    <h4>Asign to</h4>
                    <div className='task__information-asignTo-user'>
                        <Avatar size={"x-small"} src={userAvatar1}/>
                        <span className='task__information-asignTo-name'>{task.assignTo}</span>
                    </div>

                </div>
                <div className='task__information-date'>
                    <h4>Due on</h4>
                    <div>{task.dueOn}</div>
                </div>
                <div className='task__information-tag'>
                    <h4>Tag</h4>
                    <Tag text={task.tag} type={task.tag}/>
                </div>
                <div className="task__information-followers">
                    <h4>Followers</h4>
                    {task.followers.map((follower) => <Avatar size={"x-small"} src={follower}/>)}
                </div>
            </div>

            <div className="task__description">
                <h4 className="task__description-title">Description</h4>
                <p className='task__description-content'>{task.description}
                </p>
                <div className="task__description-files">
                    {task.files.map(({title, preview, format, size}) => (
                        <File
                            preview={preview}
                            title={title}
                            format={format}
                            size={size}
                        />
                    ))}
                </div>
            </div>

            <div className="task__discussion">
                <h4>Discussion</h4>
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
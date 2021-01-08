import React from "react";
import './style.css'
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import userAvatar1 from "../Layout/pics/userpic1.png";
import {Tag} from "../Tag";
import userAvatar2 from "../Layout/pics/userpic2.png";
import userAvatar3 from "../Layout/pics/userpic3.png";
import userAvatar4 from "../Layout/pics/userpic4.png";
import {Comment} from "../Comment";
import {TaskType} from "./types";

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
                <Avatar size={"x-small"} src={userAvatar1}/>
                <span>{task.assignTo}</span>
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
                {task.followers.map((follower) => <Avatar size={"x-small"} src={userAvatar2}/>)}
            </div>
        </div>

        <div className="task__description">
            <h4 className="task__title">Description</h4>
            <p>{task.description}
            </p>
        </div>
        <div className="task__comments">
            {task.discussion.map((comment) => <Comment title={'Helena Brauer, Designer'} date={'Yesterday at 12:37pm'} text={'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'}/>,
                <Comment title={'Prescott MacCaffery, Developer'} date={'Yesterday at 12:37pm'} text={'Software quality assurance activity in which one or several humans check a program mainly'}/>) }
        </div>
    </div>
    )
}

export {Task}
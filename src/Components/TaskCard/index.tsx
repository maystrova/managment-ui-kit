import React from "react";
import './style.css';
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";

interface TaskCardProps {
    title: string
    user: string
    taskType: any
    taskTypeText: string
}

const TaskCard = ({title, user, taskType, taskTypeText}: TaskCardProps) => {
    return (
        <div className="TaskCard">
            <Checkbox/>
            <p>{title}</p>
            <Avatar src={user} size="x-small"/>
            <Tag type={taskType} text={taskTypeText}/>
        </div>
    )
}

export {TaskCard}
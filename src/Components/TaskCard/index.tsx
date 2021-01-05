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
        <div className="taskCard">
            <header className="taskCard__header">
                <div className="taskCard__checkbox">
                    <Checkbox/>
                </div>
                <p>{title}</p>
            </header>
            
            <footer className='taskCard__footer'>
                <div className="taskCard__user">
                    <Avatar src={user} size="x-small"/>
                </div>
                <Tag type={taskType} text={taskTypeText}/>
            </footer>
        </div>
    )
}

export {TaskCard}
import React from "react";
import './style.css';
import {Checkbox} from "../Checkbox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";
import {TaskType} from "../Task/types";

interface TaskCardProps extends TaskType {
    onClick: () => void
}

const TaskCard = ({title, user, files, discussions, description, assignTo, followers, tag, dueOn, createdAt, addedBy, isChecked, onClick}: TaskCardProps) => {
    return (
        <div className="taskCard" onClick={onClick}>
            <header className="taskCard__header">
                <div className="taskCard__checkbox">
                    <Checkbox/>
                </div>
                <p>{title}</p>
            </header>

            <footer className='taskCard__footer'>
                <div className="taskCard__user">
                    <Avatar src={user.avatar} size="x-small"/>
                </div>
                <Tag type={tag} text={tag}/>
            </footer>
        </div>
    )
}

export {TaskCard}
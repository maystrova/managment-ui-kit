import React from "react";
import './style.css'
import {Button} from "../Button";
import {backlogTasks, Task} from "../Layout/tasks";
import {TaskCard} from "../TaskCard";

interface TasksListProps {
    title: string
    tasks: Task[]
}

const TasksList = ({title, tasks}: TasksListProps) => {
    return (
        <div className='tasksList'>
            <header className='tasksList__header'>
                <h2>{title}</h2>
                <Button text="+ Add Task" backgroundColor="#CEF9C6" color="#1D201C" size="large"/>
            </header>
            {tasks.map((task) => {
                return <TaskCard title={task.title} user={task.user} taskType={task.type} taskTypeText={task.type}/>
            })}


        </div>
    )

}

export {TasksList}

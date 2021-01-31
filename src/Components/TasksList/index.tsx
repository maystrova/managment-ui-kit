import React from "react";
import './style.css'
import {Button} from "../Button";
import {TaskType} from "../Task/types";
import {TaskCard} from "../TaskCard";

interface TasksListProps {
    title: string
    tasks: TaskType[]
    onTaskSelected: (task: TaskType) => void
    onCreatedTaskClicked: () => void


}

const TasksList = ({title, tasks, onTaskSelected, onCreatedTaskClicked}: TasksListProps) => {
    return (
        <div className='tasksList'>
            <header className='tasksList__header'>
                <h2>{title}</h2>
                <Button onClick={() => onCreatedTaskClicked()} text="+ Add Task" backgroundColor="#CEF9C6"
                        color="#1D201C" size="large"/>
            </header>

            {tasks.map((task) => {
                return (
                    <TaskCard title={task.title}
                              user={task.user}
                              addedBy={task.addedBy}
                              assignTo={task.assignTo}
                              createdAt={task.createdAt}
                              description={task.description}
                              discussions={task.discussions}
                              dueOn={task.dueOn}
                              files={task.files}
                              followers={task.followers}
                              isChecked={task.isChecked}
                              tag={task.tag}
                              onClick={() => onTaskSelected(task)}
                              key={title}
                    />
                )
            })}
        </div>
    )

}

export {TasksList}

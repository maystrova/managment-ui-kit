import React from "react";
import './style.css'

export interface StatisticsProps {
    completed: number
    opened: number
}

const Statistics = ({completed, opened} : StatisticsProps) => {
    return (
        <div className='Statistics'>
            <div className="Statistics__completed">
                <div className='Statistics__count'>{completed}</div>
                <div className='Statistics__title'>Completed Tasks</div>
            </div>
            <div className="Statistics__opened">
                <div className='Statistics__count'>{opened}</div>
                <div className='Statistics__title'>Opened Tasks</div>
            </div>
        </div>
    )
}

export {Statistics}
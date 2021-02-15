import React from 'react'
import {
    StyledStatistics,
    StyledStatisticsCompleted,
    StyledStatisticsCount,
    StyledStatisticsTitle,
} from './style'

export interface StatisticsProps {
    completed: number
    opened: number
}

const Statistics = ({ completed, opened }: StatisticsProps) => {
    return (
        <StyledStatistics>
            <StyledStatisticsCompleted>
                <StyledStatisticsCount>{completed}</StyledStatisticsCount>
                <StyledStatisticsTitle>Completed Tasks</StyledStatisticsTitle>
            </StyledStatisticsCompleted>
            <div>
                <StyledStatisticsCount>{opened}</StyledStatisticsCount>
                <StyledStatisticsTitle>Opened Tasks</StyledStatisticsTitle>
            </div>
        </StyledStatistics>
    )
}

export { Statistics }

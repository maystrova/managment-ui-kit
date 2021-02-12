import React from 'react'
import './style.scss'

export interface StatisticsProps {
	completed: number
	opened: number
}

const Statistics = ({ completed, opened }: StatisticsProps) => {
	return (
		<div className='Statistics'>
			<div className='Statistics__Completed'>
				<div className='Statistics__Count'>{completed}</div>
				<div className='Statistics__Title'>Completed Tasks</div>
			</div>
			<div className='Statistics__Opened'>
				<div className='Statistics__Count'>{opened}</div>
				<div className='Statistics__Title'>Opened Tasks</div>
			</div>
		</div>
	)
}

export { Statistics }

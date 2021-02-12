import React from 'react'
import './style.scss'
import { Checkbox } from '../Checkbox'
import { Avatar } from '../Avatar'
import { Tag } from '../Tag'
import { TaskType } from '../Task/types'

interface TaskCardProps extends TaskType {
	onClick: () => void
}

const TaskCard = ({
	title,
	user,
	files,
	discussions,
	description,
	assignTo,
	followers,
	tag,
	dueOn,
	createdAt,
	addedBy,
	isChecked,
	onClick,
}: TaskCardProps) => {
	return (
		<div className='TaskCard' onClick={onClick}>
			<header className='TaskCard__Header'>
				<div className='TaskCard__Checkbox'>
					<Checkbox />
				</div>
				<p>{title}</p>
			</header>

			<footer className='TaskCard__Footer'>
				<div className='TaskCard__User'>
					<Avatar src={user.avatar} size='x-small' />
				</div>
				<Tag type={tag} text={tag} />
			</footer>
		</div>
	)
}

export { TaskCard }

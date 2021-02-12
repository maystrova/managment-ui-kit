import React from 'react'
import './style.scss'
import { Avatar } from '../Avatar'
import { DiscussionType } from '../Task/types'

const Comment = ({ name, profession, date, text, avatar }: DiscussionType) => {
	return (
		<div className='Comment'>
			<div className='Comment__Avatar'>
				<Avatar size={'large'} src={avatar} />
			</div>
			<div className='Comment__Header'>
				<span>
					<span className='Comment__Header-name'>{name}</span>, {profession}
				</span>
				<span>{date}</span>
			</div>
			<div className='Comment__Content'>
				<p>{text}</p>
			</div>
		</div>
	)
}

export { Comment }

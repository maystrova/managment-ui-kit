import React from 'react'
import './style.scss'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'
import dotsIcon from '../Layout/pics/dots.svg'

interface UserInfoProps {
	avatar: string
	name: string
	profession: string
}

const UserInfo = ({ avatar, name, profession }: UserInfoProps) => {
	return (
		<div className='UserInfo'>
			<div className='UserInfo__Information'>
				<div className='UserInfo__Avatar'>
					<Avatar size={'large'} src={avatar} />
				</div>
				<div className='UserInfo__Information-person'>
					<div className='UserInfo__Information-name'>{name}</div>
					<div className='UserInfo__Information-profession'>{profession}</div>
				</div>
			</div>
			<div className='UserInfo__More'>
				<a href='#'>
					<Icon size={'small'} src={dotsIcon} />
				</a>
			</div>
		</div>
	)
}

export { UserInfo }

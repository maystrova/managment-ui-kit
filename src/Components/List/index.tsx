import React from 'react'
import './style.scss'

import { ListType } from './types'

interface ListProps extends ListType {
	onAdditionalClick: () => void
}

const List = ({ items, addition, title, onAdditionalClick }: ListProps) => {
	return (
		<div className='List'>
			<span className='List__Title'>{title}</span>
			<div className='List__Items'>
				<ul className='List__Items-block'>
					{items.map(item => (
						<li className='List__Items-string'>
							<a className='List__Items-link' href='#'>
								{item.icon && (
									<img
										className='List__Items-link-icon'
										src={item.icon}
										alt='icon'
									/>
								)}
								{item.title}
								{item.avatars?.map(avatar => (
									<img
										className='List__Items-link-avatar'
										src={avatar}
										alt='avatar'
									/>
								))}
								{item.count && <span className='List__Items-count'>3</span>}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div>
				<button
					onClick={() => {
						onAdditionalClick()
					}}
					className='List__Items-addition'
				>
					{addition}
				</button>
			</div>
		</div>
	)
}

export { List }

import React from 'react'
import './style.css'
import { Button } from '../Button'

export interface ModalWindowProps {
	isOpen: boolean
	onCancel: () => void
	title: string
	children: React.ReactChild | React.ReactChildren
	footer?: React.ReactChild | React.ReactChildren
}

const ModalWindow = ({
	isOpen,
	onCancel,
	title,
	children,
	footer,
}: ModalWindowProps) => {
	if (!isOpen) return null

	return (
		<div className='Modal'>
			<div className='Modal__Overlay' onClick={onCancel}></div>
			<div className='ModalWindow'>
				<header className='Modal__Header'>
					<div className='Modal__Header-title'>{title}</div>
					<div className='Modal__Header-close' onClick={onCancel}>
						&#10008;
					</div>
				</header>
				<div className='Modal__Body'>{children}</div>
				<footer className='Modal__Footer'>{footer}</footer>
			</div>
		</div>
	)
}

export { ModalWindow }

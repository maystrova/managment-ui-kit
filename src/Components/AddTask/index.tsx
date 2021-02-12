import React, { useState } from 'react'
import './style.css'
import { Button } from '../Button'
import { ModalWindow } from '../ModalWindow'

export interface FieldsForCreateTask {
	title: string
	description: string
}

export interface ModalWindowProps {
	isOpen: boolean
	onCancel: () => void
	onSubmit: (fieldsForCreateTask: FieldsForCreateTask) => void
}

const AddTask = ({ onCancel, onSubmit, isOpen }: ModalWindowProps) => {
	const [
		fieldsForCreateTask,
		setFieldsForCreateTask,
	] = useState<FieldsForCreateTask>({ title: '', description: '' })

	return (
		<ModalWindow
			footer={
				<footer className='AddTask__ModalFooter'>
					<Button
						backgroundColor={'#EAEAEA'}
						size={'medium'}
						onClick={onCancel}
						text={'Cancel'}
					/>
					<Button
						backgroundColor={'rgb(206, 249, 198)'}
						size={'medium'}
						onClick={() => {
							onSubmit(fieldsForCreateTask)
							setFieldsForCreateTask({ title: '', description: '' })
						}}
						text={'Add a Task'}
					/>
				</footer>
			}
			isOpen={isOpen}
			onCancel={onCancel}
			title={'Add a Task'}
		>
			<div className='AddTask__ModalBody'>
				<input
					className='AddTask__addTitle AddTask__addText'
					type='text'
					placeholder={'Add a title...'}
					value={fieldsForCreateTask.title}
					onChange={event => {
						setFieldsForCreateTask({
							title: event.target.value,
							description: fieldsForCreateTask.description,
						})
					}}
				/>
				<input
					className='AddTask__addDescription AddTask__addText'
					type='text'
					value={fieldsForCreateTask.description}
					placeholder={'Add a description...'}
					onChange={event => {
						setFieldsForCreateTask({
							description: event.target.value,
							title: fieldsForCreateTask.title,
						})
					}}
				/>
			</div>
		</ModalWindow>
	)
}

export { AddTask }

import React, { useState } from 'react'
import './style.scss'
import { Button } from '../Button'
import { ModalWindow, ModalWindowProps } from '../ModalWindow'

export interface FieldsForCreateProject {
	title: string
}

export interface AddProjectProps {
	isOpen: boolean
	onCancel: () => void
	onSubmit: (fieldsForCreateProject: FieldsForCreateProject, id: string) => void
}

const AddProject = ({ onCancel, onSubmit, isOpen }: AddProjectProps) => {
	const [
		fieldsForAddProject,
		setFieldsForCreateProject,
	] = useState<FieldsForCreateProject>({ title: '' })

	return (
		<ModalWindow
			footer={
				<div className='AddProject__ModalFooter'>
					<Button
						backgroundColor={'#EAEAEA'}
						onClick={onCancel}
						size={'medium'}
						text={'Cancel'}
					/>
					<Button
						backgroundColor={'rgb(206, 249, 198)'}
						size={'medium'}
						text={'Add a Project'}
						onClick={() => {
							onSubmit(fieldsForAddProject, 'projects')
							setFieldsForCreateProject({ title: '' })
						}}
					/>
				</div>
			}
			isOpen={isOpen}
			onCancel={onCancel}
			title={'Add a Project'}
		>
			<div className='AddProject__ModalBody'>
				<input
					onKeyDown={event => {
						if (event.key === 'Enter') {
							onSubmit(fieldsForAddProject, 'projects')
						}
					}}
					className='AddProject__AddTitle'
					type='text'
					placeholder={'Add a Project Name'}
					value={fieldsForAddProject.title}
					onChange={event => {
						setFieldsForCreateProject({
							title: event.target.value,
						})
					}}
				/>
			</div>
		</ModalWindow>
	)
}

export { AddProject }

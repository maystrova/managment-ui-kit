import React from 'react'
import './style.scss'
import { FileType } from '../File/type'
import { Button } from '../Button'

interface FileProps extends FileType {
	onFileDelete: (fileId: number) => void
}

const File = ({
	title,
	onFileDelete,
	size,
	preview,
	format,
	id,
}: FileProps) => {
	return (
		<div className='File'>
			<div className='File__Preview'>
				<img src={preview} alt='preview' />
			</div>
			<div className='File__Information'>
				<span className='File__Information-header'>
					{title}
					{format}
				</span>
				<div className='File__Information-footer'>
					<span className='File__Information-size'>{size}</span>
					<Button
						onClick={() => onFileDelete(id)}
						text={'Delete'}
						size={'small'}
					/>
				</div>
			</div>
		</div>
	)
}

export { File }

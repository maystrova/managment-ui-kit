import React from 'react'
import { FileType } from './type'
import { Button, BUTTON_SIZE } from '../Button'
import { StyledFile, StyledFilePreview, StyledFileSizeInfo } from './style'

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
        <StyledFile>
            <StyledFilePreview>
                <img src={preview} alt='preview' />
            </StyledFilePreview>
            <div>
                <span>
                    {title}
                    {format}
                </span>
                <div>
                    <StyledFileSizeInfo>{size}</StyledFileSizeInfo>
                    <Button
                        onClick={() => onFileDelete(id)}
                        text={'Delete'}
                        size={BUTTON_SIZE.SMALL}
                    />
                </div>
            </div>
        </StyledFile>
    )
}

export { File }

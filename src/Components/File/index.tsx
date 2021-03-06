import React from 'react'
import { FileType } from './types'
import { Button, BUTTON_SIZE } from '../Button'
import {
    StyledFile,
    StyledFilePreview,
    StyledFileSizeInfo,
    StyledFileDate,
} from './style'

interface FileProps extends FileType {
    onFileDelete: (fileId: string) => void
}

const File = ({
    title,
    onFileDelete,
    size,
    preview,
    format,
    id,
    date,
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
                <StyledFileDate>{date}</StyledFileDate>
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

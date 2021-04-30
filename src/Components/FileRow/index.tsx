import React, { useState } from 'react'
import { Tag, TAG_TYPE } from '../Tag'
import {
    StyledFileRowActionsButton,
    StyledFileRowDownload,
    StyledFileRowPreview,
    StyledFileRowUploadedBy,
    StyledFileRowDeleteFileButton,
    StyledFileRowActions,
} from './style'
import { StyledFilesPageItems } from '../../Pages/FilesPage/style'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import arrow from './Arrow.svg'
import download from './Download.svg'
import { Button, BUTTON_SIZE } from '../Button'

interface FileRowProps {
    image: string
    name: string
    size: string
    uploadedBy?: string
    tag: TAG_TYPE
    date: string | undefined
    avatar?: string
    onFileDelete: () => void
    onDownload: () => void
}

const FileRow = ({
    image,
    date,
    name,
    size,
    tag,
    uploadedBy,
    avatar,
    onFileDelete,
    onDownload,
}: FileRowProps) => {
    const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false)

    return (
        <StyledFilesPageItems>
            <StyledFileRowPreview>
                <img src={image} alt='preview' />
            </StyledFileRowPreview>
            <div>{name}</div>
            <div>{size}</div>
            <StyledFileRowUploadedBy>
                <Avatar size={AVATAR_SIZE.X_SMALL} src={avatar || ''} />
                {uploadedBy}
            </StyledFileRowUploadedBy>
            <div>
                <Tag text={tag} type={tag} />
            </div>
            <div>{date}</div>
            <StyledFileRowActions>
                <StyledFileRowActionsButton
                    onClick={() => setShowDeleteButton(true)}
                >
                    <div>
                        <span>Actions</span>
                        <img src={arrow} alt={'more'} />
                    </div>
                </StyledFileRowActionsButton>
                {showDeleteButton && (
                    <StyledFileRowDeleteFileButton>
                        <Button
                            onClick={() => onFileDelete()}
                            text={'Delete'}
                            size={BUTTON_SIZE.MEDIUM}
                            backgroundColor={'transparent'}
                            color={'red'}
                        />
                    </StyledFileRowDeleteFileButton>
                )}
            </StyledFileRowActions>
            <div>
                <a href={image} target='_blank'>
                    <img src={download} alt='download' />
                </a>
            </div>
        </StyledFilesPageItems>
    )
}

export { FileRow }

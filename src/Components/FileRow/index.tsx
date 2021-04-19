import React from 'react'
import { Tag, TAG_TYPE } from '../Tag'
import {
    StyledFileRowPreview,
    StyledFileRowUploadedBy,
    StyledFileRowActions,
    StyledFileRowDownload,
} from './style'
import { StyledFilesPageItems } from '../../Pages/FilesPage/style'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import arrow from './Arrow.svg'
import download from './Download.svg'

interface FileRowProps {
    image: string
    name: string
    size: string
    uploadedBy?: string
    tag: TAG_TYPE
    date: string | undefined
    avatar?: string
    onButtonClick: () => void
}

const FileRow = ({
    image,
    date,
    name,
    size,
    tag,
    uploadedBy,
    avatar,
    onButtonClick,
}: FileRowProps) => {
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
            <div>
                <StyledFileRowActions onClick={onButtonClick}>
                    <div>
                        <span>Actions</span>
                        <img src={arrow} alt={'more'} />
                    </div>
                </StyledFileRowActions>
            </div>
            <div>
                <StyledFileRowDownload>
                    <img src={download} alt='download' />
                </StyledFileRowDownload>
            </div>
        </StyledFilesPageItems>
    )
}

export { FileRow }

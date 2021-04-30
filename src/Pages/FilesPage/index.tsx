import React, { useEffect, useState } from 'react'
import {
    StyledFilesPage,
    StyledFilesPageHeader,
    StyledFilesPageItems,
} from './style'
import { deleteFileFromTask, getAllFiles } from 'services/file'
import { User } from 'services/user'
import { FileType } from 'Components/File/types'
import { FileRow } from 'Components/FileRow'
import { TAG_TYPE } from 'Components/Tag'

export interface FilesPageProps {
    user: User | null
}

const FilesPage = ({ user }: FilesPageProps) => {
    const [files, setFiles] = useState<FileType[]>([])

    const getFiles = async (user: User) => {
        const files = await getAllFiles(user)
        setFiles(files)
    }

    const onFileDelete = async (
        taskId: string,
        fileIdForDelete: string,
        user: User,
    ): Promise<void> => {
        try {
            await deleteFileFromTask(taskId, fileIdForDelete, user)
            await getFiles(user)
        } catch (errors) {
            console.log('Delete file', errors)
        }
    }

    const onFileDownload = () => {
        window.open('')
    }

    useEffect(() => {
        if (user) getFiles(user)
    }, [user])

    return (
        <StyledFilesPage>
            <StyledFilesPageHeader>
                <StyledFilesPageItems>
                    <div>Image</div>
                    <div>Name</div>
                    <div>Size</div>
                    <div>Uploaded by</div>
                    <div>Tag</div>
                    <div>Date</div>
                </StyledFilesPageItems>
            </StyledFilesPageHeader>
            {files.map(file => (
                <FileRow
                    onDownload={onFileDownload}
                    onFileDelete={() => {
                        if (user) {
                            return onFileDelete(file.taskId, file.id, user)
                        }
                    }}
                    avatar={user?.avatarUrl}
                    key={file.id}
                    image={file.preview}
                    name={file.title}
                    size={file.size}
                    uploadedBy={user?.fullName}
                    tag={TAG_TYPE.DEVELOPMENT}
                    date={file.date}
                />
            ))}
        </StyledFilesPage>
    )
}

export { FilesPage }

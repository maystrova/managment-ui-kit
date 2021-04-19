import React, { useEffect, useState } from 'react'
import {
    StyledFilesPage,
    StyledFilesPageHeader,
    StyledFilesPageItems,
} from './style'
import { getAllFiles } from 'services/files'
import { User } from 'services/user'
import { FileType } from '../../Components/File/type'
import { FileRow } from '../../Components/FileRow'
import { TAG_TYPE } from '../../Components/Tag'

export interface FilesPageProps {
    user: User | null
}

const FilesPage = ({ user }: FilesPageProps) => {
    const [files, setFiles] = useState<FileType[]>([])

    const getFiles = async (user: User) => {
        const files = await getAllFiles(user)
        setFiles(files)
    }

    console.log(files)

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
                    onButtonClick={() => {}}
                    avatar={user?.avatarUrl}
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

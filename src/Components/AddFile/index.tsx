import React, { useState } from 'react'

import { storage } from 'services/firebase'
import { writeFile } from 'services/file'
import { User } from 'services/user'

import { Uploading } from '../Uploading'
import { ModalWindow } from '../ModalWindow'
import { FileType } from 'Components/File/types'
import { Button, BUTTON_SIZE } from '../Button'

import { StyledAddFile, StyledAddFileFooter } from './style'

export interface AddFileProps {
    onCancel: () => void
    onSubmit: () => void
    taskId: string
    user: User
}

const AddFile = ({ onCancel, onSubmit, taskId, user }: AddFileProps) => {
    const [drag, setDrag] = useState<boolean>(false)
    const [files, setFiles] = useState<FileType[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const onDragStart = (e: any): void => {
        e.preventDefault()
        setDrag(true)
    }

    const onDragLeave = (e: any): void => {
        e.preventDefault()
        setDrag(false)
    }

    const uploadFiles = async (files: File[]): Promise<FileType[]> => {
        let filesData: FileType[] = []

        setLoading(true)

        for (const file of files) {
            const snapshot = await storage
                .ref()
                .child(`/taskFiles/${file.name}`)
                .put(file)

            const fileUrl = await snapshot.ref.getDownloadURL()
            const fileMetaData = await snapshot.ref.getMetadata()

            const { protocol, host, pathname } = new URL(fileUrl)
            const preparedFile: FileType = {
                preview: `${protocol}//${host}${pathname}?alt=media`,
                title: fileMetaData.name,
                size: `${fileMetaData.size.toString()} KB`,
                format: '',
                id: parseInt(fileMetaData.generation),
                date: `${new Date(Date.now()).toDateString()}`,
                taskId: taskId,
            }
            filesData.push(preparedFile)
        }

        return filesData
    }

    const writeFilesToFireStore = async (
        files: FileType[],
        user: User,
    ): Promise<void> => {
        for (const file of files) {
            try {
                await writeFile(file, user)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const uploadFilesHandler = async (files: File[], user: User) => {
        const filesData = await uploadFiles(files)
        await writeFilesToFireStore(filesData, user)
        setFiles(filesData)

        setLoading(false)
        setDrag(false)
    }

    const onDrop = async (e: any): Promise<void> => {
        e.preventDefault()
        let files = e.dataTransfer.files
        await uploadFilesHandler(files, user)
    }

    const onUploadClick = async (e: any): Promise<void> => {
        let files = e.target.files
        await uploadFilesHandler(files, user)
    }

    return (
        <ModalWindow
            isOpen
            onCancel={onCancel}
            title={'Add a File'}
            children={
                <div>
                    <StyledAddFile
                        onDragStart={onDragStart}
                        onDragLeave={onDragLeave}
                        onDragOver={onDragStart}
                        onDrop={onDrop}
                    >
                        {Boolean(files.length) &&
                            files.map(file => (
                                <img
                                    width={50}
                                    src={file.preview}
                                    alt='image'
                                    key={file.id}
                                />
                            ))}
                        {drag ? (
                            !isLoading && (
                                <span>Release files to download...</span>
                            )
                        ) : (
                            <div
                                onDragStart={onDragStart}
                                onDragLeave={onDragLeave}
                                onDragOver={onDragStart}
                            >
                                {Boolean(files.length) ||
                                    (!isLoading && (
                                        <span>Drag files here...</span>
                                    ))}
                            </div>
                        )}

                        {isLoading && <Uploading />}
                    </StyledAddFile>
                </div>
            }
            footer={
                <StyledAddFileFooter>
                    {Boolean(files.length) || (
                        <input type='file' onChange={onUploadClick} />
                    )}

                    {Boolean(files.length) && (
                        <StyledAddFileFooter>
                            <Button
                                text={'Upload to task'}
                                backgroundColor={'#CEF9C6'}
                                size={BUTTON_SIZE.LARGE}
                                onClick={onSubmit}
                            />
                        </StyledAddFileFooter>
                    )}
                </StyledAddFileFooter>
            }
        />
    )
}

export { AddFile }

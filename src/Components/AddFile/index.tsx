import React, { useState } from 'react'
import { ModalWindow } from '../ModalWindow'
import { StyledAddFile, StyledAddFileFooter } from './style'
import { storage } from 'services/firebase'
import { Uploading } from '../Uploading'
import { FileType } from '../File/type'
import { Button, BUTTON_SIZE } from '../Button'

export interface AddFileProps {
    onCancel: () => void
    onSubmit: (filesUrls: FileType[]) => void
}

const AddFile = ({ onCancel, onSubmit }: AddFileProps) => {
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
            console.log(fileMetaData)

            const { protocol, host, pathname } = new URL(fileUrl)
            const preparedFile: FileType = {
                preview: `${protocol}${host}${pathname}?alt=media`,
                title: fileMetaData.name,
                size: `${fileMetaData.size.toString()} KB`,
                format: '',
                id: parseInt(fileMetaData.generation),
            }
            filesData.push(preparedFile)
        }

        return filesData
    }

    const uploadFilesHandler = async (files: File[]) => {
        const filesData = await uploadFiles(files)

        setFiles(filesData)

        setLoading(false)
        setDrag(false)
    }

    const onDrop = async (e: any): Promise<void> => {
        e.preventDefault()
        let files = e.dataTransfer.files
        await uploadFilesHandler(files)
    }

    const onUploadClick = async (e: any): Promise<void> => {
        let files = e.target.files
        await uploadFilesHandler(files)
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
                                onClick={() => onSubmit(files)}
                            />
                        </StyledAddFileFooter>
                    )}
                </StyledAddFileFooter>
            }
        />
    )
}

export { AddFile }

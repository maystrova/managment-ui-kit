import React, { useEffect, useState } from 'react'

import { User } from 'services/user'
import { getAllFiles } from 'services/file'
import { FileType } from '../File/types'
import { File } from '../File'

interface FilesProps {
    fileIds: string[]
    user: User
}

const Files = ({ fileIds, user }: FilesProps) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [files, setFiles] = useState<FileType[]>([])

    const getFiles = async (fileIds: string[], user: User): Promise<void> => {
        try {
            setLoading(true)
            const allFiles = await getAllFiles(user)
            const filteredFiles = allFiles.filter(file =>
                fileIds.includes(file.id),
            )
            setFiles(filteredFiles)
        } catch (errors) {
            console.error(errors)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Boolean(fileIds?.length)) {
            getFiles(fileIds, user)
        }
    }, [fileIds, user])

    return (
        <div>
            {isLoading && 'Loading'}
            {Boolean(files.length) &&
                files.map(file => (
                    <File
                        id={file.id}
                        onFileDelete={() => {}}
                        taskId={file.taskId}
                        size={file.size}
                        format={file.format}
                        preview={file.preview}
                        title={file.title}
                        date={file.date}
                    />
                ))}
        </div>
    )
}

export { Files }

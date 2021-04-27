import { firebase } from 'services/firebase'
import 'firebase/storage'
import { User } from 'services/user'
import { FileType } from 'Components/File/types'

const getAllFiles = async (user: User): Promise<FileType[]> => {
    const serverFilesRef = firebase.database().ref(`users/${user.id}/files/`)
    const snapshot = await serverFilesRef.once('value')
    const serverFiles = snapshot.val()
    let files: FileType[] = []

    for (const fileId in serverFiles) {
        files.push({
            preview: serverFiles[fileId].preview,
            title: serverFiles[fileId].title,
            format: serverFiles[fileId].format,
            size: serverFiles[fileId].size,
            id: fileId,
            date: serverFiles[fileId].date,
            taskId: serverFiles[fileId].taskId,
        })
    }

    return files
}

const writeFile = async (
    file: FileType,
    user: User,
): Promise<string | null> => {
    return firebase.database().ref(`users/${user.id}/files`).push(file).key
}

export { getAllFiles, writeFile }

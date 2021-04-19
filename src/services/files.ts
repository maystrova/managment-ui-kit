import { firebase } from 'services/firebase'
import 'firebase/storage'
import { User } from 'services/user'
import { FileType } from '../Components/File/type'

const getAllFiles = async (user: User): Promise<FileType[]> => {
    const serverTasksRef = firebase.database().ref(`users/${user.id}/tasks/`)
    const snapshot = await serverTasksRef.once('value')
    const serverTasks = snapshot.val()
    let files: FileType[] = []

    for (const taskId in serverTasks) {
        if (Boolean(serverTasks[taskId]?.files.length)) {
            files = [...files, ...serverTasks[taskId].files]
        }
    }

    return files
}

export { getAllFiles }

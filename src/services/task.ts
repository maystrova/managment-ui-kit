import { TaskType } from 'Components/Task/types'
import { User } from 'services/user'
import { firebase } from 'services/firebase'

const createTask = async (task: TaskType, user: User) => {
    await firebase.database().ref(`users/${user.id}/tasks/`).push(task)
}

const updateTask = () => {}

const getAllTasks = async (user: User): Promise<TaskType[]> => {
    const serverTasksRef = firebase.database().ref(`users/${user.id}/tasks/`)

    const snapshot = await serverTasksRef.once('value')

    const serverTasks = snapshot.val()
    return Object.values(serverTasks)
}

export { createTask, updateTask, getAllTasks }
